import 'react-native-gesture-handler';
import React from 'react';
import { DefaultContext } from './context/DefaultContext';

import Router from './router'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {

    let provider ={}

    return (
      <DefaultContext.Provider value={provider}>

        <Router/>

      </DefaultContext.Provider>
    );
  }
}

export default App;
