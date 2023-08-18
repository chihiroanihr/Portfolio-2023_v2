import React, { useMemo } from "react";
import clsx from "clsx";
import { ToolTag } from "./index";

const ToolTagsList = ({ id, item, index }) => {
  // Memoize tool list array
  const memoizedToolTagsListItem = useMemo(() => {
    return item.map((tool) => <ToolTag key={tool} item={tool} />);
  }, [item]);

  // JSX
  return (
    <ul
      id={id}
      className={clsx(
        "mt-[15px]",
        "list-none",
        "flex flex-wrap",
        { "md:self-end": index % 2 === 0 },
        "gap-1"
      )}
    >
      {memoizedToolTagsListItem}
    </ul>
  );
};

export default ToolTagsList;
