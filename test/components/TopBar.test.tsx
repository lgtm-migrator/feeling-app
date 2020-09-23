import { shallow } from "enzyme"
import TopBar from "../../src/components/TopBar"
import ComponentStub from "../__mocks__/ComponentStub"
import Router from "next/router"

jest.mock("next/router", () => ({
  back: jest.fn(),
}))

describe("Top Bar: ", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("matches snapshot", () => {
    const wrapper = shallow(
      <TopBar
        title="Lorem ipsum"
        subtitle="dolor sit amet"
        backButton={true}
        rightIcon={{ icon: ComponentStub, href: "/" }}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it("clicking back icon causes router to go back", () => {
    const wrapper = shallow(<TopBar backButton={true} />)

    wrapper.find("[data-test='top-bar-back-icon']").simulate("click")
    expect(Router.back).toBeCalledTimes(1)
  })
})
