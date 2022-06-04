import { format as fnsFormat } from "date-fns"

export const format = (date, stringFormat = 'dd/MM/yy') => {
  if (!date) return console.error('no date')
  const objectDate = new Date(date)
  function isValidDate(d) {
    return d instanceof Date && !isNaN(d)
  }

  if (isValidDate(objectDate)) {
    return fnsFormat(new Date(objectDate.setMinutes(objectDate.getMinutes() + objectDate.getTimezoneOffset())), stringFormat)
  } else {
    console.error('date is not valid date')
  }
}
