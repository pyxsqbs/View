import {getData} from '../services/IndexPage/ListOther'
import {getCookie, setCookie} from '../utils/cookie'

export default {
  namespace: 'ListOther',
  state: {
    data: {
      data: [],
    },
  },
  reducers: {
    initData(state, {payload}) {
      state.data.data = payload;
      return Object.assign({}, state);
    },
  },
  effects: {
    * getValue({payload}, {call, put, select}) {
      let resultArray = [];
      let i = 1;
      let resultTrue = true;
      const data = payload;
      do {
        payload = {data, i};
        const result = yield call(getData, payload);
        if (JSON.stringify(result).indexOf('"err":') === -1) {
          if (result.data.status !== '1') {
            resultTrue = false;
          } else {
            resultArray.push(...result.data.data);
          }
        }
        i++;
      } while (resultTrue);
      yield put({type: 'initData', payload: resultArray});
    },
  },
  subscriptions: {},
};
