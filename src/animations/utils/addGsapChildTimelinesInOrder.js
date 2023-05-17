function addGsapChildTimelinesInOrder({
  tlChild: childTimelineList,
  tlParent: parentTimeline,
  order: childTimelineOrderAndAnimationTiming,
}) {
  Object.keys(childTimelineList)
    .sort((a, b) => parseInt(a) - parseInt(b)) // !! Alternate: Object.keys() to get the keys of an object (yet returned as string)
    .forEach((animateIndex) => {
      // Get animation timing value
      const animateAt = childTimelineOrderAndAnimationTiming[animateIndex];
      // Add child component timeline and its timing value to parent timeline
      parentTimeline?.add(childTimelineList[animateIndex], animateAt ?? 0);
    });
}

export default addGsapChildTimelinesInOrder;
