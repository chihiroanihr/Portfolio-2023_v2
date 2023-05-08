import React, { useMemo } from "react";
import { MdLocationPin } from "react-icons/md";
import { lifeTimelineData } from "@data";
import { timelineChartsStyle } from "@constants";

const TimelineLifeChart = ({ className }) => {
  console.log("[Render] @layouts/Timeline/TimelineLife.jsx");

  // Memoize data array to avoid getting created on every re-render
  const memoizedLifeTimelineData = useMemo(() => lifeTimelineData, []);

  return (
    <div
      id="life-timeline"
      className={`${className} ${timelineChartsStyle.globalFonts}`}
    >
      {/* Work Timeline */}
      <h1
        id="heading"
        className={`sm:px-[50px] px-[30px] text-center
        ${timelineChartsStyle.contentStyle.fontStyle.headingFont}`}
      >
        A Little More About Me
      </h1>
      {/* Line */}
      <div
        id="line"
        className={`relative overflow-hidden w-full
        mx-auto md:my-[30px] my-[20px] sm:p-[50px] p-[30px]
        ${timelineChartsStyle.lineStyle.positionStyle}
        ${timelineChartsStyle.lineStyle.layoutStyle}
        ${timelineChartsStyle.lineStyle.colorStyle}`}
      >
        {memoizedLifeTimelineData.map((item, index) => (
          <div
            key={item.id}
            id="block"
            className={`relative md:mb-[28px] mb-[38px] md:w-1/2 w-full flex clear-both ${
              index % 2 === 1
                ? "md:mr-[8px] md:float-right"
                : "md:ml-[8px] md:float-left md:flex-row-reverse md:text-right"
            }`}
          >
            {/* Marker */}
            <div
              id="marker"
              className={`mt-[10px]
              ${timelineChartsStyle.markerStyle.layoutStyle}
              ${timelineChartsStyle.markerStyle.colorStyle}`}
            />
            {/* Content */}
            <div
              id="content"
              className="flex-1 lg:max-w-[80%] px-[15px] flex flex-col"
            >
              {/* Date */}
              <div
                id="date"
                className={`
                ${timelineChartsStyle.dateMarkerStyle.layoutStyle}
                ${timelineChartsStyle.dateMarkerStyle.fontStyle}
                ${timelineChartsStyle.dateMarkerStyle.colorStyle}
                self-start mb-[5px]
                ${index % 2 === 0 && "md:self-end"}`}
              >
                {item.date}
              </div>
              {/* Title & Logo */}
              <div
                id="title"
                className={`mt-[5px]
                ${timelineChartsStyle.contentStyle.fontStyle.titleFont}
                flex md:items-end items-center justify-between gap-x-2
                ${index % 2 === 0 && "md:self-end md:flex-row-reverse"}`}
              >
                {/* Title */}
                <h3 className="font-medium">{item.title}</h3>
                {/* Logo */}
                {item.logo && (
                  <img
                    className={`inline-block
                    ${timelineChartsStyle.contentStyle.layoutStyle.logoLayout}`}
                    src={item.logo}
                  />
                )}
              </div>
              {/* Location */}
              {item.location && (
                <div
                  id="location"
                  className={`mt-[5px]
                  ${timelineChartsStyle.contentStyle.fontStyle.subtitleFont} 
                  ${timelineChartsStyle.contentStyle.colorStyle.subtitleColor}
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
                  className={`mt-[15px] whitespace-pre-line
                  ${timelineChartsStyle.contentStyle.fontStyle.descriptionFont}`}
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

export default React.memo(TimelineLifeChart);
