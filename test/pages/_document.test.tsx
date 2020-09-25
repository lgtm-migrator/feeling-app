import { shallow } from "enzyme"
import MyDocument from "../../src/pages/_document"
import Document from "next/document"

jest.spyOn(Document, "getInitialProps").mockImplementation(() => {
  return new Promise(function (resolve, reject) {
    resolve({})
  })
})

jest.mock("svg-sprite-loader/runtime/sprite.build", () => ({
  stringify: jest.fn(() => "stringified"),
}))

describe("Document: ", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<MyDocument />)
    expect(wrapper).toMatchSnapshot()
  })

  it("Gets initial props", async () => {
    const props = await MyDocument.getInitialProps({})
    expect(props).toEqual({ spriteContent: "stringified" })
  })
})
