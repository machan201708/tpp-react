import React from 'react';
import ReactDom from 'react-dom';
import '../../../static/styles/app.css';

class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      tabList: [
        {id: 0, text: '首页', icon: ''},
        {id: 1, text: '电影', icon: ''},
        {id: 2, text: '淘气视频', icon: ''},
        {id: 3, text: '演出', icon: ''},
        {id: 4, text: '我的', icon: ''},
      ]
    }
  }

  render() {
    const tabList = this.state.tabList.map(node => {
      return <li key={node.id}><i></i><span>{node.text}</span></li>
    });
    return (
      <div className="tab-wrapper">
        <ul>{tabList}</ul>
      </div>
    )
  }
}

export default Tabs;