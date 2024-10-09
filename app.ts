import { DateTime } from 'luxon';

// Change the date to the date you want to start on
const startDate = DateTime.fromISO('2024-10-14');
// Change the limit to the year you want to plan to
const toYearLimit = 2024 as const;

const result: string[][] = [];
const fmt = 'MMM dd EEE' as const;

/**
 * A simple TS script to generate an asynchronous workout schedule
 * @param days DO NOT PASS
 * @param workoutDays how many days to train in a row
 * @param restDays how many rest days after the workoutDays you will have
 * @returns
 */
const generateAsyncSchedule = (
  toYear: number,
  workoutDays: number,
  restDays: number,
  days = 0,
) => {
  console.log()
  const dayOne = startDate.plus({ days });

  // We only want to scheduele for a year (change this to however long you want to plan forward in years)
  // Note that this MUST exist if not the script will error

  if (dayOne.year !== toYear) return;

  const workOutDays = Array(workoutDays)
    .fill(0)
    .map((_, i) => startDate.plus({ days: days + i }).toFormat(fmt));

  result.push(workOutDays);
  generateAsyncSchedule(toYear, workoutDays, restDays, days + workoutDays + restDays);
};

generateAsyncSchedule(toYearLimit, 2, 2);

console.log(result);
