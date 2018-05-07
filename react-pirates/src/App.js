import React, { Component } from 'react';
import Pirate from './components/Pirate';
import Header from './components/Header';
import PirateForm from './components/PirateForm';
import './assets/css/app.css';
import piratesFile from './data/sample-pirates-object';

class App extends Component {
  
  constructor() {
    super();
    this.addPirate = this.addPirate.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.removePirate = this.removePirate.bind(this);
    this.state = {
      pirates: {}
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        
        <ul>
        {
          Object.keys(this.state.pirates)
          .map( key => <Pirate key={key} details={this.state.pirates[key]} /> )
        }
        </ul>
        
      <PirateForm addPirate={this.addPirate} loadSamples={this.loadSamples} />
      </div>
    );
  }
  
  addPirate(pirate) {
    //take a copy of the current state andput it into pirates var 
    const pirates = {...this.state.pirates}
    //create a unique id
    const timestamp = Date.now()
    //add new pirate using accessor and id - objectName["propertyName"] and assignment
    pirates[`pirate-${timestamp}`] = pirate
    //set state pirates with var pirates
    this.setState({ pirates: pirates })
  }

  loadSamples(){
    this.setState({
      pirates: piratesFile
    })
  }

  removePirate(key){
    const pirates = {...this.state.pirates}
    delete pirates[key]
    this.setState({pirates})
  }

}

export default App;
