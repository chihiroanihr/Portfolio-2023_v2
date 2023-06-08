import React, { useMemo, useContext } from "react";
import clsx from "clsx";
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
} from "./components";
import { ToggleModalContext } from "@contexts";
import { workTimelineListData } from "@data";

const TimelineWorkChart = ({ className }) => {
  console.log("[Render] @layouts/Timeline/TimelineWork.jsx");

  // Retrieve States from Context
  const { isModalOpen } = useContext(ToggleModalContext);

  // ************************* JSX ************************* //
  const memoizedWorkTimelineListItems = useMemo(() => {
    return workTimelineListData.map((item, index) => (
      <Block id="block" key={item.id} index={index}>
        {/* Marker */}
        <Marker id="marker" offsetHeight="sm:mt-[16px] mt-[10px]" />

        {/* Content */}
        <Content id="content">
          {/* Title */}
          <Title
            id="title"
            index={index}
            title={item.title}
            logo={item.logo}
            whiteSpace="whitespace-pre"
          />

          {/* Position Date / Location */}
          <Subtitle
            id="subtitle"
            index={index}
            date={item.date}
            location={item.location}
          />

          {/* Position Description */}
          <Description id="description" index={index} item={item.description} />

          {/* Tools Used */}
          {item.tools && item.tools.length > 0 && (
            <ToolTagsList id="tools" item={item.tools} index={index} />
          )}
        </Content>
      </Block>
    ));
  }, [workTimelineListData]);

  return (
    <div
      id="work-timeline"
      className={clsx(
        className,
        // padding layout
        "page-layout",
        "xxxl:px-[300px] xxl:px-[15%] xl:px-[10%] px-[30px]",
        isModalOpen
          ? "opacity-100 delay-500 duration-[1s]"
          : "opacity-0 duration-500",
        "transition-opacity"
      )}
    >
      {/* Work Timeline */}
      <Heading id="heading" value="Work Experience" />
      {/* Line */}
      <Line id="line" className="md:my-[30px] my-[20px]">
        {memoizedWorkTimelineListItems}
      </Line>
    </div>
  );
};

export default React.memo(TimelineWorkChart);
