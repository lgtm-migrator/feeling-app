import each from "jest-each"
import { Emotion, getEmotionColor, renderEmoji } from "../../src/utils/emotions"

import AngryIcon from "../assets/emojis/angry.svg"
import UpsetIcon from "../assets/emojis/upset.svg"
import UnsureIcon from "../assets/emojis/unsure.svg"
import GreatIcon from "../assets/emojis/great.svg"
import AmazingIcon from "../assets/emojis/amazing.svg"

describe("Render an emotion's emoji: ", () => {
  const emotionIcons = [
    { emotion: Emotion.ANGRY, icon: <AngryIcon /> },
    { emotion: Emotion.UPSET, icon: <UpsetIcon /> },
    { emotion: Emotion.UNSURE, icon: <UnsureIcon /> },
    { emotion: Emotion.GREAT, icon: <GreatIcon /> },
    { emotion: Emotion.AMAZING, icon: <AmazingIcon /> },
    [undefined, undefined],
  ]

  each(emotionIcons).it("returns an emoji", (emotionIcon) => {
    const result = renderEmoji(emotionIcon.emotion)
    expect(result).toEqual(emotionIcon.icon)
  })
})

describe("Emotion color: ", () => {
  const emotionColors = [
    { emotion: Emotion.ANGRY, color: "var(--purple-color)" },
    { emotion: Emotion.UPSET, color: "var(--blue-color)" },
    { emotion: Emotion.UNSURE, color: "var(--green-color)" },
    { emotion: Emotion.GREAT, color: "var(--yellow-color)" },
    { emotion: Emotion.AMAZING, color: "var(--red-color)" },
    [undefined, "var(--light-grey-color)"],
  ]

  each(emotionColors).it(
    "returns the color used to represent the emotion",
    (emotionColor) => {
      const result = getEmotionColor(emotionColor.emotion)
      expect(result).toEqual(emotionColor.color)
    }
  )
})
