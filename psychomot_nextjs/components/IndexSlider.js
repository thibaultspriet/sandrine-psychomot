import React from "react";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const yogaBack = {
  backgroundPositionX : "center",
  backgroundPositionY : "bottom"
}

const IndexSlider = () => {
  const slides = [
    {
      title: "En psychomotricité",
      description:
        "on vit, on ressent, on expérimente, on exprime des sensations et des émotions",
      backgroundImage: "/main/psychomotricite_slider.jpg",
      link: "/psychomotricite",
      linkLabel: "Psychomotricité",
      className: "psychomotricite_slide",
    },
    {
      title: "le yoga",
      description: "une pratique douce accessible pour tous",
      backgroundImage: "/main/yoga_slider.jpg",
      link: "/yoga-detail",
      linkLabel: "Le yoga",
      className: "yoga_slide",
      additionalCss : yogaBack
    },
    {
      title: "la sophrologie",
      description:
        "Une démarche positive pour retrouver Equilibre et Harmonie.",
      backgroundImage: "/main/sophro_slider.jpg",
      link: "/sophro-detail",
      linkLabel: "La sophrologie",
      className: "sophro_slide",
    },
  ];
  return (
    <Slider infinite={true} autoplay={5000}>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            background: `url(${slide.backgroundImage})`,
            backgroundSize: "cover",
            ...slide.additionalCss
          }}
          className={slide.className}
        >
          <div className="text">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
          {slide.link ? (
            <div className="linkContainer">
              <a href={slide.link}>{slide.linkLabel}</a>
            </div>
          ) : null}
        </div>
      ))}
    </Slider>
  );
};

export default IndexSlider;
