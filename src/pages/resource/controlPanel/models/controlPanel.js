import { getDataList } from '@/services/api';

export default {
  namespace: 'controlPanel',

  state: {
    text: 'text',
    dataList: [],
  },

  effects: {
    * getDataList({ payload }, { put, call }) {
      const response = yield call(getDataList, payload, 'POST');
      /*todo
      建议后端response有统一返回格式如{success:'ok',data:{},errorCode:100}
      这样可以统一在request.js判断错误弹出请求错误alert,这样这里的response可以是直接返回的data
      */
      yield put({
        type: 'save',
        payload: { dataList: response.dataList },
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
