import addMonths from "date-fns/addMonths"
import { differenceInMonths } from "date-fns/esm"

// Specify limits for the calendar in the Me tab
export const MIN_DATE = new Date(2000, 0, 1)
export const MAX_DATE = new Date(2001, 0, 1)

export const getDateFromIndex = (index: number): Date =>
  addMonths(MIN_DATE, index)

export const getIndexFromDate = (date: Date): number =>
  differenceInMonths(date, MIN_DATE)
