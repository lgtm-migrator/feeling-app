import { shallow } from "enzyme"
import Settings from "../../../src/pages/settings"

describe("Settings: ", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Settings/>)
    expect(wrapper).toMatchSnapshot()
  })
})
