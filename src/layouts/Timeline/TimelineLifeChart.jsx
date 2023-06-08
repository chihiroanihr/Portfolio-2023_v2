import React, { useMemo, useContext } from "react";
import clsx from "clsx";
import {
  Block,
  Content,
  Heading,
  Line,
  Marker,
  DateMarker,
  Title,
  Subtitle,
  Description,
} from "./components";
import { ToggleModalContext } from "@contexts";
import { lifeTimelineListData } from "@data";

const TimelineLifeChart = ({ className }) => {
  console.log("[Render] @layouts/Timeline/TimelineLife.jsx");

  // Retrieve States from Context
  const { isModalOpen } = useContext(ToggleModalContext);

  const memoizedLifeTimelineListItems = useMemo(() => {
    return lifeTimelineListData.map((item, index) => (
      <Block id="block" key={item.id} index={index}>
        {/* Marker */}
        <Marker id="marker" offsetHeight="mt-[10px]" />

        {/* Content */}
        <Content id="content">
          {/* Date */}
          <DateMarker id="date" index={index} item={item.date} />

          {/* Title*/}
          <Title
            id="title"
            index={index}
            title={item.title}
            logo={item.logo}
            whiteSpace="whitespace-pre-line"
          />

          {/* Location */}
          {item.location && (
            <Subtitle id="subtitle" index={index} location={item.location} />
          )}

          {/* Position Description */}
          {item.description && (
            <Description
              id="description"
              index={index}
              item={item.description}
            />
          )}
        </Content>
      </Block>
    ));
  }, [lifeTimelineListData]);

  return (
    <div
      id="life-timeline"
      className={clsx(
        className,
        // padding layout
        "page-layout",
        "xxxl:px-[300px] xxl:px-[15%] xl:px-[10%] px-[30px]",
        isModalOpen
          ? "opacity-100 delay-500 duration-[1s]"
          : "opacity-0 duration-500"
      )}
    >
      {/* Work Timeline */}
      <Heading id="heading" value="A Little More About Me" />
      {/* Line */}
      <Line id="line" className="md:my-[30px] my-[20px]">
        {memoizedLifeTimelineListItems}
      </Line>
    </div>
  );
};

export default React.memo(TimelineLifeChart);
