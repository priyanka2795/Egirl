//@ts-nocheck

import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; // Import the default styles

const MultiStepRangeSlider = () => {
  const [value, setValue] = useState([0]);

  return (
    <div className="mb-[27px] ml-[10px] w-[96%]">
      <Slider
        min={0}
        max={100}
        step={25}
        value={value}
        onChange={newValue => setValue(newValue)}
        railStyle={{ backgroundColor: '#ccc' }}
        trackStyle={{ backgroundColor: '#5848BC' }}
        handleStyle={{ 
        height: '20px',
        width: '20px',
        borderRadius: '100%',
        backgroundColor: 'white',
        border: '3px solid #5848BC',
        marginTop: '-8px'
      }}
        marks={{
          0: ' Low',
          25: 'Low Mid',
          50: 'Mid',
          75: 'Mid High',
          100: 'High',
        }}
      />
    </div>
  );
};

export default MultiStepRangeSlider;