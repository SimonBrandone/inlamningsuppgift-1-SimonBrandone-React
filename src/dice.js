import React from "react";

function Hello() {
    const sayHello = () => {
        console.log("hello");
    }

return(
    <div>
      <h1>Hello world</h1>
      <button><img src="img/dice-one.png" alt="Dice" onClick={sayHello} /></button>
    </div>
  );
}

export default Hello;