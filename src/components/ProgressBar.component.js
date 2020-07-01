import React from "react";

const ProgressBar = (props) => {
  const { increment } = props;

  const containerStyles = {
    height: 30,
    width: '100%',
    backgroundColor: "#e0e0de",
    margin: 40,
    itemAlign: 'center',
  }

  const fillerStyles = {
    height: '100%',
    width: `${increment}%`,
    backgroundColor: 'magenta',
    transition: 'width 1s ease-in-out',
    textAlign: 'right',
  }

  const labelStyles = {
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${increment}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;