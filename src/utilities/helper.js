import { formatDistanceToNow, format } from 'date-fns'

export const getRelativeDate = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true })
}

export const formatDate = (dateString) => {
  const date = new Date(dateString)
  const formattedDate = format(date, 'MMM do, yyyy')
  return formattedDate
}
