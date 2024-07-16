export type Time = {
  hour: number
  minute: number
}

const compareTime = (a: Time, b: Time): number =>
  a.hour === b.hour ? a.minute - b.minute : a.hour - b.hour

export const getPreviousTime = (a: Time, b: Time): Time =>
  compareTime(a, b) > 0 ? b : a

export const deltaTimeToPixel = (
  start: Time,
  end: Time,
  hourGridHeight: number = 60,
): number => {
  if (compareTime(start, end) > 0)
    return deltaTimeToPixel(end, start, hourGridHeight)
  return (
    hourGridHeight *
    (end.minute >= start.minute
      ? end.hour - start.hour + (end.minute - start.minute) / 60
      : end.hour - start.hour - 1 + (60 + end.minute - start.minute) / 60)
  )
}
