import React, { useMemo } from "react";
import clsx from "clsx";
import { ToolTag } from "./index";

const ToolTagsList = ({ className, item }) => {
  // Memoize tool list array
  const memoizedToolTagsListItem = useMemo(() => {
    return item.map((tool) => <ToolTag key={tool} item={tool} />);
  }, []);

  // JSX
  return (
    <ul className={clsx(className, "list-none", "flex flex-wrap", "gap-1")}>
      {memoizedToolTagsListItem}
    </ul>
  );
};

export default ToolTagsList;
