import { useRef } from "react";

const Galleries = () => {
  console.log("[Render] [src] @views/Galleries.jsx");

  // Node Reference
  const galleriesSectionNodeRef = useRef(null);

  return (
    <section
      ref={galleriesSectionNodeRef}
      id="galleries"
      className="relative w-screen min-h-screen overflow-hidden"
    >
      <div className="relative min-h-screen">
        <div className="h-screen">Galleries</div>
      </div>
    </section>
  );
};

export default Galleries;
