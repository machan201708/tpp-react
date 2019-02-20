import React from 'react';
import ReactDom from 'react-dom';
import ImageSlide from "../../common/banner/image-slide";
import HeaderTransparent from "../../common/header/header-transparent";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      listData: [{id: 0, src: ''}]
    }
  }

  render() {
    return (
      <div>
        <HeaderTransparent></HeaderTransparent>
        <ImageSlide listData={this.state.listData}></ImageSlide>
      </div>);
  }
}

export default Home;