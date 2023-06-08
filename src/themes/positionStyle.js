const vh = (coef) => window.innerHeight * (coef / 100);

const positionStyle = {
  aboutToWorkSectionTransitionPosition: vh(60),
  workToAboutSectionTransitionPosition: vh(40),
  displayToWorkSectionTransitionPosition: "-mt-[40vh]",
  workToDisplaySectionTransitionPosition: "mb-[60vh]",
};

export default positionStyle;
