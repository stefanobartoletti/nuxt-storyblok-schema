export function useFormatDate(date: string, options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }) {
  // Parsed from its parts: `new Date('YYYY-MM-DD')` is UTC and can shift the day
  const [year, month, day] = date.slice(0, 10).split('-').map(Number)
  return new Date(year!, month! - 1, day!).toLocaleDateString('en', options)
}
