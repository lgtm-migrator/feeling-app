import { shallow } from "enzyme"
import Me from "../../../src/pages/me"

describe("Me: ", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Me />)
    expect(wrapper).toMatchSnapshot()
  })
})
