import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Outrage1 from "../assets/Outrage_Promo_1.jpg";
import Outrage2 from "../assets/Outrage_Promo_2.jpg";
import Twelfth1 from "../assets/Twelfth_Night_Promo_1.jpg";
import Twelfth2 from "../assets/Twelfth_Night_Promo_2.jpg";
import Tim1 from "../assets/Tim1.jpeg"

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const pictures = [Outrage1, Outrage2, Twelfth1, Twelfth2, Tim1];
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1500);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    );
  }

  return (
    <section>
      <div className="py-[80px] w-full max-w-[1250px] m-auto px-4 xs:px-6 navigation-wrapper">
        <div className="flex flex-col justify-center items-center">
          <h6 className="text-[#241f1e] font-semibold text-4xl items-center my-4">
            Gallery
          </h6>
          <h1 className="text-4xl md:text-5xl my-4 font-bold text-white text-center">
            Photos of Moth and his performances
          </h1>
        </div>
        <div ref={sliderRef} className="keen-slider">
          {pictures.map((picture, idx) => (
            <img
              key={idx}
              className="keen-slider__slide md:h-[800px] object-contain"
              src={picture}
              alt="Picture"
            />
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Carousel;
