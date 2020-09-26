import { shallow } from "enzyme"

import * as Calendar from "../../src/components/Calendar"

describe("Calendar: ", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Calendar.default />)
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

    const height = Calendar.calculateMonthHeight(1)
    expect(height).toEqual(520)
  })
})
