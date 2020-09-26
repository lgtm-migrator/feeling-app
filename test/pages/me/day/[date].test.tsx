import { shallow } from "enzyme"
import Date from "../../../../src/pages/me/day/[date]"

nextRouter.useRouter = jest.fn()

describe("Me: ", () => {
  it("matches snapshot", () => {
    nextRouter.useRouter.mockImplementation(() => ({
      query: { date: "01-01-2020" },
    }))
    const wrapper = shallow(<Date />)
    expect(wrapper).toMatchSnapshot()
  })
})
