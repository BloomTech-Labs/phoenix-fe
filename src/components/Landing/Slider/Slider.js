import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export const Slider = ({  children, ...props }) => {
  return <AwesomeSlider {...props}>{children}</AwesomeSlider>;
};
