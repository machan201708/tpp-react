import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import '../../../static/styles/app.scss';
import MIcon from '../../utils/constant';
import {List, Avatar, Row, Col, Icon} from 'antd';

import MyCinemaTickets from './my-cinema-tickets';
import MyCoupon from "./my-coupon";
import MyCards from "./my-cards";
import MyShowTickets from "./my-show-tickets";

class UserCenter extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        id: 0,
        username: ''
      },
      login: false
    }
  }

  render() {
    const Item = List.Item;
    const username = this.state.login ? this.state.user.username : '立即登录';

    const myCinemaTickets = {
      pathname: '/user/my-cinema-tickets',
      state: {userId: this.state.user.id},
    };
    const myCoupon = {
      pathname: '/user/my-coupon',
      state: {userId: this.state.user.id}
    };
    const myCards = {
      pathname: '/user/my-cards',
      state: {userId: this.state.user.id}
    };
    const myShowTickets = {
      pathname: '/user/my-show-tickets',
      state: {userId: this.state.user.id}
    };

    return (
      <div className="user-center">
        <header className="header">
          <div>
            <div className="fl"><a className="icon-btn"><MIcon type="icon-setting"/></a></div>
            <div className="fr"><a className="icon-btn"><MIcon type="icon-message"/></a></div>
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
          <Link to={myCinemaTickets}><MIcon type="icon-movie"/>电影票</Link>
          <Link to={myCoupon}><MIcon type="icon-coupon"/>优惠券</Link>
          <Link to={myCards}><MIcon type="icon-card"/>权益卡</Link>
          <Link to={myShowTickets}><MIcon type="icon-show"/>演出票</Link>
        </div>
        <div>
          <List itemLayout="horizontal">
            <Item actions={[<a><Icon type="right"/></a>]}>想看的电影和演出</Item>
            <Item actions={[<a><Icon type="right"/></a>]}>看过的电影</Item>
            <Item actions={[<a><Icon type="right"/></a>]}>淘票票乐影卡</Item>
            <Item actions={[<a><Icon type="right"/></a>]}>播放记录</Item>
            <Item actions={[<a><Icon type="right"/></a>]}>我的小聚场</Item>
            <Item actions={[<a><Icon type="right"/></a>]}>发起的讨论</Item>
          </List>
        </div>
      </div>
    );
  }
}

export default UserCenter;