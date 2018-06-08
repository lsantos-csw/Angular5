
// <editor-fold> DATES ******************

/**
 * Verifies if two date intervals overlap
 * @param  start1 DateInterval1 start date
 * @param  end1   DateInterval1 end date
 * @param  start2 DateInterval2 start date
 * @param  end2   DateInterval2 end date
 * @return        true if dates overlap, otherwise returns false
 */
export function datesOverlap(start1: Date, end1: Date, start2: Date, end2: Date) {
  if (!!!start1 || !!!end1 || !!!start2 || !!!end2) {
    return false;
  }
  return (start1 <= end2) && (start2 <= end1);
}

/**
 * Adds months to a date
 * @param  dt Date to add months to
 * @param  n  number of months to add
 * @return    a new date with added months
 */
export function addMonthsToDate(dt: Date, n: number) {
  if (!!!dt || !!!n) {
    return null;
  }
  const date = new Date(dt);
  return new Date(date.setMonth(date.getMonth() + n));
}
// </editor-fold> ******************


export function throttle(fn, wait) {
  let time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  };
}
