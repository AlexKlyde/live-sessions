import React from 'react';

// input: (props): number
// output: JSX

const Spinner = ({size}) => {
  const style = {
    width: size,
    height: size,
  };

  return (
    <div
      className="spinner"
      style={style}
    ></div>
  );
};

export default Spinner;
