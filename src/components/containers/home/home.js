import React from 'react';
import ReactDom from 'react-dom';
import HeaderTransparent from "../../common/header/header-transparent";
import ImageSlider from '../../common/banner/image-slider';

import '../../../static/styles/app.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      imgList: [{id: 0, src: ''}]
    }
  }

  render() {
    const imageList = this.state.imgList.map(node => {
      return (
        <div><img src={node.src}/></div>
      )
    });

    return (
      <div className='container-wrapper'>
        <HeaderTransparent></HeaderTransparent>
        <ImageSlider imgList={this.state.imgList}></ImageSlider>
      </div>);
  }
}

export default Home;