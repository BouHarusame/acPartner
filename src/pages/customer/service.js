import Request from '../../utils/request';

export const userInfo = data =>
  Request({
    url: '/mini/access/info',
    method: 'GET',
    data,
  });
