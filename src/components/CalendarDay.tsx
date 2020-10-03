import Link from "next/link"
import { styled } from "linaria/react"
import { format, isToday } from "date-fns"

import { Emotion, getEmotionColor, renderEmoji } from "../utils/emotions"

const Container = styled.a`
  display: grid;
  grid-template-areas: "content";
  justify-items: center;
  align-items: center;
  width: 100%;
`

const Background = styled.div<{ backgroundColor?: string; isToday?: boolean }>`
  grid-area: content;
  border-radius: 12px;
  background-color: ${(props) =>
    props.backgroundColor || "var(--light-grey-color)"};
  width: 100%;
  height: 0;
  padding-bottom: 100%;

  box-shadow: ${(props) =>
    props.isToday ? "0 0 0 2px rgba(0, 0, 0, 0.8) inset" : "initial"};
`

const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 50%;
    margin-top: var(--space-xxxs);
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.15));
  }
`

const Date = styled.p`
  font-weight: 600;
  font-size: clamp(10px, 2vw, 16px);
  opacity: 0.75;
`

interface Props {
  date: Date
  emotion?: Emotion
  blank?: boolean
}

export default function CalendarDay(props: Props): JSX.Element {
  // Used as an invisible placeholder when a month starts later in the week
  if (props.blank) {
    return (
      <Container as="div">
        <Background backgroundColor="transparent" />
      </Container>
    )
  }

  // Greyed out day when no feelings have been logged for that day
  if (!props.emotion) {
    return (
      <Container as="div">
        <Background isToday={isToday(props.date)} />
      </Container>
    )
  }

  return (
    <Link
      href="/me/day/[date]"
      as={"/me/day/" + format(props.date, "dd-MM-yyyy")}
      passHref={true}
    >
      <Container aria-label={format(props.date, "Mo MMMM yyyy")}>
        <Background
          backgroundColor={getEmotionColor(props.emotion)}
          isToday={isToday(props.date)}
        />
        {props.emotion && (
          <Content>
            <Date>{props.date.getDate()}</Date>
            {renderEmoji(props.emotion)}
          </Content>
        )}
      </Container>
    </Link>
  )
}
