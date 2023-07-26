import React, { useState } from 'react';
import './App.css';

export const initialValues = ["a", "b", "c", "d", "e", "f"];
export const initialValue = "X"

function App() {
  const [values, setValues] = useState(initialValues);

  function handleSpaceClick(item, index) {
    // Modify the values array (insert 'X' after the clicked item)
    const updatedValues = [...values];
    updatedValues.splice(index + 1, 0, initialValue);
    // Update the state to trigger re-render
    setValues(updatedValues);
  }

  function handleValueChange(value, index) {
    const updatedValues = [...values];
    updatedValues.splice(index, 1, value);
    setValues(updatedValues);
  }

  return (
    <div className="App">
      <div className='elementList'>
        {values.map((value, index) => (
          <React.Fragment key={index}>
            <input
              id={`inputValue${index}`}
              className='elements'
              onChange={(event) => handleValueChange(event.target.value, index)}
              value={value}
            />
            <div
              id={`clickableItem${index}`}
              className="clickableItem"
              onClick={() => handleSpaceClick(value, index)}
            ></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
