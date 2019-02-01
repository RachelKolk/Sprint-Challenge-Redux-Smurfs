import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import Smurfs from './Smurfs';
import AddNewSmurf from './AddNewSmurf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>SMURFS! 2.0 W/ Redux</p>
        <h1>Smurf Village</h1>
        
        <AddNewSmurf />
        <Smurfs />
      </div>
    );
  }
}

export default App;
