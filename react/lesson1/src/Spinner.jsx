import React from 'react';

// input: (props): number
// output: JSX

const Spinner = props => {
  return (
    <div
      className="spinner"
      style={{ width: props.size, height: props.size }}
    ></div>
  );
};

export default Spinner;
