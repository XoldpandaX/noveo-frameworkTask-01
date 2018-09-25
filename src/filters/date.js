import moment from 'moment';

/**
 * function that transform received data to data from current moment
 * @param {string} time
 * @returns {string}
 */
export function timeAgoUTC(time) {
  moment.locale('en');
  const minutesAtWeek = 10080;
  
  /**
   * Get difference between current date and function argument[arg - time] data
   * moment return difference at milliseconds, then we transformed it in minutes
   * [1000msec == 1sec, 60sec == 1min]
   */
  const minutesPast = moment.utc().diff(moment.utc(time)) / 1000 / 60;
  return minutesPast > minutesAtWeek ? moment.utc(time).format('DD/MM/YYYY') : moment.utc(time).fromNow();
}
