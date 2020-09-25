import { shallow } from "enzyme"
import SettingItem from "../../src/components/SettingItem"

describe("Setting: ", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(
      <SettingItem title="Lorem ipsum" subtitle="dolor sit amet" href="/" />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it("matches snapshot without subtitle", () => {
    const wrapper = shallow(<SettingItem title="Lorem ipsum" href="/" />)
    expect(wrapper).toMatchSnapshot()
  })

  it("matches snapshot without href", () => {
    const wrapper = shallow(
      <SettingItem title="Lorem ipsum" subtitle="dolor sit amet" />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it("matches snapshot without subtitle and href", () => {
    const wrapper = shallow(<SettingItem title="Lorem ipsum" />)
    expect(wrapper).toMatchSnapshot()
  })
})
