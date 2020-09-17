import VirtualList from "react-tiny-virtual-list"
import AutoSizer from "react-virtualized-auto-sizer"
import getWeeksInMonth from "date-fns/getWeeksInMonth"

import Month from "./CalendarMonth"
import { getDateFromIndex, getIndexFromDate, MAX_DATE } from "../utils/dates"
import { useEffect, useRef } from "react"

const remToPixels = (rem: number) =>
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize)

function calculateMonthHeight(index: number): number {
  const marginBottom = 24
  const monthTitle = remToPixels(1.6) + 12
  const weekDayTitle = remToPixels(1.2) + 8

  const date = getDateFromIndex(index)
  const weeks = getWeeksInMonth(date)

  const viewportWidth = document.documentElement.clientWidth
  const dayHeight = (viewportWidth - 8 - 8 - 6 * 4) / 7
  const daysHeight = dayHeight * weeks
  const gridGap = 4 * (weeks + 2)

  return monthTitle + weekDayTitle + marginBottom + daysHeight + gridGap
}

export default function Calendar(): JSX.Element {
  const virtualListRef = useRef<VirtualList>()

  useEffect(() => {
    let resizeTimer

    function handleResize() {
      clearTimeout(resizeTimer)

      resizeTimer = setTimeout(function () {
        if (virtualListRef.current) {
          const index = getIndexFromDate(new Date())
          virtualListRef.current.recomputeSizes(index)
        }
      }, 250)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <AutoSizer defaultWidth="100%" disableWidth={true}>
      {({ height }) => (
        <VirtualList
          ref={virtualListRef}
          itemCount={getIndexFromDate(MAX_DATE)}
          renderItem={({ index, style }) => (
            <Month index={index} key={index} style={style} />
          )}
          itemSize={calculateMonthHeight}
          scrollToIndex={getIndexFromDate(new Date())}
          scrollToAlignment="start"
          overscanCount={10}
          height={height}
          width="100%"
        />
      )}
    </AutoSizer>
  )
}
