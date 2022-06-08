import './App.css';
import index from './index'
import {Component } from 'react';

export default class App extends Component {
  state = {
   spiceLevel: 0
  }

  increaseHeat(){
    let newspicLevel = this.state.spiceLevel +1
    this.setState({spiceLevel: newspicLevel})
    console.log(newspicLevel)
    
  }

  decreaseHeat(){
    let newspicLevel = this.state.spiceLevel -1
    this.setState({spiceLevel: Math.max(newspicLevel, 0)})
    console.log(newspicLevel)
    
  }

  getSpiceStaus(spiceLevel){
    if(spiceLevel <=3){
      return 'not spicy'
    } else if ( spiceLevel <=10){
      return 'Ouuu spicy'
    } else if (spiceLevel <=15){
      return 'Be sure to buy Pepto Bismol on your way home'
    }
    return ' dont know'
  }


  render() {
    let status = this.getSpiceStaus(this.state.spiceLevel)
    return (
      <div className = "App">
        <h1>Salad King Pepper Chart SPA</h1>
        <button onClick={() => this.increaseHeat()}>Add Some Heat</button>
        <button onClick={() => this.decreaseHeat()}>Cool It Off</button>
        <h2> Spice Level: {this.state.spiceLevel}</h2>
        <h2> Status: {status}</h2>

      </div>
    )
  }
}
