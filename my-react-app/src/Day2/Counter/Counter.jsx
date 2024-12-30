import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  const initial = Number(props?.initialValue);

  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <p>Initial Value: {initial}</p>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement} style={{ margin: '5px' }}>
        Increment
      </button>
      <button onClick={handleDecrement} style={{ margin: '5px' }}>
        Decrement
      </button>
    </div>
  );
};

Counter.propTypes = {
  initialValue: PropTypes.string.isRequired,
};

export default Counter;
