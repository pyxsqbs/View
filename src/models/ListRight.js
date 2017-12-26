import {getData} from '../services/IndexPage/ListRight'

export default {
  namespace: 'ListRight',
  state: {
    data: {
      data: {
        hits: {
          hits: [],
        }
      }
    },
  },
  reducers: {
    initData(state, {payload}) {
      state.data = payload;
      return Object.assign({}, state);
    },
  },
  effects: {
    * getValue({payload}, {call, put, select}) {
      const result = yield call(getData, payload);
      if (JSON.stringify(result).indexOf('"err":') === -1) {
        yield put({type: 'initData', payload: result});
      }
    },
  },
  subscriptions: {},
};
