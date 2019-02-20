import React, {Component} from 'react';
import logo from '../static/images/logo.svg';
import '../static/styles/app.css';

import Tabs from './common/tab/tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs></Tabs>
      </div>
    );
  }
}

export default App;
