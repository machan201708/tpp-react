import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import '../../../static/styles/app.scss';
import Constant from '../../utils/constant';
import {List, Avatar, Row, Col} from 'antd';

import MyCinemaTickets from './my-cinema-tickets';

class UserCenter extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      login: false
    }
  }

  render() {
    const Item = List.Item;
    const username = this.state.login ? this.state.username : '立即登录';
    return (
      <div className="user-center">
        <header className="header">
          <div>
            <div className="fl"><a className="icon-btn"><Constant type="icon-setting"/></a></div>
            <div className="fr"><a className="icon-btn"><Constant type="icon-message"/></a></div>
          </div>
          <div>
            <Row>
              <Col span={6}>
                <Avatar size={64} icon="user"></Avatar>
              </Col>
              <Col span={18}>{username}</Col>
            </Row>
          </div>
        </header>
        <div className="ticket-wrapper">
          <Link to={MyCinemaTickets}><Constant type="icon-movie"/>电影票</Link>
          <Link to={MyCinemaTickets}><Constant type="icon-coupon"/>优惠券</Link>
          <Link to={MyCinemaTickets}><Constant type="icon-card"/>权益卡</Link>
          <Link to={MyCinemaTickets}><Constant type="icon-show"/>演出票</Link>
        </div>
        <div>
          <List itemLayout="horizontal">
            <Item>想看的电影和演出</Item>
            <Item>看过的电影</Item>
            <Item>淘票票乐影卡</Item>
            <Item>播放记录</Item>
            <Item>我的小聚场</Item>
            <Item>发起的讨论</Item>
          </List>
        </div>
      </div>
    );
  }
}

export default UserCenter;