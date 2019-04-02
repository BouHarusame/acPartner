import * as customerApi from './service';

export default {
  namespace: 'customer',
  state: {

  },

  effects: {
    * userInfo(_, { call, put }) {
      const { status, data } = yield call(customerApi.userInfo, {});
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            userInfoData: data,
          } });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
