import React, {Component} from 'react';
import ReactDom from 'react-dom';
import '../../../static/styles/app.css';

import {Row, Col, Input} from 'antd';

class HeaderTransparent extends Component {
  constructor() {
    super();
  }

  render() {
    const Search = Input.Search;
    return (
      <header className="header header-transparent">
        <Row>
          <Col span={6}></Col>
          <Col span={18}>
            <Search placeholder="" onSearch={value => {
              console.log(value)
            }} style={{width: '100%'}}></Search></Col>
        </Row>
      </header>
    )
  }
}

export default HeaderTransparent;