import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { ISelectUnit, ITime } from "./types";

let interval: any;
const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["seconds", 1],
];

const getDateDiffs = (timestamp: number): ITime | void => {
  const now = Date.now();
  const elapsed = timestamp - now;

  for (const [units, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || units === "seconds") {
      const value = Math.round(elapsed / Number(secondsInUnit));
      return { value, units };
    }
  }
};

const selectUnit: ISelectUnit = {
  day: 86400001,
  hour: 3600001,
  minute: 120001,
  seconds: 14000,
};

const relativeTime = (
  getDateDiffs: (timestamp: number) => ITime | void,
  timestamp: number
) => {
  const { units } = getDateDiffs(timestamp) as ITime;
  console.log(selectUnit[units as keyof ISelectUnit]);
  return selectUnit[units as keyof ISelectUnit];
};

const updateTimeWithInterval = (
  getDateDiffs: (timestamp: number) => ITime | void,
  setState: Dispatch<SetStateAction<void | ITime>>,
  timestamp: number
) => {
  interval = setInterval(
    () => setState(getDateDiffs(timestamp)),
    relativeTime((timestamp) => getDateDiffs(timestamp), timestamp)
  );
};

const APIFormatDate = (timeago: ITime | void) => {
  const { value, units } = timeago as ITime;

  const rtf = new Intl.RelativeTimeFormat("en", { style: "short" });

  return rtf.format(value, units);
};

function useTimeAgo(timestamp: number) {
  const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp));

  useEffect(() => {
    updateTimeWithInterval(getDateDiffs, setTimeago, timestamp);
    return () => clearInterval(interval);
  }),
    [timeago];

  return APIFormatDate(timeago);
}

export default useTimeAgo;
