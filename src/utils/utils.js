/*
  Takes in number of minutes and returns string with minutes converted to hours and minutes.
  Example: If num is 125 the string '2h 5m' will be returned.
*/
export function convertMinutesToHoursAndMinutes (num) {
  const hours = Math.floor(num/60) === 0 ? '' : Math.floor(num/60) + 'h'
  const minutes = num%60 === 0 ? '' : num%60 + 'm'
  return hours + ' ' + minutes
}
