export const checkVisited = () => {
  const userData = sessionStorage.getItem("userData");

  // If user never visited to this website
  if (!userData) {
    // Set user data with timestamp
    const userData = { visited: true, timestamp: new Date().getTime() };
    sessionStorage.setItem("userData", JSON.stringify(userData));

    return false;
  }
  // If user visited before
  else {
    // Get user data
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    // Set expiration time
    const tenMinutes = 10 * 60 * 1000; // in milliseconds
    const currentTime = new Date().getTime();
    // Calculate session expiration, and if expired then remove user from session
    if (userData && currentTime - userData.timestamp > tenMinutes) {
      localStorage.removeItem("userData");
    }

    return true;
  }
};
