import { shallow } from "enzyme"
import { advanceTo } from "jest-date-mock"

import * as Calendar from "../../src/components/Calendar"

describe("Calendar: ", () => {
  it("matches snapshot", () => {
    advanceTo(new Date(2021, 0, 1))

    const wrapper = shallow(<Calendar.default />)
    expect(wrapper).toMatchSnapshot()
  })

  it("calendar list matches snapshot", () => {
    const wrapper = shallow(<Calendar.CalendarList width={400} height={800} />)
    expect(wrapper).toMatchSnapshot()
  })

  it("converts rem to pixels", () => {
    document.documentElement.style.setProperty("font-size", "10px")
    const result = Calendar.remToPixels(1.6)
    expect(result).toEqual(16)
  })

  it("calculates month height", () => {
    document.documentElement.style.setProperty("font-size", "10px")

    jest
      .spyOn(document.documentElement, "clientWidth", "get")
      .mockImplementation(() => 1000)

    const fiveRowMonth = Calendar.calculateMonthHeight(0)
    expect(fiveRowMonth).toEqual(520)

    const sixRowMonth = Calendar.calculateMonthHeight(4)
    expect(sixRowMonth).toEqual(608)
  })
})
