'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCookie = setCookie;
exports.getCookie = getCookie;
exports.parseCookieToJson = parseCookieToJson;
exports.delCookie = delCookie;
exports.delAllCookie = delAllCookie;
var md5 = require('md5');
var pwdKey = 'pyxsqbs';

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  var currentTime = d.getTime();
  cvalue = encodeURIComponent(cvalue);
  d.setTime(currentTime + exdays * 24 * 60 * 60 * 1000);
  var signToken = md5(pwdKey + currentTime + cvalue);
  var cookieValue = signToken + '&&' + encryption(currentTime) + '&&' + encryption(cvalue);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cookieValue + "; " + expires + '; path=/';
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      var cookieValue = c.substring(name.length, c.length);
      var cookieStrings = cookieValue.split('&&');
      if (cookieStrings && cookieStrings.length === 3) {
        var signToken = cookieStrings[0];
        var currentTime = decryption(cookieStrings[1]);
        var cvalue = decryption(cookieStrings[2]);
        var sign = md5(pwdKey + currentTime + cvalue);
        if (sign === signToken) {
          cvalue = decodeURIComponent(cvalue);
          return cvalue;
        }
      }
    }
  }
  return "";
}

function parseCookieToJson(cookie) {
  return '{"' + cookie.split('; ').join('","').split('=').join('":"') + '"}';
}

function delCookie(cname) {
  if (cname !== 'language' && cname !== 'remember' && cname !== 'currentUser') {
    var d = new Date();
    d.setTime(d.getTime() + -1 * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + "; " + expires + '; path=/';
  }
}

function delAllCookie() {
  document.cookie.split('; ').map(function (x) {
    return x.substring(0, x.indexOf('='));
  }).map(function (x) {
    return delCookie(x);
  });
}

function stringToHex(str) {
  var val = "";
  for (var i = 0; i < str.length; i++) {
    var doubleVal = str.charCodeAt(i).toString(16);
    while (doubleVal.length < 2) {
      doubleVal = '0' + doubleVal;
    }
    val += doubleVal;
  }
  return val;
}

function hexToString(str) {
  var val = "";
  var strLength = str.length;
  for (var i = 0; i < strLength / 2; i++) {
    var doubleVal = parseInt(str.slice(0, 2), 16);
    val += String.fromCharCode(doubleVal);
    str = str.slice(2);
  }
  return val;
}

function encryption(prev) {
  if (!prev) {
    return prev;
  } else {
    if (typeof prev !== 'string') {
      prev = String(prev);
    }
    var next = [];
    prev = stringToHex(prev).split('');
    for (var i = 0; i < prev.length; i++) {
      next.push(prev[i]);
      for (var j = 0; j < (i + 1) % 2; j++) {
        next.push(Math.round(Math.random() * 15).toString(16));
      }
    }
    next = next.join('');
    return next;
  }
}

function decryption(next) {
  if (!next) {
    return next;
  } else {
    if (typeof next !== 'string') {
      next = String(next);
    }
    var prev = [];
    next = next.split('');
    var prevLength = next.length % 3 === 0 ? next.length * 2 / 3 : (next.length * 2 - 1) / 3;
    for (var i = prevLength; i > 0; i--) {
      for (var j = 0; j < i % 2; j++) {
        next.pop();
      }
      prev.unshift(next.pop());
    }
    prev = hexToString(prev.join(''));
    return prev;
  }
}

//# sourceMappingURL=cookie-compiled.js.map