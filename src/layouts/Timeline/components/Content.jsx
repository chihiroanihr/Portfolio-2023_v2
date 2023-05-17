import clsx from "clsx";

const Content = ({ id, children }) => {
  return (
    <div
      id={id}
      className={clsx("flex-1", "lg:max-w-[80%]", "px-[15px]", "flex flex-col")}
    >
      {children}
    </div>
  );
};

export default Content;
