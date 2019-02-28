import React from 'react';
import '../../../static/styles/app.scss';
import {Icon} from 'antd';

class HeaderTitle extends React.Component {
  constructor() {
    super();
  }

  render() {
    const title = this.props.title;
    return (
      <div className="header common-header">
        <div className="fl">
          <a><Icon type="left"></Icon></a>
        </div>
        <div className="fl">{title}</div>
      </div>
    );
  }
}

export default HeaderTitle;