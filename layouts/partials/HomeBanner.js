"use client";

import ImageFallback from "@layouts/components/ImageFallback";
import { gsap } from "@lib/gsap";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { useEffect } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CalendlyPopup from "@layouts/components/calendlyEmbed";

const HomeBanner = ({ banner: bannerData, brands }) => {
  useEffect(() => {
    const ctx2 = gsap.context(() => {
      const banner = document.querySelector(".banner");
      const bannerBg = document.querySelector(".banner-bg");
      const bannerContent = document.querySelector(".banner-content");
      const header = document.querySelector(".header");
      const tl = gsap.timeline();

      tl.fromTo(
        ".banner-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
      )
        .fromTo(
          ".banner-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.4"
        )
        .fromTo(
          ".banner-img",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          ">-.5"
        );

      //parallax banner
      const parallaxTl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: banner,
          start: () => `top ${header.clientHeight}`,
          scrub: true,
        },
      });

      const position = (banner.offsetHeight - bannerBg.offsetHeight) * 0.4;
      parallaxTl
        .fromTo(
          bannerBg,
          {
            y: 0,
          },
          {
            y: -position,
          }
        )
        .fromTo(
          bannerContent,
          {
            y: 0,
          },
          {
            y: position,
          },
          "<"
        )
        .fromTo(
          ".banner-bg .circle",
          {
            y: 0,
          },
          {
            y: position,
          },
          "<"
        );
    });

    return () => ctx2.revert();
  }, []);

  return (
    <section className="section banner pt-0">
      <div className="container-xl">
        <div className="relative">
          <div className="bg-theme banner-bg col-12 absolute left-0 top-0">
           
          </div>
          <div className="row overflow-hidden rounded-2xl">
            <div className="col-12">
              <div className="row relative justify-center pb-10">
                <div className="banner-content col-10 pb-10 pt-20 text-center">
                  {markdownify(
                    bannerData.title,
                    "h1",
                    "mb-8 banner-title opacity-0"
                  )}
                  <div className="banner-btn opacity-0">
                  <CalendlyPopup url="https://calendly.com/miguefreeagent" text="Agendar cita ahora" />

                  </div>
                </div>
                <div className="col-10">
                  <ImageFallback
                    className="banner-img opacity-0 rounded-3xl"
                    src={bannerData.image}
                    width={1170}
                    height={666}
                    priority={true}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row border-y border-border py-5">
            <div className="animate from-right col-12">
              <Swiper
                loop={true}
                slidesPerView={3}
                breakpoints={{
                  992: {
                    slidesPerView: 5,
                  },
                }}
                spaceBetween={20}
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
              >
                {brands.map((brand, index) => (
                  <SwiperSlide
                    className=" h-20 cursor-pointer px-6 py-6 grayscale  transition hover:grayscale-0 lg:px-10"
                    key={"brand-" + index}
                  >
                    <div className="relative h-full">
                      <ImageFallback
                        className="object-contain"
                        src={brand}
                        sizes="100vw"
                        alt=""
                        fill={true}
                        priority={true}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
