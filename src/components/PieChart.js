import Taro, { Component } from '@tarojs/taro';
import * as echarts from './ec-canvas/echarts';

function setChartData(chart, data) {
  let option = {
    series : [
      {
        name: '访问来源',
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['76%', '100%'],
        data: data,
        label: {
          show: false,
          // position: 'center',
          // formatter: '{per|{d}%}\n{b|{b}}',
          // rich: {
          //   per: {
          //     fontSize: 16,
          //     lineHeight: 18,
          //     align: 'center'
          //   },
          //   b: {
          //     fontSize: 16,
          //     lineHeight: 18,
          //     verticalAlign: 'bottom'
          //   }
          // },
          // verticalAlign: 'bottom',
          // padding: [0, 0, 50, 0]
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  chart.setOption(option);
}

export default class PieChart extends Component {
  config = {
    usingComponents: {
      'ec-canvas': './ec-canvas/ec-canvas'
    }
  };

  constructor(props) {
    super(props);
  }

  state = {
    ec: {
      lazyLoad: true
    }
  };

  refresh(data) {
    this.Chart.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      setChartData(chart, data);
      return chart;
    });
  }

  refChart = node => (this.Chart = node);

  render() {
    return (
      <ec-canvas
        ref={this.refChart}
        canvas-id='mychart-area'
        ec={this.state.ec}
      />
    );
  }
}