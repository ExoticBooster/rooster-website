import moment from 'moment';

export function convertDate(value, format) {
  if (format === 'short') {
    return moment(value).format('DD.MM');
  }

  if (format === 'normal') {
    return moment(value).format('DD.MM.YYYY');
  }

  // Für Kalendar MM.DD.YYYY
  return moment(value).toDate();
}

export function dateEqual(d1, d2) {
  return moment(d1).isSame(d2);
}
