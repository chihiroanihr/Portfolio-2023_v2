const vh = (coef) => window.innerHeight * (coef / 100);

const positionStyle = {
  aboutToWorkSectionTransitionPosition: vh(60),
  workToAboutSectionTransitionPosition: vh(40),
};

export default positionStyle;
