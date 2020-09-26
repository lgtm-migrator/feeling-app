import { shallow } from "enzyme"

import Calendar from "../../src/components/Calendar"

describe("Calendar: ", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Calendar />)
    expect(wrapper).toMatchSnapshot()
  })
})
