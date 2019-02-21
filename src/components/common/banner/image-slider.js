import React from 'react';
import {Carousel} from 'antd';
import '../../../static/styles/home.css';

class ImageSlider extends React.Component {
  constructor() {
    super();
  }

  render() {

    const banner = this.props.imgList.map(node => {
      return (<div key={node.id}><img src={node.src}/></div>)
    })
    return (
      <div className='home-banner'>
        <Carousel>
          {banner}
        </Carousel>
      </div>
    )
  }
}

export default ImageSlider;