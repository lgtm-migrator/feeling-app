import { shallow } from "enzyme"
import Landing, { Header } from "../../../src/pages/landing"

describe("Landing: ", () => {
  it("matches Landing snapshot", () => {
    const wrapper = shallow(<Landing/>)
    expect(wrapper).toMatchSnapshot()
  })

  it("matches Header snapshot", () => {
    const wrapper = shallow(<Header/>)
    expect(wrapper).toMatchSnapshot()
  })
})
