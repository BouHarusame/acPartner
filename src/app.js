import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux';
import 'taro-ui/dist/style/index.scss'
import Home from './pages/home'
import dva from './utils/dva'
import models from './models';
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

class App extends Component {

  config = {
    pages: [
      'pages/home/index',
      'pages/customer/index',
      'pages/member/index',
      'pages/index/index',
      'pages/totalCustomer/index',
      'pages/overdueCustomer/index',
      'pages/apprenticeCustomer/index',
      'pages/reactivationCustomer/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#102A4D',
      navigationBarTitleText: '合伙人小程序',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#BAC0C9',
      selectedColor: '#000000',
      backgroundColor: '#ffffff',
      borderStyle: 'black',
      list: [{
          pagePath: 'pages/home/index',
          text: '首页',
          iconPath: './images/shouye@2x.png',
          selectedIconPath: './images/shouye_active@2x.png'
        },
        {
          pagePath: 'pages/customer/index',
          text: '我的客户',
          iconPath: './images/kehu@2x.png',
          selectedIconPath: './images/kehu_active@2x.png'
        },
        {
          pagePath: 'pages/member/index',
          text: '会员中心',
          iconPath: './images/huiyuan@2x.png',
          selectedIconPath: './images/huiyuan_active@2x.png'
        }
      ]
    }
  }

  componentDidMount (options) {
    console.log('22222', options)
    this.getUpdateManager()
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}
// 检查版本更新
  getUpdateManager() {
    // 获取小程序更新机制兼容
    let that = this
    if (Taro.canIUse('getUpdateManager')) {
      const updateManager = Taro.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        console.log('xinbanben', res)
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            Taro.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: function (res1) {
                if (res1.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                  updateManager.applyUpdate()
                }
              },
              fail: function () {
                that.setUserLocation()
              }
            })
          })
          updateManager.onUpdateFailed(function () {
            // 新的版本下载失败
            Taro.showModal({
              title: '已经有新版本了哟~',
              content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
            })
          })
        } else {
          // that.setUserLocation()
        }
      })
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      Taro.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  }
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
