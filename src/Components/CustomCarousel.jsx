import { useRef } from "react";

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

function CustomCarousel({ title, children: data }) {
  const imageParentDivRef = useRef(null);

  function scrollPrev() {
    let divContainer = imageParentDivRef.current;

    if (divContainer) {
      const scroll = 425;
      divContainer.scrollLeft -= scroll;
    }
  }
  function scrollNext() {
    let divContainer = imageParentDivRef.current;

    if (divContainer) {
      const scroll = 425;
      divContainer.scrollLeft += scroll;
    }
  }

  return (
    <div className="relative mt-6">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">{title}</h2>
        <div className="hidden lg:flex items-center gap-3">
          <GoArrowLeft
            size={35}
            className="rounded-full bg-[#E2E2E7] p-2 hover:cursor-pointer"
            onClick={scrollPrev}
          />
          <GoArrowRight
            size={35}
            className="rounded-full bg-[#E2E2E7] p-2 hover:cursor-pointer"
            onClick={scrollNext}
          />
        </div>
      </div>
      <div
        ref={imageParentDivRef}
        className="flex items-center overflow-scroll gap-3 scroll-smooth mt-4"
      >
        {data}
      </div>
    </div>
  );
}

export default CustomCarousel;
