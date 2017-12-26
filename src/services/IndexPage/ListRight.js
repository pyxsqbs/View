import request from '../../utils/request';
import queryString from 'querystring';
import api from '../../utils/api';

export async function getData(payload) {
  const data = payload;
  const params = {
    "keyword": data || '可乐',
    "index_name": 'product_name_index_smart',
    "size": 9999,
    "uniq": "uniq"
  };
  return request(api + '/es_product_name?' + queryString.stringify(params), {
    method: 'GET',
    credentials: 'include',
    headers: {
      channel: 'm',
    }
  });
}
