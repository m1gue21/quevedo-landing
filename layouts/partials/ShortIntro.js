"use client";

import Circle from "@layouts/components/Circle";
import VideoPopup from "@layouts/components/VideoPopup";
import { markdownify } from "@lib/utils/textConverter";

const ShortIntro = ({ intro }) => {
  return (
    <section className="section pt-0">
      <div className="container-xl">
        <div className="relative px-4 py-[70px]">
          <div className="text-center">
            <div className="animate">
              <p>{intro.subtitle}</p>
              {markdownify(intro.title, "h2", "mt-4 section-title")}
              {markdownify(intro.description, "p", "mt-10")}
            </div>
            <div className="mx-auto mt-10 h-full max-h-[394px] w-full max-w-[716px]">
              <VideoPopup id={intro.video_id} thumbnail={intro.thumbnail} />
            </div>
          </div>
          <div className="bg-theme absolute left-0 top-0 w-full">
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortIntro;
