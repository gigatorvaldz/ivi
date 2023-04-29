import React, { useState } from 'react';
import styles from './Slider.module.scss';

interface SliderProps {
  min: number;
  max: number;
  value: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
  step: number;
}

const Slider: React.FC<SliderProps> = ({ min, max, value, handleChange, description, step }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.description}>
        {`${description}:`} <span>{`не менее ${value}`}</span>
      </h2>
      <input
        id="mySlider"
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
        step={step}
        className={styles.rangeInput}
      />
    </div>
  );
};

export default Slider;
