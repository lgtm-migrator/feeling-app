import { shallow } from "enzyme"
import TabBar, { Tab } from "../../src/components/TabBar"
import * as nextRouter from "next/router"
import each from "jest-each"

nextRouter.useRouter = jest.fn()

describe("Tab Bar: ", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  each(['/me','/insights']).it('matches tab bar snapshot in %s', path => {
    nextRouter.useRouter.mockImplementation(() => ({ pathname: path }))
    const wrapper = shallow(<TabBar/>)
    expect(wrapper).toMatchSnapshot()
  })

  each([true, false]).it('matches tab snapshot when active=%s', isActive => {
    const wrapper = shallow(<Tab active={isActive} />)
    expect(wrapper).toMatchSnapshot()
  })
})
