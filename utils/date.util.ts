import { format } from 'date-fns'

// Sun, Jan 1, 1970
const asLongDate = (date?: Date | string | null) => {
  const d = date || new Date();
  return format(d, "EEE, MMM d, yyyy");
}

// Jan 1, 1970 | 1:00 AM
const asDateTime = (date?: Date | string | null) => {
  const d = date || new Date();
  return format(d, "MMM d, yyyy | h:mm a");
}

export const dateUtil = {
  asLongDate,
  asDateTime,
}