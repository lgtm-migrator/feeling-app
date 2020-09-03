import { shallow } from "enzyme"
import TabBar from "../../src/components/TabBar"
import * as nextRouter from "next/router"

nextRouter.useRouter = jest.fn()
nextRouter.useRouter.mockImplementation(() => ({ route: "/" }))

describe("Tab Bar: ", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<TabBar/>)
    expect(wrapper).toMatchSnapshot()
  })
})
