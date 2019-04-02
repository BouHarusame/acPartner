import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({home}) => ({
  ...home,
}))
export default class Home extends Component {
  constructor () {
    this.state = {
      eyesShow: true
    }
  }
  config = {
    navigationBarTitleText: 'ACpartner',
  };
  componentDidMount = () => {

  };
   
  handleClickToggle = () => {
    this.setState((prevState) => ({
      eyesShow: !prevState.eyesShow
    }))
  }

  render() {
    return (
      <View className='home-page'>
        <View className='section1'>
          <View className='item-box'>
            <View className='item-content'>
              <View className='item-title'>
                {
                  this.state.eyesShow ? <Text className='item-p'>10000.00</Text> : <Text className='item-pp'>****</Text>
                }
                <View className='item-center'>
                  <Text className='item-h4'>累计收益（元）</Text>
                    <View className='eyes-btn' onClick={this.handleClickToggle}>
                    {
                      this.state.eyesShow ?
                      <Image src={require('./img/xianshi@2x.png')}></Image> : <Image src={require('./img/yincang@2x.png')}></Image>
                    }
                  </View>
                </View>
              </View>
              <View className='items-bottom'>
                <View className='item-bottom'>
                  {
                    this.state.eyesShow ? <Text className='item-p2'>5000.00</Text> : <Text className='item-p2'>****</Text>
                  }
                  <Text className='item-p1'>上月收益（元）</Text>
                </View>
                <View className='line'></View>
                <View className='item-bottom'>
                  {
                    this.state.eyesShow ? <Text className='item-p2'>8000.00</Text> : <Text className='item-p2'>****</Text>
                  }
                  <Text className='item-p1'>师傅上月收益（元）</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className='home-bg'>
          <View className='section2 white-bg'>
           <View className='title'>
             <Text className='h4'>贡献</Text>
           </View>
           <View className='content'>
             <View className='content-item bg1'>
               <Text className='item-p'>客户贡献（元）</Text>
               {
                 this.state.eyesShow ? <Text className='item-h'>6000.00</Text> : <Text className='item-h'><Text className='item-h1'>****</Text></Text>
               }
             </View>
             <View className='content-item bg2'>
              <Text className='item-p'>徒弟贡献（元）</Text>
              {
                this.state.eyesShow ? <Text className='item-h'>4000.00</Text> : <Text className='item-h'><Text className='item-h1'>****</Text></Text>
              }
             </View>
           </View>
          </View>
          <View className='section3 white-bg'>
            <View className='items-box'>
              <View className='item'>
                <Image className='img' src={require('./img/yaoqing@2x.png')} />
                <Text className='text'>邀请有礼</Text>
              </View>
              <View className='item'>
                <Image className='img' src={require('./img/aboutus@2x.png')} />
                <Text className='text'>关于我们</Text>
              </View>
              <View className='item'>
                <Image className='img' src={require('./img/zhuanjia@2x.png')} />
                <Text className='text'>专家支持</Text>
              </View>
              <View className='item'>
                <Image className='img' src={require('./img/tixian@2x.png')} />
                <Text className='text'>提现</Text>
              </View>
            </View>
          </View>
          <View className='section4'>
            <Image className='ad' src={require('./img/banner@2x.png')} />
          </View>
        </View>
      </View>
    )
  }
}
