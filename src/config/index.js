// 请求连接前缀
// export const baseUrl = 'https://ms-api.caibowen.net';
let base = ''
if (process.env.NODE_ENV === 'development') {
  base = 'http://192.168.10.253:7001/api'
} else if (process.env.NODE_ENV === 'production') {
  base = 'https://www.anycase.cn/api'
}
export const baseUrl = base
// 输出日志信息
export const noConsole = false;
