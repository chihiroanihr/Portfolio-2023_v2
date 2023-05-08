import React, { useMemo } from "react";
import { MdLocationPin } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import { timelineChartsStyle } from "@constants";
import { workTimelineData } from "@data";

const TimelineWorkChart = ({ className }) => {
  console.log("[Render] @layouts/Timeline/TimelineWork.jsx");

  // Memoize data array to avoid getting created on every re-render
  const memoizedWorkTimelineData = useMemo(() => workTimelineData, []);

  return (
    <div
      id="work-timeline"
      className={`${className} ${timelineChartsStyle.globalFonts}`}
    >
      {/* Work Timeline */}
      <h1
        id="heading"
        className={`sm:px-[50px] px-[30px] text-center
        ${timelineChartsStyle.contentStyle.fontStyle.headingFont}`}
      >
        Work Experience
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
        {memoizedWorkTimelineData.map((item, index) => (
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
              className={`sm:mt-[16px] mt-[10px]
              ${timelineChartsStyle.markerStyle.layoutStyle}
              ${timelineChartsStyle.markerStyle.colorStyle}`}
            />
            {/* Content */}
            <div
              id="content"
              className="flex-1 lg:max-w-[80%] px-[15px] flex flex-col"
            >
              {/* Title */}
              <div
                id="title"
                className={`mt-[5px]
                ${timelineChartsStyle.contentStyle.fontStyle.titleFont}
                flex md:items-end items-center justify-between gap-x-2
                ${index % 2 === 0 && "md:self-end md:flex-row-reverse"}`}
              >
                {/* Position Name & Job Type */}
                <div className="font-medium whitespace-pre">
                  {item.position}
                  <br />
                  {item.company}
                  <br />
                  {item.type && "(" + item.type + ")"}
                </div>
                {/* Logo */}
                {item.logo && (
                  <img
                    className={`inline-block
                    ${timelineChartsStyle.contentStyle.layoutStyle.logoLayout}`}
                    src={item.logo}
                  />
                )}
              </div>
              {/* Position Date / Location */}
              <div
                id="date-location"
                className={`mt-[5px]
                ${timelineChartsStyle.contentStyle.fontStyle.subtitleFont}
                ${timelineChartsStyle.contentStyle.colorStyle.subtitleColor}
                flex flex-wrap items-center gap-x-2 gap-y-1
                ${index % 2 === 0 && "md:self-end"}`}
              >
                {/* Date */}
                <div className="flex items-center">
                  <IoCalendar size={20} className="inline-block mr-[4px]" />
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
                className={`mt-[15px] whitespace-pre-line
                ${timelineChartsStyle.contentStyle.fontStyle.descriptionFont}`}
              >
                {item.description}
              </p>
              {/* Tools Used */}
              {item.tools && item.tools.length > 0 && (
                <ul
                  id="tools"
                  className={`mt-[15px]
                  flex flex-wrap gap-1 ${index % 2 === 0 && "md:self-end"}`}
                >
                  {item.tools.map((tool) => (
                    <li
                      key={tool}
                      className={`inline-block
                      ${timelineChartsStyle.contentStyle.layoutStyle.toolTagLayout}
                      ${timelineChartsStyle.contentStyle.fontStyle.toolTagFont}
                      ${timelineChartsStyle.contentStyle.colorStyle.toolTagColor}`}
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

export default React.memo(TimelineWorkChart);
