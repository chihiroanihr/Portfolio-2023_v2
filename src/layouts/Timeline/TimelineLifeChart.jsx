import { useMemo } from "react";
import { MdLocationPin } from "react-icons/md";
import { lifeTimelineData } from "@data";

const TimelineLifeChart = (props) => {
  // Retrieve Props
  const classes = props.className;

  // Memoize data array to avoid getting created on every re-render
  const memoizedLifeTimelineData = useMemo(() => lifeTimelineData, []);

  return (
    <div
      id="life-timeline"
      className={`${classes} bg-coffee-100 text-coffee-800/80 font-serif`}
    >
      {/* Work Timeline */}
      <h1
        id="heading"
        className="sm:px-[50px] px-[30px] text-center md:text-[44px] xs:text-[32px] text-[28px]"
      >
        A Little More About Me
      </h1>
      {/* Line */}
      <div
        id="line"
        className="relative overflow-hidden w-full mx-auto md:my-[30px] my-[20px] sm:p-[50px] p-[30px]
        before:absolute before:top-0 before:md:left-1/2 before:sm:left-[58px] before:left-[38px]
        before:content-[''] before:-ml-px before:w-[2px] before:h-full before:bg-coffee-400"
      >
        {memoizedLifeTimelineData.map((item, index) => (
          <div
            key={item.id}
            id="block"
            className={`relative md:w-1/2 w-full md:mb-[28px] mb-[38px]
          flex clear-both ${
            index % 2 === 1
              ? "md:mr-[8px] md:float-right"
              : "md:ml-[8px] md:float-left md:flex-row-reverse md:text-right"
          }`}
          >
            {/* Marker */}
            <div
              id="marker"
              className="mt-[10px] min-w-[16px] h-[16px]
              rounded-full border-[2px] bg-coffee-800 border-coffee-100"
            />
            {/* Content */}
            <div
              id="content"
              className="flex-1 lg:max-w-[80%] px-[15px] flex flex-col"
            >
              {/* Date */}
              <div
                id="date"
                className={`text-[16px] rounded-full ring ring-coffee-300 bg-coffee-800/90 text-coffee-100
                self-start mb-[5px] px-[16px] py-[6px]
                ${index % 2 === 0 && "md:self-end"}`}
              >
                {item.date}
              </div>
              {/* Title & Logo */}
              <div
                id="title"
                className={`mt-[5px] md:text-[25px] sm:text-[20px] xs:text-[16px] text-[14px] 
                flex md:items-end items-center justify-between gap-x-2
                ${index % 2 === 0 && "md:self-end md:flex-row-reverse"}`}
              >
                {/* Title */}
                <h3 className="font-medium">{item.title}</h3>
                {/* Logo */}
                {item.logo && (
                  <img
                    className="inline-block md:h-[50px] xs:h-[30px] h-[20px]"
                    src={item.logo}
                  />
                )}
              </div>
              {/* Location */}
              {item.location && (
                <div
                  id="location"
                  className={`mt-[5px]
                  sm:text-[14px] xs:text-[13px] text-[12px] text-coffee-400
                  flex items-center
                  ${index % 2 === 0 && "md:self-end"}`}
                >
                  <MdLocationPin size={20} className="inline-block" />
                  <p>{item.location}</p>
                </div>
              )}
              {/* Position Description */}
              {item.description && (
                <p
                  id="description"
                  className="mt-[15px]
                  sm:text-[14px] xs:text-[13px] text-[12px] tracking-wide whitespace-pre-line"
                >
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Default Props
TimelineLifeChart.defaultProps = {
  classes: "",
};

export default TimelineLifeChart;
