import { getDateFromIndex, getIndexFromDate } from "../../src/utils/dates"

describe("Dates: ", () => {
  it("Gets the date by index", () => {
    const date = getDateFromIndex(20, new Date(2000, 1, 1))
    const expectedDate = new Date(2001, 9, 1).toISOString()
    expect(date.toISOString()).toEqual(expectedDate)
  })

  it("Gets the index from date", () => {
    const index = getIndexFromDate(new Date(2001, 9, 1), new Date(2000, 1, 1))
    expect(index).toEqual(20)
  })
})
