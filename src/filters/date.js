import moment from 'moment';

/**
 * function that transform received data to data from current moment
 * @param {string} time
 * @returns {string}
 */
export function timeAgoUTC (time) {
  const minutesAtWeek = 10080;

  /**
   * Get difference between current date and function argument[arg - time] data
   */
  const minutesPast = moment.utc().diff(moment.utc(time), 'week');
  return minutesPast > minutesAtWeek ? moment.utc(time).format('DD/MM/YYYY') : moment.utc(time).fromNow();
}
