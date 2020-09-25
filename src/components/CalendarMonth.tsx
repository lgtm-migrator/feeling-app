import { CSSProperties } from "react"
import { styled } from "linaria/react"
import { addDays, format, getDaysInMonth, getISODay } from "date-fns/esm"

import CalendarDay from "./CalendarDay"
import { getDateFromIndex } from "../utils/dates"

const Container = styled.div`
  display: flex;
  justify-content: center;

  &:last-child {
    :after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      bottom: calc(-1 * var(--tab-bar-height));
      height: var(--tab-bar-height);
      width: 100%;
    }
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: clamp(4px, 100vw, 8px);
  margin-bottom: var(--space-m);
  justify-items: center;
  user-select: none;
  max-width: 600px;
  min-width: 270px;
  width: 100%;
`

const MonthTitle = styled.p`
  grid-column: -1 / 1;
  justify-self: center;
  margin-bottom: var(--space-xs);
  color: var(--grey-color);
  font-size: 1.6rem;
  line-height: 1;
`

const WeekDayTitle = styled.div`
  margin-bottom: var(--space-xxs);
  color: var(--grey-color);
  font-size: 1.2rem;
  text-align: center;
  line-height: 1;
`

interface Props {
  index: number
  style: CSSProperties
}

export default function Month(props: Props): JSX.Element {
  const date = getDateFromIndex(props.index)
  const numberOfDays = getDaysInMonth(date)
  const day = getISODay(date) % 7

  return (
    <Container style={props.style}>
      <Content>
        <MonthTitle>{format(date, "MMMM yyyy")}</MonthTitle>

        <WeekDayTitle>M</WeekDayTitle>
        <WeekDayTitle>T</WeekDayTitle>
        <WeekDayTitle>W</WeekDayTitle>
        <WeekDayTitle>T</WeekDayTitle>
        <WeekDayTitle>F</WeekDayTitle>
        <WeekDayTitle>S</WeekDayTitle>
        <WeekDayTitle>S</WeekDayTitle>

        {/* Add blank calendar days so actual ones are inline with week day titles */}
        {Array.from({ length: day }).map((_, index) => (
          <CalendarDay date={date} blank={true} key={index} />
        ))}

        {Array.from({ length: numberOfDays }).map((_, index) => (
          <CalendarDay date={addDays(date, index)} key={index} />
        ))}
      </Content>
    </Container>
  )
}
