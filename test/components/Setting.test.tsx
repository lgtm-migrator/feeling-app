import { shallow } from "enzyme"
import Setting from "../../src/components/Setting"

describe("Setting: ", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(
      <Setting title="Lorem ipsum" subtitle="dolor sit amet" href="/" />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
