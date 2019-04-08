import Taro, { Component } from '@tarojs/taro';
import { View, Navigator } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({member}) => ({
  ...member,
}))
export default class Member extends Component {
  config = {
    navigationBarTitleText: '会员中心',
  };

  componentDidMount = () => {

  };
  makePhoneCall = () => {
    Taro.getSystemInfo({
      success (res) {
        console.log(res.platform)
        if (res.platform === 'android') {
          Taro.showActionSheet({
            itemList: ['400-1567-881', '呼叫'],
            success: function (res1) {
              if (res1.tapIndex === 1) {
                Taro.makePhoneCall({
                  phoneNumber: '400-800-5050'
                })
              }
            }
          })
        }
        if (res.platform === 'ios') {
          Taro.makePhoneCall({
            phoneNumber: '400-1567-881'
          })
        }
      }
    })
  } 
  render() {
    return (
      <View className='member-page'>
        <View className='member-page-header'>
          <View className='member-page-avatar'>
            <View className='avatar-img'>
              <open-data type='userAvatarUrl'></open-data>
            </View>
            <View className='avatar-name'>
              <open-data type='userNickName'></open-data>
            </View>
          </View>
        </View>
        <View className='member-page-content'>
          <View className='member-page-items'>
            <Navigator url='' className='member-item'>
              <View className='item-icon icon1'></View>
              <View className='item-text'>我的银行卡</View>
              <View className='item-arrow'></View>
            </Navigator>
            <Navigator url='' className='member-item'>
              <View className='item-icon icon2'></View>
              <View className='item-text'>实名认证</View>
              <View className='item-arrow'></View>
            </Navigator>
            <Navigator url='' className='member-item'>
              <View className='item-icon icon3'></View>
              <View className='item-text'>排行榜</View>
              <View className='item-arrow'></View>
            </Navigator>
            <Navigator url='' className='member-item'>
              <View className='item-icon icon4'></View>
              <View className='item-text'>邀请好友</View>
              <View className='item-arrow'></View>
            </Navigator>
            <Navigator url='' className='member-item'>
              <View className='item-icon icon5'></View>
              <View className='item-text'>帮助中心</View>
              <View className='item-arrow'></View>
            </Navigator>
            <Navigator url='' className='member-item' onClick={this.makePhoneCall}>
              <View className='item-icon icon6'></View>
              <View className='item-text'>联系我们</View>
              <View className='item-arrow'></View>
            </Navigator>
          </View>
        </View>
      </View>
    )
  }
}
