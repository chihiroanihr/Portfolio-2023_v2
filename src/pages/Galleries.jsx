import { useRef, useState } from "react";
import { SectionOverlay } from "@components";

const Galleries = () => {
  // DOM Reference
  const galleriesSectionRef = useRef(null);

  // ============= Section Overlay (Child Component) State ============= //
  const [isOverlayCompleted, setIsOverlayCompleted] = useState(false);

  const handleOverlayCompleted = (state) => {
    setIsOverlayCompleted(state);
  };

  return (
    <section
      ref={galleriesSectionRef}
      id="galleries"
      className="relative w-screen min-h-screen overflow-hidden"
    >
      {/* <SectionOverlay
        className="absolute h-full w-full fill-milky dark:fill-chocolate"
        parentRef={galleriesSectionRef}
        isOpened={false}
        handleOverlayCompleted={handleOverlayCompleted}
      /> */}
      <div className="relative min-h-screen">
        <div className="h-screen">Galleries</div>
      </div>
    </section>
  );
};

export default Galleries;
