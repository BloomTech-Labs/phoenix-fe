import React, { useState } from "react";
import LandPageCarouselStyles from "../styles/LandPageCarouselStyles";
import carousel1blurrparty from "../images/carousel1blurrparty.jpg";
import carousel2marathon from "../images/carousel2marathon.jpg";
import carousel3couplepark from "../images/carousel3couplepark.jpg";

const images = [carousel1blurrparty, carousel2marathon, carousel3couplepark];

export default function LandPageCarousel() {
  const useStyles = LandPageCarouselStyles;
  const classes = useStyles();

  const [selectedImage, setSelecedImage] = useState(0);

  const handleBackImage = () => {
    if (selectedImage > 0) {
      setSelecedImage(selectedImage - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImage < images.length - 1) {
      setSelecedImage(selectedImage + 1);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.carousel}>
        <span className={classes.buttonCarousel}>
          <button onClick={handleBackImage}>Back</button>
        </span>
        <img
          src={images[selectedImage]}
          alt="blurred party people"
          className={classes.carousel}
        />
        <span className={classes.buttonCarousel}>
          <button onClick={handleNextImage}>Next</button>
        </span>
      </div>
    </div>
  );
}
