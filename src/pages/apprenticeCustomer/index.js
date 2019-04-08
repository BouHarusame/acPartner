import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
// import CustomerList from '../../components/customerList'
import './index.scss';

@connect(({apprenticeCustomer}) => ({
  ...apprenticeCustomer,
}))
export default class Apprenticecustomer extends Component {
  config = {
    navigationBarTitleText: '我的徒弟逾期客户',
  };
constructor() {
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
        day: '10家',
        money: '50000元',
        name: '王**'
      },
      {
        id: 2,
        day: '8家',
        money: '80000元',
        name: '王**'
      },
      {
        id: 3,
        day: '7家',
        money: '150000元',
        name: '王**'
      }
    ];
    return (
      <View className='apprenticeCustomer-page'>
        <View className='nav-menu'>
          <View className='nav-menu-title left'>姓名</View>
          <View className='nav-menu-title center'>逾期客户数</View>
          <View className='nav-menu-title right'>逾期总费用</View>
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
