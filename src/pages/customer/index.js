import Taro, { Component } from '@tarojs/taro';
import { View, Text, Navigator, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import PieChart from '../../components/PieChart.js'
import './index.scss';

@connect(({customer}) => ({
  ...customer,
}))
export default class Customer extends Component {
  config = {
    navigationBarTitleText: '我的客户'
  };
  constructor(props) {
    super(props)
    this.state = {
      dataList: [
      {
        id: 3,
        type: 'duli',
        content: '独立签单客户数（家）',
        value: 30
      },
      {
        id: 2,
        type: 'zhuanjia',
        content: '专家支持签单客户数（家）',
        value: 20
      },
      {
        id: 1,
        type: 'tudi',
        content: '徒弟签单客户数（家）',
        value: 20
      }
      ],
      sumTotal: 0,
      customerTotal: 0
    }
  }
  componentDidMount () {
    //请求后台数据测试
    // const data = this.props.dispatch({
    //   type: 'customer/userInfo'
    // })
    // console.log(data)
    // Taro.showShareMenu({
    //   withShareTicket: true,
    //   success: function (res) {
    //     // 分享成功
    //     console.log(res)
    //   },
    //   fail: function (res) {
    //     // 分享失败
    //     console.log(res)
    //   }
    // })
    
    let sum = 0
    let cus = 0
    this.state.dataList.forEach(item => {
      sum += item.value
      if (item.type !== 'tudi') {
        cus += item.value
        console.log(item.value, cus)
      }
    })
    this.setState({
      sumTotal: sum,
      customerTotal: cus
    })
    console.log('sumTotal', this.state.sumTotal)
    this.getCharData()
    // this.takePhoto()
  }
  addCharData = (chartData, value, color) => {
    chartData.unshift({
      value,
      itemStyle: {
        color
      }
    })
  }
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/pages/customer/index?id=123'
    }
  }
  getCharData = () => {
     // 定义颜色
     // 0 灰色 1 黄色 2 紫色 3 蓝色
    let total = false
    const colorList = ['#BAC0C9', '#fbcc3b', '#A56EFF', '#5095FF']
    let chartData = []
    this.state.dataList.forEach(item => {
      total = false
      if (item.type === 'tudi' && item.value > 0) {
        this.addCharData(chartData, item.value, colorList[1])
      } else if (item.type === 'zhuanjia' && item.value > 0) {
        this.addCharData(chartData, item.value, colorList[2])
      } else if (item.type === 'duli' && item.value > 0) {
        this.addCharData(chartData, item.value, colorList[3])
      } else {
        total = true
      }
    })
    if (total) {
      this.addCharData(chartData, 0, colorList[0])
    }
    //  const chartData = [
    //   {value: 30, itemStyle:{color: '#fbcc3b'}},
    //   {value: 26, itemStyle:{color: '#A56EFF'}},
    //   {value: 44, itemStyle:{color: '#5095FF'}},
    // ];
    this.pieChart.refresh(chartData);
  }
  refPieChart = (node) => this.pieChart = node

  render() {
    return (
      <View className='customer-page'>
        <View className='customer-page-header'>
          <View className='pie-chart'>
            <View className='pie-text'>
              <View>
              <Text className='h1'>{this.state.sumTotal}</Text>
              <Text className='p'>总收益客户数（家）</Text>
              </View>
            </View>
            <PieChart ref={this.refPieChart} />
          </View>
        </View>
        <View className='customer-page-content'>
          <View className='customer-page-detail'>
            {
              this.state.dataList.map(item => {
                return (
                    <View className='detail-item' key={item.id}>
                    <View className={`item-icon ${item.type}`}></View>
                    <View className='item-name'>{item.content}</View>
                    <View className='item-value'>{item.value}</View>
                    <View className='item-per'>{(Math.round(item.value * 100) / (this.state.sumTotal || 1)).toFixed(1) + '%'}</View>
                  </View>
                )
              })
            }
            <View className='detail-title'>
              我的客户
            </View>
            <Navigator url='../../pages/totalCustomer/index' className='detail-total-customer'>
              <View className='total-customer-num'>{this.state.customerTotal}</View>
              <View className='total-customer-text'>累计成交客户数（家）</View> 
            </Navigator>
            <View className='content'>
              <View className='content-item bg1'>
                <Text className='item-p'>本月成交客户数（家）</Text>
                <Text className='item-h'>300</Text>
              </View>
              <View className='content-item bg2'>
              <Text className='item-p'>上月成交客户数（家）</Text>
              <Text className='item-h'>200</Text>
              </View>
            </View>
            <Navigator url='../../pages/overdueCustomer/index' className='navigator-content'>
              <View className='navigator-icon'><Image src={require('./img/yuqi@2x.png')} className='img' /></View>
              <View className='navigator-text'>逾期客户</View>
              <View className='navigator-val'>3家</View>
              <View className='navigator-arrow'></View>
            </Navigator>
            <Navigator url='../../pages/apprenticeCustomer/index' className='navigator-content'>
              <View className='navigator-icon'><Image src={require('./img/tudiyuqi@2x.png')} className='img' /></View>
              <View className='navigator-text'>徒弟逾期客户</View>
              <View className='navigator-val'>4家</View>
              <View className='navigator-arrow'></View>
            </Navigator>
            <Navigator url='../../pages/reactivationCustomer/index' className='navigator-content'>
              <View className='navigator-icon'><Image src={require('./img/zaijihuo@2x.png')} className='img' /></View>
              <View className='navigator-text'><View>再激活客户</View><Text className='grey'>（连续30天没有成交）</Text></View>
              <View className='navigator-val'>3家</View>
              <View className='navigator-arrow'></View>
            </Navigator>
          </View>
        </View>
      </View>
    )
  }
}
