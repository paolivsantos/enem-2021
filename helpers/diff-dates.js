export default function getDiffDate(date1, date2) {
  const differenceInTime = date2.getTime() - date1.getTime()
  return parseInt(differenceInTime / (1000 * 3600 * 24), 10)
}