import { useState, useEffect } from "react";
import clsx from "clsx";
import { getTimeZoneGMT, getHoursTwoDigits, getMinutesTwoDigits } from "@utils";

const LocalTime = ({ id, className }) => {
  const now = new Date();

  const [localTime, setLocalTime] = useState({
    localDateString: now.toLocaleDateString(),
    hours: getHoursTwoDigits(now),
    minutes: getMinutesTwoDigits(now),
    timezone: getTimeZoneGMT(now),
  });

  useEffect(() => {
    let timer = setInterval(() => {
      const updateNow = new Date();
      setLocalTime({
        localDateString: updateNow.toLocaleDateString(),
        hours: getHoursTwoDigits(updateNow),
        minutes: getMinutesTwoDigits(updateNow),
        timezone: getTimeZoneGMT(updateNow),
      });
    }, 60000); // update every minutes
    return () => clearInterval(timer);
  }, []);

  const borderStyle = clsx(
    "w-[20px] sm:h-[1px] h-[0.5px]",
    "bg-coffee-600/60 dark:bg-coffee-600/70"
  );

  return (
    <div
      id={id}
      className={clsx(
        className,
        "flex flex-col items-center gap-[3px]",
        "leading-none"
      )}
    >
      <p className="uppercase">My Local Time</p>
      <hr className={clsx("mx-auto", "border-0", borderStyle)} />
      <p>
        {localTime.hours}:{localTime.minutes} ({localTime.timezone})
      </p>
    </div>
  );
};

export default LocalTime;
