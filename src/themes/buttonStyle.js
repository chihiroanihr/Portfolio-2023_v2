import clsx from "clsx";

// ------------------------ Modal Open Button ------------------------ //
const defualtModalBtnStyle = {
  fontFamily: "font-default-sans",
  bgColor: clsx(
    // default color
    "bg-coffee-600 dark:bg-coffee-300",
    // active color
    "hover:bg-coffee-800 dark:hover:bg-coffee-100",
    "focus-visible:bg-coffee-800 dark:focus-visible:bg-coffee-100"
  ),
  textColor: "text-coffee-100 dark:text-coffee-800",
};

const fancyModalBtnStyle = {
  fontFamily: "font-default-sans",
  bgColor: "bg-transparent",
  borderColor: clsx(
    // default color
    "border-coffee-600",
    // active color
    "hover:border-coffee-800 dark:hover:border-coffee-100",
    "focus-visible:border-coffee-800 dark:focus-visible:border-coffee-100"
  ),
  textColor: clsx(
    // default color
    "text-coffee-600 dark:text-coffee-300",
    // active color
    "group-hover:text-coffee-800 dark:group-hover:text-coffee-100",
    "group-focus-visible:text-coffee-800 dark:group-focus-visible:text-coffee-100"
  ),
  hyphenColor: clsx(
    // default color
    "bg-coffee-600",
    // active color
    "group-hover:bg-coffee-800 dark:group-hover:bg-coffee-100",
    "group-focus-visible:bg-coffee-800 dark:group-focus-visible:bg-coffee-100"
  ),
  emptyKeyColor: "bg-root-color",
};

// ------------------------- Download Button ------------------------- //
const defaultDownloadBtnStyle = {
  fontFamily: "font-default-sans",
  bgColor: clsx(
    // default color
    "bg-coffee-800/90",
    // active color
    "hover:bg-coffee-800"
  ),
  textColor: "text-coffee-100",
};

const fancyDownloadBtnStyle = {
  fontFamily: "font-default-sans",
  bgColor: clsx(
    "bg-transparent",
    "hover:bg-coffee-800/90",
    "focus-visible:bg-coffee-800/90"
  ),
  borderColor: clsx(
    "border-coffee-600",
    "hover:border-coffee-800/90",
    "focus-visible:border-coffee-800/90"
  ),
  textColor: clsx(
    "text-coffee-600",
    "group-hover:text-coffee-100",
    "group-focus-visible:text-coffee-100"
  ),
  hyphenColor: clsx(
    "bg-coffee-600",
    "group-hover:bg-coffee-100",
    "group-focus-visible:bg-coffee-100"
  ),
  emptyKeyColor: "bg-coffee-100",
};

const buttonStyle = {
  defualtModalBtnStyle: defualtModalBtnStyle,
  fancyModalBtnStyle: fancyModalBtnStyle,

  defaultDownloadBtnStyle: defaultDownloadBtnStyle,
  fancyDownloadBtnStyle: fancyDownloadBtnStyle,
};

export default buttonStyle;
