import { useMemo } from "react";
import { MdLocationPin } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import { workTimelineData } from "@data";

const TimelineWorkChart = (props) => {
  // Memoize data array to avoid getting created on every re-render
  const memoizedWorkTimelineData = useMemo(() => workTimelineData, []);

  return (
    <div
      id="work-timeline"
      className="bg-coffee-100 text-coffee-800/80 font-default-sans"
    >
      {/* Work Timeline */}
      <h1 id="heading" className="text-center text-[44px]">
        Work Experience
      </h1>
      {/* Line */}
      <div
        id="line"
        className="relative overflow-hidden w-full mx-auto my-[50px] sm:p-[50px] p-[30px]
        before:content-[''] before:absolute before:top-0 before:md:left-1/2 before:sm:left-[58px] before:left-[38px] before:-ml-px
        before:w-[2px] before:h-full before:bg-coffee-400"
      >
        {memoizedWorkTimelineData.map((item, index) => (
          <div
            key={item.id}
            id="block"
            className={`relative md:w-1/2 md:mb-[28px] mb-[68px] w-full flex clear-both ${
              index % 2 === 1
                ? "md:float-right md:mr-[8px]"
                : "md:float-left md:ml-[8px] md:flex-row-reverse md:text-right"
            }`}
          >
            {/* Marker */}
            <div
              id="marker"
              className="mt-[45px] z-10 w-[16px] h-[16px] rounded-full border-[2px] bg-coffee-800 border-coffee-100"
            />
            {/* <div
            id="timeline-line"
            className={`absolute h-full left-[7px] ${
              index % 2 === 1 ? "md:left-[8px]" : "md:right-[8px]"
            }
            before:content-[''] before:absolute before:w-[2px] before:h-full before:bg-coffee-400`}
          /> */}
            {/* Content */}
            <div
              id="content"
              className="flex-1 lg:max-w-[80%] px-[15px] flex flex-col"
            >
              <div
                id="title"
                className={`mt-[5px] flex items-center gap-x-2 text-[25px] ${
                  index % 2 === 0 && "md:self-end md:flex-row-reverse"
                }`}
              >
                {/* Title */}
                <h3>{item.position}</h3>
                {/* Logo */}
                {item.logo && (
                  <img className="inline-block h-[50px]" src={item.logo} />
                )}
              </div>
              {/* Position Date / Location */}
              <div
                id="date-location"
                className={`flex flex-wrap items-center gap-x-2 text-[14px] text-coffee-400 ${
                  index % 2 === 0 && "md:self-end"
                }`}
              >
                {/* Date */}
                <div className="flex items-center">
                  <IoCalendar size={20} className="inline-block mr-[1.5px]" />
                  <p>{item.date}</p>
                </div>
                {/* Location */}
                <div className="flex items-center">
                  <MdLocationPin size={20} className="inline-block" />
                  <p>{item.location}</p>
                </div>
              </div>
              {/* Position Description */}
              <p
                id="description"
                className="mt-[10px] text-[14px] tracking-wide"
              >
                {item.description}
              </p>
              {/* Tools Used */}
              {item.tools && (
                <ul
                  id="tools"
                  className={`mt-[14px] flex flex-wrap gap-1 text-[12px] ${
                    index % 2 === 0 && "md:self-end"
                  }`}
                >
                  {item.tools.map((tool) => (
                    <li
                      key={tool}
                      className="inline-block rounded-sm px-[10px] py-[3px]
                      bg-coffee-800/90 text-coffee-100"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineWorkChart;
