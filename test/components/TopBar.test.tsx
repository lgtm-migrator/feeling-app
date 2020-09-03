import { shallow } from "enzyme"
import TopBar from "../../src/components/TopBar"
import ComponentStub from "../__mocks__/ComponentStub"

describe("Top Bar: ", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<TopBar
      title="Lorem ipsum"
      subtitle="dolor sit amet"
      backButton={true}
      rightIcon={{icon:ComponentStub, href:"/"}}
    />)

    expect(wrapper).toMatchSnapshot()
  })
})