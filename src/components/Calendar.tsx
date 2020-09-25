import AutoSizer from "react-virtualized-auto-sizer"
import { useEffect, useRef } from "react"
import { VariableSizeList } from "react-window"
import { getWeeksInMonth } from "date-fns"

import Month from "./CalendarMonth"
import { getDateFromIndex, getIndexFromDate, MAX_DATE } from "../utils/dates"

const remToPixels = (rem: number) =>
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize)

function calculateMonthHeight(index: number): number {
  const marginBottom = 24
  const monthTitle = remToPixels(1.6) + 12
  const weekDayTitle = remToPixels(1.2) + 8

  const date = getDateFromIndex(index)
  const weeks = getWeeksInMonth(date)

  const viewportWidth = Math.min(document.documentElement.clientWidth, 600)
  const dayHeight = (viewportWidth - 8 - 8 - 6 * 4) / 7
  const daysHeight = dayHeight * weeks
  const gridGap = 8 * (weeks + 1)

  return monthTitle + weekDayTitle + marginBottom + daysHeight + gridGap
}

function CalendarList({
  width,
  height,
}: {
  width: number
  height: number
}): JSX.Element {
  const listRef = useRef<VariableSizeList>()

  // Scroll to current month
  useEffect(() => {
    listRef.current?.scrollToItem(getIndexFromDate(new Date()), "smart")
  })

  // Rerender list if window is resized
  useEffect(() => {
    const rerenderCalendar = () => listRef.current?.resetAfterIndex(0)
    window.addEventListener("resize", rerenderCalendar)

    return () => window.removeEventListener("resize", rerenderCalendar)
  }, [listRef.current])

  return (
    <VariableSizeList
      itemCount={getIndexFromDate(MAX_DATE)}
      itemSize={calculateMonthHeight}
      height={height}
      width={width}
      ref={listRef}
      overscanCount={3}
    >
      {({ index, style }) => <Month index={index} key={index} style={style} />}
    </VariableSizeList>
  )
}

export default function Calendar(): JSX.Element {
  return (
    <AutoSizer>
      {({ width, height }) => <CalendarList width={width} height={height} />}
    </AutoSizer>
  )
}
