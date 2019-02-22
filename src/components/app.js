import React, {Component} from 'react';
import logo from '../static/images/logo.svg';
import '../static/styles/app.scss';

import Tabs from './common/tab/tabs';
import Main from './main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Main></Main>
        <Tabs></Tabs>
      </div>
    );
  }
}

export default App;
