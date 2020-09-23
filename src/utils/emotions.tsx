import AngryIcon from "../assets/emojis/angry.svg"
import UpsetIcon from "../assets/emojis/upset.svg"
import UnsureIcon from "../assets/emojis/unsure.svg"
import GreatIcon from "../assets/emojis/great.svg"
import AmazingIcon from "../assets/emojis/amazing.svg"

export enum Emotion {
  ANGRY = "angry",
  UPSET = "upset",
  UNSURE = "unsure",
  GREAT = "great",
  AMAZING = "amazing",
}

export function getEmotionColor(emotion: Emotion): string {
  switch (emotion) {
    case Emotion.ANGRY:
      return "var(--purple-color)"
    case Emotion.UPSET:
      return "var(--blue-color)"
    case Emotion.UNSURE:
      return "var(--green-color)"
    case Emotion.GREAT:
      return "var(--yellow-color)"
    case Emotion.AMAZING:
      return "var(--red-color)"
    default:
      return "var(--light-grey-color)"
  }
}

export function renderEmoji(emotion: Emotion): JSX.Element {
  switch (emotion) {
    case Emotion.ANGRY:
      return <AngryIcon />
    case Emotion.UPSET:
      return <UpsetIcon />
    case Emotion.UNSURE:
      return <UnsureIcon />
    case Emotion.GREAT:
      return <GreatIcon />
    case Emotion.AMAZING:
      return <AmazingIcon />
    default:
      return undefined
  }
}
