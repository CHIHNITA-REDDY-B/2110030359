import React, { useState } from 'react';

const NumberInput = ({ fetchNumbers }) => {
  const [numberId, setNumberId] = useState('');

  const handleChange = (e) => {
    setNumberId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (numberId) {
      fetchNumbers(numberId);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Number ID (p, f, e, r):
          <input type="text" value={numberId} onChange={handleChange} />
        </label>
        <button type="submit">Fetch Numbers</button>
      </form>
    </div>
  );
};

export default NumberInput;
