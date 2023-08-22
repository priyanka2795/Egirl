import React, { useState } from 'react';
import { Range } from 'react-range';

const RangePicker = () => {
  const [state1, setState1] = useState([0]);
  return (
    <>
      <Range
        step={0.1}
        min={0}
        max={100}
        values={state1}
        onChange={(values) => setState1(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '4px',
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '2px'
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '20px',
              width: '20px',
              borderRadius: '100%',
              backgroundColor: 'white',
              border: '3px solid #5848BC'
            }}
          />
        )}
      />
    </>
  );
};

export default RangePicker;
