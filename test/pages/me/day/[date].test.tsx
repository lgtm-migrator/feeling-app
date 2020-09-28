import * as nextRouter from "next/router"
import { mount, shallow } from "enzyme"

import Date from "../../../../src/pages/me/day/[date]"

nextRouter.useRouter = jest.fn()

describe("Me: ", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("matches snapshot", () => {
    nextRouter.useRouter.mockImplementation(() => ({
      query: { date: "01-01-2020" },
    }))
    const wrapper = shallow(<Date />)
    expect(wrapper).toMatchSnapshot()
  })

  it("renders nothing when date is not provided", () => {
    nextRouter.useRouter.mockImplementation(() => ({
      query: { date: undefined },
    }))
    const wrapper = shallow(<Date />)
    expect(wrapper).toMatchSnapshot()
  })

  it("redirects to /me when no date is provided", () => {
    const mockPush = jest.fn()
    nextRouter.useRouter.mockImplementation(() => ({
      query: { date: null },
      push: mockPush,
    }))
    mount(<Date />)
    expect(mockPush).toHaveBeenCalledWith("/me")
  })
})

it("Renders nothing when date is not provided", () => {
  nextRouter.useRouter.mockImplementation(() => ({
    query: { date: null },
  }))
  const wrapper = shallow(<Date />)
  expect(wrapper).toMatchSnapshot()
})

it("Redirects to /me when no date is provided", () => {
  const mockPush = jest.fn()
  nextRouter.useRouter.mockImplementation(() => ({
    query: { date: null },
    push: mockPush,
  }))
  const wrapper = mount(<Date />)
  expect(mockPush).toHaveBeenCalledWith("/me")
})
