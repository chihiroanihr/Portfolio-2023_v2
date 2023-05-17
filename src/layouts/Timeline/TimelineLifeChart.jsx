import React, { useMemo } from "react";
import { MdLocationPin } from "react-icons/md";
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
  Logo,
} from "./components";
import { lifeTimelineListData } from "@data";

const TimelineLifeChart = ({ className }) => {
  console.log("[Render] @layouts/Timeline/TimelineLife.jsx");

  const memoizedLifeTimelineListItems = useMemo(() => {
    return lifeTimelineListData.map((item, index) => (
      <Block id="block" key={item.id} index={index}>
        {/* Marker */}
        <Marker id="marker" offsetHeight="mt-[10px]" />

        {/* Content */}
        <Content id="content">
          {/* Date */}
          <DateMarker id="date" index={index}>
            {item.date}
          </DateMarker>

          {/* Title*/}
          <Title id="title" index={index}>
            {item.title}
            {item.logo && <Logo item={item.logo} />}
          </Title>

          {/* Location */}
          {item.location && (
            <Subtitle id="subtitle" index={index}>
              <MdLocationPin size={20} className="inline-block" />
              <p>{item.location}</p>
            </Subtitle>
          )}

          {/* Position Description */}
          {item.description && (
            <Description id="description">{item.description}</Description>
          )}
        </Content>
      </Block>
    ));
  }, [lifeTimelineListData]);

  return (
    <div id="life-timeline" className={className}>
      {/* Work Timeline */}
      <Heading id="heading">A Little More About Me</Heading>
      {/* Line */}
      <Line id="line">{memoizedLifeTimelineListItems}</Line>
    </div>
  );
};

export default React.memo(TimelineLifeChart);
