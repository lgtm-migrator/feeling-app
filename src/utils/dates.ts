import { differenceInMonths, addMonths, addYears } from "date-fns"

// Specify limits for the calendar in the Me tab
export const MIN_DATE = new Date(2020, 0, 1)
export const MAX_DATE = addYears(new Date(), 1)

export const getDateFromIndex = (index: number, minDate = MIN_DATE): Date =>
  addMonths(MIN_DATE, index)

export const getIndexFromDate = (date: Date, minDate = MIN_DATE): number =>
  differenceInMonths(date, MIN_DATE)
