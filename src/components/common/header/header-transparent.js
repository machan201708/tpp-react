import React, {Component} from 'react';
import ReactDom from 'react-dom';
import '../../../static/styles/app.scss';
import Constant from '../../utils/constant';

import {Icon, Row, Col} from 'antd';

class HeaderTransparent extends Component {
  constructor() {
    super();
  }

  render() {
    const location = '上海';

    return (
      <header className="header header-transparent">
        <Row>
          <Col span={6} className='header-content'>
            <a className=''>{location}<Icon type='down'></Icon></a>
          </Col>
          <Col span={18}>
            <div className="fr">
              <a className="icon-btn"><Constant type="icon-qrcode"></Constant></a>
              <a className="icon-btn"><Constant type="icon-canlender"></Constant></a>
              <a className="icon-btn"><Constant type="icon-search"/></a>
            </div>
          </Col>
        </Row>
      </header>
    )
  }
}

export default HeaderTransparent;