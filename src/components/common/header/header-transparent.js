import React, {Component} from 'react';
import ReactDom from 'react-dom';
import '../../../static/styles/app.scss';

import {Menu, Dropdown, Icon, Row, Col, Input, Button} from 'antd';

class HeaderTransparent extends Component {
  constructor() {
    super();
  }

  render() {
    const location = '上海';
    const Search = Input.Search;
    const MIcon = Icon.createFromIconfontCN({
      scriptUrl: '//at.alicdn.com/t/font_1061405_1fbros26cl9.js'
    });
    return (
      <header className="header header-transparent">
        <Row>
          <Col span={6} className='header-content'>
            <a className=''>{location}<Icon type='down'></Icon></a>
          </Col>
          <Col span={18}>
            <div className="float-right">
              <Button ghost className="no-border"><MIcon type="icon-qrcode"></MIcon></Button>
              <Button ghost className="no-border"><MIcon type="icon-canlender"></MIcon></Button>
              <Button ghost className="no-border"><MIcon type="icon-search"/></Button>
            </div>
          </Col>
        </Row>
      </header>
    )
  }
}

export default HeaderTransparent;