import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

interface RangePickerProp {
  values?: any;
  setValues?: any;
}
const RangePicker = ({ values, setValues }: RangePickerProp) => {
  // const [values, setValues] = useState([0]);
  const min = 0;
  const max = 100;
  return (
    <>
      <Range
        step={0.1}
        min={min}
        max={max}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            // {...props}
            style={{
              ...props.style,
              height: '4px',
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '2px'
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#5848BC', 'rgba(255, 255, 255, 0.08)'],
                  min: min,
                  max: max
                }),
                alignSelf: 'center'
              }}
            >
              {children}
            </div>
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
