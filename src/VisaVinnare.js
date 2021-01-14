import React from "react";

function Vinnare(spelare, ai) {
  let vinnare = ''

  if(spelare < ai) {
    vinnare = "Datorn vann!"
  }
  else if(spelare === ai){
    vinnare = "Oavgjort!"
  }
  else{
    vinnare = "Du vann!"
  }

  return vinnare
}

function VisaVinnare(props) {
  const vann = Vinnare(props.spelare, props.ai);

  return (
  <div>
    <section className="Spelare">
      <p>Spelare tärning ett: {props.spelareDiceOne}</p>
      <p>Spelare tärning två: {props.spelareDiceTwo}</p>
      <p>Spelare tärning tre: {props.spelareDiceThree}</p>
      <h4>Spelare tärning totalt: {props.spelare}</h4>
    </section>
    <section className="Ai">
      <p>Ai tärning ett: {props.aiDiceOne}</p>
      <p>Ai tärning två: {props.aiDiceTwo}</p>
      <p>Ai tärning tre: {props.aiDiceThree}</p>
      <h4>Ai tärning totalt: {props.ai}</h4>
    </section>
    <section className="Vinnare">
      <h1>Vinnare: {vann}</h1>
    </section>
  </div>
    
  )
}

export default VisaVinnare;