import { shallow } from "enzyme"
import Insights from "../../../src/pages/insights"

describe("Insights: ", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Insights />)
    expect(wrapper).toMatchSnapshot()
  })
})
