import { shallow } from "enzyme"
import Landing from "../../../src/pages/landing"

describe("Landing: ", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Landing/>)
    expect(wrapper).toMatchSnapshot()
  })
})
