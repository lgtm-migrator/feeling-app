import { shallow } from "enzyme"
import MyApp from "../../src/pages/_app"
import ComponentStub from "../__mocks__/ComponentStub"
import * as Utils from "next/dist/next-server/lib/utils"

jest.mock("next/link", () => ({}))
jest.mock("next/router", () => ({}))
Utils.getDisplayName = jest.fn()

describe("App: ", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("matches snapshot when is on landing page", () => {
    Utils.getDisplayName.mockImplementation(() => "Landing")

    const wrapper = shallow(<MyApp Component={ComponentStub}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it("matches snapshot when is on the App", () => {
    Utils.getDisplayName.mockImplementation(() => "App")

    const wrapper = shallow(<MyApp Component={ComponentStub}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
