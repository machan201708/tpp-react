import React from 'react';
import {Carousel} from 'antd';
import '../../../static/styles/app.scss';

class ImageSlider extends React.Component {
  constructor() {
    super();
  }

  render() {

    const banner = this.props.imgList.map(node => {
      return (<div key={node.id}><img src={node.src}/></div>)
    });
    return (
      <div className='home-banner'>
        <Carousel autoplay>
          {banner}
        </Carousel>
      </div>
    )
  }
}

export default ImageSlider;