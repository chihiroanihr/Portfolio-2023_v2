import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { checkIsVisited } from "@utils";

document.addEventListener("DOMContentLoaded", () => {
  console.log("[LOG] DOMContentLoaded");

  // Retrieve target nodes to animate
  var loading = document.querySelector(".loading");
  var text1 = document.querySelector(".loading .text-1");
  var text2 = document.querySelector(".loading .text-2");

  // Get user visited status
  const hasVisited = checkIsVisited();

  // [3] Loading animation function (synchronous execution)
  const playLoadingAnimation = async () => {
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // If user has never visited then display text animations
    if (!hasVisited) {
      text1.classList.add("show"); // display text1
      await wait(2000);
      text1.classList.remove("show"); // hide text1
      await wait(1000);
      text2.classList.add("show"); // display text2
      await wait(2000);
      text2.classList.remove("show"); // hide text2
      await wait(1000);
    }

    // Hide loading page
    loading.classList.add("hide");
    await wait(1000);
  };

  // [2] Execute loading page (synchronous execution)
  const handlePageLoaded = async () => {
    // Wait for loading animation
    await playLoadingAnimation();

    // Render React App after loading animation completed
    ReactDOM.createRoot(document.getElementById("root")).render(
      // <React.StrictMode>
      <App />
      // </React.StrictMode>
    );
  };

  // [1] Start the code execution
  handlePageLoaded();
});
