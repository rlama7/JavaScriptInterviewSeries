/**
 * Given two calendars of a co-worker, write a program that finds the available time for a meeting with the
 * co-workder.
 *
 * Constratins/Restrictions:
 *  - Time will be given and should be returned in military times. For example: 10:30, 15:30, 21:30;
 *
 *  Time Complexity:
 *  time O(c1 + c2) -> where c1 and c2 are the respective numbers of meeting in calendars
 *  space O(c1+c2) ->
 *
 * @param {s} calendar1
 * @param {*} calendar2
 * @param {*} dailyBounds1
 * @param {*} dailyBounds2
 * @param {*} meetingDuration
 */
const calendar1 = [
  ['9:00', '10:30'],
  ['12:00', '13:00'],
  ['16:00', '18:00'],
];
const dailyBounds1 = ['9:00', '20:00'];

const calendar2 = [
  ['10:00', '11:30'],
  ['12:30', '14:30'],
  ['14:30', '15:00'],
  ['16:00', '17:00'],
];
const dailyBounds2 = ['10:00', '18:30'];
const meetingDuration = 30;

const updateCalendar = (calendar, dailyBounds) => {
  const updatedCalendar = [
    ['0:00, dailyBounds[0'],
    ...calendar,
    [dailyBounds[1], '23:59'],
  ]; // keep the data immutable therefore we simply copy the data
  return updatedCalendar.map((meeting) => meeting.map(timeToMinutes));
};

const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map((str) => parseInt(str));
  return hours * 60 + minutes;
};

console.log(updateCalendar(calendar1, dailyBounds1));
// [ [ 0 ], [ 540, 630 ], [ 720, 780 ], [ 960, 1080 ], [ 1200, 1439 ] ]

const mergeCalendars = (calendar1, calendar2) => {
  const merged = [];
  let left = 0,
    right = 0;

  while (left < calendar1.length && right < calendar2.length) {
    let meeting1 = calendar1[left];
    let meeting2 = calendar2[right];

    if (meeting1[0] < meeting2[0]) {
      merged.push(meeting1);
      left++;
    } else {
      merged.push(meeting2);
      right++;
    }
  }

  // if either calendar is shorter one of them will be empty sooner in
  // that case in simply take all fro the rest remaining calendar

  while (left < calendar1.length) merged.push(calendar1[left++]);
  while (right < calendar2.length) merged.push(calendar2[right++]);
  //   return [merged, ...calendar1, ...calendar2];
  return merged;
};

const flattenCalendar = (calendar) => {
  const flattened = [calendar[0].slice()];
  for (let index = 0; index < calendar.length; index++) {
    const currentMeeting = calendar[index];
    const previousMeeting = flattened[flattened.length - 1];
    const [currentStart, currentEnd] = currentMeeting;
    const [previouStart, previousEnd] = previousMeeting;

    if (previousEnd >= currentStart) {
      const newPreviousMeeting = [
        previouStart,
        Math.max(previousEnd, currentEnd),
      ];
      flattened[flattened.length - 1] = newPreviousMeeting;
    } else {
      flattened.push(currentMeeting.slice());
    }
  }
  return flattened;
};

const getMatchingAvailabilities = (calendar, meetingDuration) => {
  const matchingAvailabilities = [];

  for (let index = 1; index < calendar.length; index++) {
    const start = calendar[index - 1][1];
    const end = calendar[index][0];
    const availabilityDuration = end - start;

    if (availabilityDuration >= meetingDuration) {
      matchingAvailabilities.push([start, end]);
    }
  }
  return matchingAvailabilities.map((meeting) => meeting.map(minutesToTime));
};

const minutesToTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const hourString = hours.toString();
  const minuteString = mins < 10 ? '0' + mins.toString() : mins.toString();
  return hourString + ':' + minuteString;
};

const matchCalendar = (
  calendar1,
  calendar2,
  dailyBounds1,
  dailyBounds2,
  meetingDuration
) => {
  // first let's insert daily bounds for each calendar to the front and the end;
  // Next we'll transform string to integer so we can perform data transformation
  // Next let's merge calendar1 and calendar2 in ascending order
  // in a merge sort fashion
  // next we'll need to convert string time to int so we can perform
  // data transformation
  const updatedCalendar1 = updateCalendar(calendar1, dailyBounds1);
  const updatedCalendar2 = updateCalendar(calendar2, dailyBounds2);
  const mergedCalendar = mergeCalendars(updatedCalendar1, updatedCalendar2);
  const flattenedCalendar = flattenCalendar(mergedCalendar);
  return getMatchingAvailabilities(flattenedCalendar, meetingDuration);
};

// calendar1 time shows when the person1 with this calendar is not available for meeting
// in this calendar, person1 is not available 9-10:30 but available from 12-13 and so forth

// console.log(flattenCalendar(calendar1));

// const newCalendar = [...calendar1];
// console.log(newCalendar);

// console.log(updateCalendar(calendar1, dailyBounds1));

// console.log(updateCalendar(calendar1, dailyBounds1));
// calendar2 dispalys time when the person2 is not available for meeting
// from 10-11:30 but available during 11:30 - 12:30

// calendar2.forEach((item) => console.log(item[0]));

// console.log(dailyBounds2.split(':'));

console.log(
  matchCalendar(
    calendar1,
    calendar2,
    dailyBounds1,
    dailyBounds2,
    meetingDuration
  )
); // [ [ '11:30', '12:00' ], [ '15:00', '16:00' ], [ '18:00', '18:30' ] ]
