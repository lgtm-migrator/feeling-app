import { Emotion, getEmotionColor, renderEmoji } from "../../src/utils/emotions"

import AmazingIcon from "../assets/emojis/amazing.svg"

describe("Render an emotion's emoji: ", () => {
  it("returns an emoji", () => {
    const result = renderEmoji(Emotion.AMAZING)
    expect(result).toEqual(<AmazingIcon />)
  })

  it("returns nothing", () => {
    const result = renderEmoji()
    expect(result).toBeUndefined()
  })
})

describe("Emotion color: ", () => {
  it("returns the color used to represent the emotion", () => {
    const result = getEmotionColor(Emotion.ANGRY)
    expect(result).toEqual("var(--purple-color)")
  })

  it("returns a placeholder color", () => {
    const result = getEmotionColor()
    expect(result).toEqual("var(--light-grey-color)")
  })
})
