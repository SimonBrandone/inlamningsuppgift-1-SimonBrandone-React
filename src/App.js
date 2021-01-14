import React from 'react';
import Hello from './dice';

function App(){

  const sayHello = () => {
    console.log("hello");
    console.log("dont");
  }

  return(
    <div>
      <Hello />
    </div>
  );
}

export default App;