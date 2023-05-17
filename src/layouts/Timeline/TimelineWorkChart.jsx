import React, { useMemo } from "react";
import { MdLocationPin } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import {
  Block,
  Content,
  Heading,
  Line,
  Marker,
  Title,
  Subtitle,
  ToolTagsList,
  Description,
  Logo,
} from "./components";
import { workTimelineListData } from "@data";

const TimelineWorkChart = ({ className }) => {
  console.log("[Render] @layouts/Timeline/TimelineWork.jsx");

  // ************************* JSX ************************* //
  const memoizedWorkTimelineListItems = useMemo(() => {
    return workTimelineListData.map((item, index) => (
      <Block id="block" key={item.id} index={index}>
        {/* Marker */}
        <Marker id="marker" offsetHeight="sm:mt-[16px] mt-[10px]" />

        {/* Content */}
        <Content id="content">
          {/* Title */}
          <Title id="title" index={index} whiteSpace="whitespace-pre">
            {item.position}
            <br />
            {item.company}
            <br />
            {item.type && "(" + item.type + ")"}
            {item.logo && <Logo item={item.logo} />}
          </Title>

          {/* Position Date / Location */}
          <Subtitle id="subtitle" index={index}>
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
          </Subtitle>

          {/* Position Description */}
          <Description id="description">{item.description}</Description>

          {/* Tools Used */}
          {item.tools && item.tools.length > 0 && (
            <ToolTagsList id="tools" item={item.tools} index={index} />
          )}
        </Content>
      </Block>
    ));
  }, [workTimelineListData]);

  return (
    <div id="work-timeline" className={className}>
      {/* Work Timeline */}
      <Heading id="heading">Work Experience</Heading>
      {/* Line */}
      <Line id="line">{memoizedWorkTimelineListItems}</Line>
    </div>
  );
};

export default React.memo(TimelineWorkChart);
