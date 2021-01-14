import React from 'react';
import VisaVinnare from './VisaVinnare';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      spelare: "",
      ai: "",
    }
  }

  ButtonCLicked = () => {
    let KastOne = Math.ceil(Math.random() * 6);
    let KastTwo = Math.ceil(Math.random() * 6);
    let KastThree = Math.ceil(Math.random() * 6);
    let KastSum = KastOne + KastTwo + KastThree;
    let aiOne = Math.ceil(Math.random() * 6);
    let aiTwo = Math.ceil(Math.random() * 6);
    let aiThree = Math.ceil(Math.random() * 6);
    let aiSum = aiOne + aiTwo + aiThree;

    this.setState({
      spelare: KastSum,
      ai: aiSum,
      spelareDiceOne: KastOne,
      aiDiceOne: aiOne,
      spelareDiceTwo: KastTwo,
      aiDiceTwo: aiTwo,
      spelareDiceThree: KastThree,
      aiDiceThree: aiThree
    });
  }

  render() {
    return (
      <div className="Container">
        <h1>DiceGame</h1>
        <VisaVinnare 
        spelare={this.state.spelare}
        ai={this.state.ai}
        spelareDiceOne={this.state.spelareDiceOne}
        spelareDiceTwo={this.state.spelareDiceTwo}
        spelareDiceThree={this.state.spelareDiceThree}
        aiDiceOne={this.state.aiDiceOne}
        aiDiceTwo={this.state.aiDiceTwo}
        aiDiceThree={this.state.aiDiceThree}
        />
        <button className="knapp" onClick={this.ButtonCLicked}>Kasta tärningar</button>
      </div>
    )
  }
}

export default App;