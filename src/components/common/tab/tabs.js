import React from 'react';
import ReactDom from 'react-dom';
import {Route, Link} from 'react-router-dom';
import '../../../static/styles/app.css';

class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      tabList: [
        {id: 0, text: '首页', icon: '', path: '/home'},
        {id: 1, text: '电影', icon: '', path: '/film'},
        {id: 2, text: '淘气视频', icon: '', path: '/videos'},
        {id: 3, text: '演出', icon: '', path: '/shows'},
        {id: 4, text: '我的', icon: '', path: 'user'},
      ]
    }
  }

  render() {
    const tabList = this.state.tabList.map(node => {
      return (
        <li key={node.id}>
          <Link to={node.path}>
            <i></i><span>{node.text}</span></Link>
        </li>
      );
    });
    return (
      <div className="tab-wrapper">
        <ul>{tabList}</ul>
      </div>
    )
  }
}

export default Tabs;