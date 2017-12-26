'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = request;

var _fetch = require('dva/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _DomainPort = require('../utils/DomainPort');

var _DomainPort2 = _interopRequireDefault(_DomainPort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('es6-promise').polyfill();
require('isomorphic-fetch');


function parseJSON(response) {
  // console.log(response)
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else if (response.status === 500) {
    return response;
  }

  var error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseErrorMessage(_ref) {
  var data = _ref.data;
  var status = data.status,
      message = data.message;

  if (status === 'error') {
    throw new Error(message);
  }
  return { data: data };
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
function request(url, options) {
  return (0, _fetch2.default)(_DomainPort2.default + url, options).then(checkStatus).then(parseJSON).then(function (data) {
    // console.log(data)
    return { data: data };
  })

  // .then(parseErrorMessage)
  .catch(function (err) {
    return { err: err };
  });
}

//# sourceMappingURL=request-compiled.js.map