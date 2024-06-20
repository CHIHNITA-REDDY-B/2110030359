import React from 'react';

const NumberList = ({ windowPrevState, windowCurrState, numbers, average }) => {
  return (
    <div>
      <h2>Previous Window State: [{windowPrevState.join(', ')}]</h2>
      <h2>Current Window State: [{windowCurrState.join(', ')}]</h2>
      <h3>Numbers Received: [{numbers.join(', ')}]</h3>
      <h3>Average: {average}</h3>
    </div>
  );
};

export default NumberList;
