import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({member}) => ({
  ...member,
}))
export default class Member extends Component {
  config = {
    navigationBarTitleText: 'member',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className='member-page'>
        member
      </View>
    )
  }
}
