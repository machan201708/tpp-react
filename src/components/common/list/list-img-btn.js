import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, List} from 'antd';
import '../../../static/styles/home.scss';

class ListImgBtn extends React.Component {
  constructor() {
    super();
  }

  render() {
    const items = this.props.homeList.map(node => {
      return (
        <List.Item key={node.id}>
          <Card>
            <Link to={node.link}>
              <div><img src={node.src}/></div>
              <div><h3>{node.title}</h3><p>{node.description}</p></div>
              <div>
                <Button type='primary' shape='round'>购票</Button>
              </div>
            </Link>
          </Card>
        </List.Item>
      )
    });
    return (
      <div>
        <Card>
          <List grid={{gutter: 10, column: 4}}>{items}</List>
        </Card>
      </div>
    )
  }
}

export default ListImgBtn;