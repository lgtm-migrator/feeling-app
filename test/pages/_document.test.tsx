import { shallow } from "enzyme"
import MyDocument from "../../src/pages/_document"

describe("Document: ", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<MyDocument />)
    expect(wrapper).toMatchSnapshot()
  })
})
