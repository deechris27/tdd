import React, {useState} from 'react';

function App(){
  const [counter, setCounter] = useState(0);

  return(
      <div data-test="component-app">
          <h1 data-test="title-display">Hello Deepak!</h1>
          <h1 data-test="counter">{counter}</h1>
          <button data-test="increment-button" onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
  )
}

export default App;