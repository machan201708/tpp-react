import React from 'react';
import ReactDom from 'react-dom';
import '../../../static/styles/app.css';

class ImageSlide extends React.Component {
  constructor() {
    super();
  }

  render() {
    const banner = this.props.listData.map(node => {
      return (<li key={node.id} className="slide-list">
        <img src={node.src}/>
      </li>)
    });
    return (
      <div className="banner-wrapper">
        <ul>{banner}</ul>
      </div>
    );
  }
}

export default ImageSlide;