import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
// import CustomerList from '../../components/customerList'
import './index.scss';

@connect(({reactivationCustomer}) => ({
  ...reactivationCustomer,
}))
export default class Reactivationcustomer extends Component {
  config = {
    navigationBarTitleText: '再激活客户',
  };
  constructor () {
    this.state = {
      loading: true
    }
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 1000);
  };

  render() {
    const list = [{
        id: 1,
        day: 'xxxxxxx公司',
        money: '62天',
        name: '1'
      },
      {
        id: 2,
        day: 'xxxxxxx公司',
        money: '45天',
        name: '2'
      },
      {
        id: 3,
        day: 'xxxxxxx公司',
        money: '40天',
        name: '3'
      }
    ];
    return (
      <View className='reactivationCustomer-page'>
        <View className='nav-menu'>
          <View className='nav-menu-title left'>排名</View>
          <View className='nav-menu-title center'>公司名称</View>
          <View className='nav-menu-title right'>未下单天数</View>
        </View>
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
          {this.state.loading && (
            <View className='loadMoreGif'>
              <View className='zan-loading' />
              <View className='text'>加载中...</View>
            </View>
          )}
        </View>
      </View>
    )
  }
}
