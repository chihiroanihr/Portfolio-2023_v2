import clsx from "clsx";
import { MdLocationPin } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";

const Subtitle = ({ id, index, date, location }) => {
  // ************************* CSS ************************* //
  const subtitleTextColor = "text-coffee-400";

  const subtitleTextStyle = clsx(
    "sm:text-[14px] xs:text-[13px] text-[12px]",
    subtitleTextColor
  );

  // ************************* JSX ************************* //
  return (
    <div
      id={id}
      className={clsx(
        "mt-[5px]",
        "flex flex-wrap items-center",
        { "md:self-end": index % 2 === 0 },
        "gap-x-2 gap-y-1",
        subtitleTextStyle
      )}
    >
      {/* Date */}
      {date && (
        <div className="flex items-center">
          <IoCalendar size={20} className="inline-block mr-[4px]" />
          <p>{date}</p>
        </div>
      )}

      {/* Location */}
      {location && (
        <div className="flex items-center">
          <MdLocationPin size={20} className="inline-block" />
          <p>{location}</p>
        </div>
      )}
    </div>
  );
};

export default Subtitle;
