import { shallow } from "enzyme"

import CalendarMonth from "../../src/components/CalendarMonth"

describe("Calendar month: ", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(
      <CalendarMonth index={1} style={{ width: 600, height: 200 }} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
