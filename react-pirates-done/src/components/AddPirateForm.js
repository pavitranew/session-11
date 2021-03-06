import React, { Component } from 'react';
import '../assets/css/AddPirateForm.css'

class AddPirateForm extends React.Component {

  createPirate(event) {
    event.preventDefault();
    console.log('making a pirate')
    const pirate = {
      name: this.name.value,
      vessel: this.vessel.value,
      weapon: this.weapon.value,
    }
    console.log(pirate)
    this.props.addPirate(pirate);
    this.pirateForm.reset()
  }


  render(){
    return (
      <div>
      <h2>Add Pirate Form Component</h2>
      <form ref={(input)=>this.pirateForm = input } onSubmit={(e) => this.createPirate(e)}>
      <input ref={(input) => this.name = input } type="text" placeholder="Pirate name" />
      <input ref={(input) => this.vessel = input } type="text" placeholder="Pirate vessel" />
      <input ref={(input) => this.weapon = input } type="text" placeholder="Pirate weapon" />
      <button type="submit">Add Pirate</button>
      </form>
      <h2>End Add Pirate Form Component</h2>
      </div>
      )
  }
}

export default AddPirateForm;