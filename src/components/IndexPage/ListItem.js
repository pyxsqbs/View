import React from 'react';
import styles from './ListItem.css';
import {Input, Button} from 'antd';
import {Table, Icon} from 'antd';

const Search = Input.Search;

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
    };
  }

  render() {
    return (
      <div className={styles.ListItemContainer}>
        <Table columns={this.props.columns} dataSource={this.props.data} size="small" pagination={{pageSize: 50}}
               scroll={{y: 780, x: 600}} loading={this.props.loading}/>
      </div>
    );
  }
}

export default ListItem;
