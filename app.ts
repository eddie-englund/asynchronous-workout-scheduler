import { DateTime } from 'luxon';

// Change the date to the date you want to start on
const startDate = DateTime.fromISO("2024-10-14");
// Change the limit to the year you want to plan to
const toYearLimit = 2024 as const;

const result: string[][] = []
const fmt = "MMM dd EEE" as const;

/**
 * A simple TS script to generate an asynchronous workout schedule
 * @param days DO NOT PASS
 * @returns 
 */
const generateAsyncSchedule = ( toYear: number, days = 0,) => {
  const dayOne = startDate.plus({ days })

  // We only want to scheduele for a year (change this to however long you want to plan forward in years)
  // Note that this MUST exist if not the script will error

  if (dayOne.year !== toYear) return;

  const dayTwo = startDate.plus({ days: days + 1 }).toFormat(fmt)
  result.push([dayOne.toFormat(fmt), dayTwo]);

  generateAsyncSchedule(days + 4)
};

generateAsyncSchedule(0, toYearLimit)

console.log(result);

