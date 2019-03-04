import React from 'react';
import ReactDom from 'react-dom';
import HeaderTransparent from "../../common/header/header-transparent";
import ImageSlider from './image-slider';
import ListImgBtn from './list-img-btn';

import '../../../static/styles/app.scss';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      imgList: [
        {id: 0, src: '/images/banner-1.jpg', link: ''},
        {id: 1, src: '/images/banner-2.jpg', link: ''},
        {id: 2, src: '/images/banner-3.jpg', link: ''},
        {id: 3, src: '/images/banner-4.jpg', link: ''}
      ],
      homeList: [
        {id: 0, src: '', title: '', link: '', description: ''},
        {id: 1, src: '', title: '', link: '', description: ''},
        {id: 2, src: '', title: '', link: '', description: ''},
        {id: 3, src: '', title: '', link: '', description: ''},
        {id: 4, src: '', title: '', link: '', description: ''},
        {id: 5, src: '', title: '', link: '', description: ''},
      ]
    }
  }

  render() {
    return (
      <div className='container-wrapper'>
        <HeaderTransparent></HeaderTransparent>
        <ImageSlider imgList={this.state.imgList}></ImageSlider>
        <ListImgBtn homeList={this.state.homeList}></ListImgBtn>
      </div>);
  }
}

export default Home;