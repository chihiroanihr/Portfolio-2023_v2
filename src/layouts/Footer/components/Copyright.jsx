import clsx from "clsx";

const Copyright = ({ className }) => (
  <div
    className={clsx(
      className,
      "text-center",
      "text-[12px]",
      "font-sans font-normal"
    )}
  >
    <p>
      Designed and Developed by <i>Rhina Kim</i>
    </p>
    <p className="inline-flex items-center">
      <span className="text-[14px]">&copy;</span>
      <span>2023 All Rights Reserved.</span>
    </p>
  </div>
);

export default Copyright;
