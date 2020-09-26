import { shallow } from "enzyme"
import Date from "../../../../src/pages/me/day/[date]"

describe("Me: ", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Date />)
    expect(wrapper).toMatchSnapshot()
  })
})
