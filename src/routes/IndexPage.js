import React from 'react';
import {connect} from 'dva';
import styles from './IndexPage.css';
import {Input, Button} from 'antd';
import ListItem from '../components/IndexPage/ListItem';

const Search = Input.Search;

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 200,
  fixed: 'left',
}, {
  title: 'Age',
  dataIndex: 'age',
  width: 400,
}, {
  title: 'Address',
  dataIndex: 'address',
  fixed: 'right',
  width: 200,
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleSearchChange(e) {
    let searchVal = e.target.value;
    this.setState({
      searchVal: searchVal,
    })
  }

  handleSearchClick() {
    //请求左列表数据
    this.props.dispatch({
      type: 'ListLeft/getValue',
      payload: this.state.searchVal || '',
    });

    //请求右列表数据
    this.props.dispatch({
      type: 'ListRight/getValue',
      payload: this.state.searchVal || '',
    });

    //请求其他列表数据
    this.props.dispatch({
      type: 'ListOther/getValue',
      payload: this.state.searchVal || '',
    });
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'ListLeft/getValue',
      payload: this.state.searchVal || '',
    });
    this.props.dispatch({
      type: 'ListRight/getValue',
      payload: this.state.searchVal || '',
    });
    this.props.dispatch({
      type: 'ListOther/getValue',
      payload: this.state.searchVal || '',
    });
    //按下回车搜索
    document.onkeydown = function (event) {
      let e = event || window.event;
      if (e && e.keyCode === 13) { //回车键的键值为13
        document.getElementsByClassName(styles.button)[0].click();
      }
    };
  }

  render() {
    const loading_ListLeft = this.props.loading.models.ListLeft || false;
    const loading_ListRight = this.props.loading.models.ListRight || false;
    const loading_ListOther = this.props.loading.models.ListOther || false;
    const data_ListLeft = this.props.ListLeft.data.data.hits.hits.map((x, index) => {
      return {
        key: index,
        text: <div
          dangerouslySetInnerHTML={{__html: x._source.ts_score + ' $ ' + x._source.spu + '_' + x.highlight.product_name[0].replace(/tag1/g, 'mark')}}/>,
      }
    });
    const data_ListRight = this.props.ListRight.data.data.hits.hits.map((x, index) => {
      return {
        key: index,
        // text: x._source.content.replace(/\s/g, ""),
        text: <div
          dangerouslySetInnerHTML={{__html: x._source.ts_score + ' $ ' + x._source.spu + '_' + x.highlight.product_name[0].replace(/tag1/g, 'mark')}}/>,
      }
    });
    const data_ListOther = this.props.ListOther.data.data.map((x, index) => {
      return {
        key: index,
        text: <div>{x.productName}</div>
      }
    });

    const columns_ListLeft = [{
      title: 'normal',
      dataIndex: 'text',
    },];
    const columns_ListRight = [{
      title: 'smart',
      dataIndex: 'text',
    },];
    const columns_ListOther = [{
      title: 'other',
      dataIndex: 'text',
    },];

    return (
      <div className={styles.bodyBack}>
        {/*搜索组件*/}
        <div className={styles.search}>
          <div className={styles.searchContainer}>
            <Search
              placeholder="input search text"
              onChange={this.handleSearchChange}
              size="large"
            />
          </div>
          <div className={styles.buttonContainer}>
            <Button type="primary" icon="search" className={styles.button}
                    onClick={this.handleSearchClick}>Search</Button>
          </div>
        </div>
        {/*列表组件*/}
        <div className={styles.listContainer}>
          {/*左列表ListLeft*/}
          <div className={styles.listItem}>
            <ListItem dispatch={this.props.dispatch} columns={columns_ListLeft} data={data_ListLeft}
                      loading={loading_ListLeft}/>
          </div>
          {/*右列表ListLeft*/}
          <div className={styles.listItem}>
            <ListItem dispatch={this.props.dispatch} columns={columns_ListRight} data={data_ListRight}
                      loading={loading_ListRight}/>
          </div>
          {/*其他列表ListOther*/}
          <div className={styles.listItem}>
            <ListItem dispatch={this.props.dispatch} columns={columns_ListOther} data={data_ListOther}
                      loading={loading_ListOther}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({ListLeft, ListRight, ListOther, loading}) => ({
  ListLeft,
  ListRight,
  ListOther,
  loading,
}))(IndexPage);
