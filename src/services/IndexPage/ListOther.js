import request from '../../utils/request';
import queryString from 'querystring';
import api from '../../utils/api';

export async function getData(payload) {
  const {data, i} = payload;
  const params = {
    "productName": data || '可乐',
    "Plat": 'android',
    "ver": 12,
    "pageNo": i,
    "orderNo": 0,
    "deAc": '',
  };
  return request('/other' + '/wk/productsearch?' + queryString.stringify(params), {
    method: 'GET',
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });

}
