import React from 'react';

interface ISpinnerProps {
  width?: number;
  height?: number;
}

const Spinner: React.FC<ISpinnerProps> = ({ width = 20, height = 20 }) => {
  const styles = {
    width: width + 'px',
    height: height + 'px',
    margin: '0 auto',
    borderRadius: '50%',
    border: '2px solid #ccc',
    borderTopColor: '#000',
    animation: 'spin 1s infinite linear',
  };

  return <div style={styles} />;
};

export default Spinner;
