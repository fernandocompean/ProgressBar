import React from "react";

const ProgressBar = (props) => {
  const { increment } = props;

  const containerStyles = {
    height: 20,
    width: '80%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    position: 'fixed',
    top: '50%',
    left: '10%',
    display: 'flex',
  }

  const fillerStyles = {
    height: '100%',
    width: `${increment}%`,
    backgroundColor: 'magenta',
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'verdana'
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