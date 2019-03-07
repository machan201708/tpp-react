import React from 'react';
import ReactDom from 'react-dom';
import HeaderTransparent from "../../common/header/header-transparent";
import ImageSlider from './image-slider';
import ListImgBtn from './list-img-btn';

import '../../../static/styles/app.scss';
import ListImg from "./list-img";
import {Tabs} from 'antd';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      imgListBtn: [
        {id: 0, src: '/images/banner-1.jpg', link: ''},
        {id: 1, src: '/images/banner-2.jpg', link: ''},
        {id: 2, src: '/images/banner-3.jpg', link: ''},
        {id: 3, src: '/images/banner-4.jpg', link: ''}
      ],
      types: [0, 1, 2, 3, 4],
      homeList: [
        {id: 0, src: './images/film-1.jpg', title: '', link: '', description: ''},
        {id: 1, src: './images/film-2.jpg', title: '', link: '', description: ''},
        {id: 2, src: './images/film-1.jpg', title: '', link: '', description: ''},
        {id: 3, src: './images/film-2.jpg', title: '', link: '', description: ''},
        {id: 4, src: './images/film-1.jpg', title: '', link: '', description: ''},
        {id: 5, src: './images/film-2.jpg', title: '', link: '', description: ''},
      ],
      imgList: {
        title: "",
        items: [
          {id: 0, src: './images/film-1.jpg', title: '', link: '', description: ''},
          {id: 1, src: './images/film-2.jpg', title: '', link: '', description: ''},
          {id: 2, src: './images/film-1.jpg', title: '', link: '', description: ''},
          {id: 3, src: './images/film-2.jpg', title: '', link: '', description: ''},
          {id: 4, src: './images/film-1.jpg', title: '', link: '', description: ''},
          {id: 5, src: './images/film-2.jpg', title: '', link: '', description: ''}
        ]
      }
    }
  }

  render() {
    const TabPane = Tabs.TabPane;
    return (
      <div className='container-wrapper'>
        <HeaderTransparent></HeaderTransparent>
        <ImageSlider imgList={this.state.imgListBtn}></ImageSlider>
        <ListImgBtn homeList={this.state.homeList}></ListImgBtn>
        <ListImg type={this.state.types[0]} list={this.state.imgList.items}></ListImg>
        <Tabs defaultActiveKey="1">
          <TabPane tab="精选推荐" key="1">11</TabPane>
          <TabPane tab="我关注的" key="2">22</TabPane>
        </Tabs>
      </div>);
  }
}

export default Home;