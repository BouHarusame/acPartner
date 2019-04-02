import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

class CustomerList extends Component {
  static propTypes = {
    list: PropTypes.array
  };

  static defaultProps = {
    list: []
  };

  gotoDetail = e => {
     console.log(e)
  };

  render() {
    const { list, loading } = this.props;
    return (
      <View className='customer-list-container'>
        {list.length > 0 && (
          list.map((item) => (
            <View className='customer-ul' key={item.id}>
              <View className='customer-li left'>{item.name}</View>
              <View className='customer-li center'>{item.day}</View>
              <View className='customer-li right'>{item.money}</View>
            </View>
          ))
        )}
        {loading && (
          <View className='loadMoreGif'>
            <View className='zan-loading' />
            <View className='text'>加载中...</View>
          </View>
        )}
      </View>
    );
  }
}

export default CustomerList;
