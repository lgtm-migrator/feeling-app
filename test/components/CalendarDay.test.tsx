import { shallow } from "enzyme"

import CalendarDay from "../../src/components/CalendarDay"
import { Emotion } from "../../src/utils/emotions"

describe("Calendar day: ", () => {
  it("blank day matches snapshot", () => {
    const wrapper = shallow(
      <CalendarDay date={new Date(2000, 1, 1)} blank={true} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it("greyed out day matches snapshot", () => {
    const wrapper = shallow(<CalendarDay date={new Date(2000, 1, 1)} />)
    expect(wrapper).toMatchSnapshot()
  })

  it("matches snapshot", () => {
    const wrapper = shallow(
      <CalendarDay date={new Date(2000, 1, 1)} emotion={Emotion.AMAZING} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
