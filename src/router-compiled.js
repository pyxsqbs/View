'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _router = require('dva/router');

var _IndexPage = require('./routes/IndexPage');

var _IndexPage2 = _interopRequireDefault(_IndexPage);

var _IndexPageContent = require('./routes/IndexPageContent');

var _IndexPageContent2 = _interopRequireDefault(_IndexPageContent);

var _LoginContent = require('./routes/LoginContent');

var _LoginContent2 = _interopRequireDefault(_LoginContent);

var _KnowledgeSearch = require('./routes/KnowledgeSearch.js');

var _KnowledgeSearch2 = _interopRequireDefault(_KnowledgeSearch);

var _NewEvent = require('./routes/NewEvent.js');

var _NewEvent2 = _interopRequireDefault(_NewEvent);

var _NewRequest = require('./routes/NewRequest.js');

var _NewRequest2 = _interopRequireDefault(_NewRequest);

var _QueryEvent = require('./routes/QueryEvent.js');

var _QueryEvent2 = _interopRequireDefault(_QueryEvent);

var _QueryRequest = require('./routes/QueryRequest.js');

var _QueryRequest2 = _interopRequireDefault(_QueryRequest);

var _EventDetails = require('./routes/EventDetails.js');

var _EventDetails2 = _interopRequireDefault(_EventDetails);

var _RequestDetails = require('./routes/RequestDetails.js');

var _RequestDetails2 = _interopRequireDefault(_RequestDetails);

var _QueryKnowledge = require('./routes/QueryKnowledge.js');

var _QueryKnowledge2 = _interopRequireDefault(_QueryKnowledge);

var _KnowledgeDetails = require('./routes/KnowledgeDetails.js');

var _KnowledgeDetails2 = _interopRequireDefault(_KnowledgeDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RouterConfig(_ref) {
  var history = _ref.history;

  return _react2.default.createElement(
    _router.Router,
    { history: history },
    _react2.default.createElement(
      _router.Route,
      { path: '/', component: _IndexPage2.default },
      _react2.default.createElement(_router.IndexRoute, { component: _IndexPageContent2.default }),
      _react2.default.createElement(_router.Route, { path: '/loginContent', component: _LoginContent2.default }),
      _react2.default.createElement(_router.Route, { path: '/knowledgeSearch', component: _KnowledgeSearch2.default }),
      _react2.default.createElement(_router.Route, { path: '/NewEvent', component: _NewEvent2.default }),
      _react2.default.createElement(_router.Route, { path: '/NewRequest', component: _NewRequest2.default }),
      _react2.default.createElement(_router.Route, { path: '/QueryEvent', component: _QueryEvent2.default }),
      _react2.default.createElement(_router.Route, { path: '/QueryRequest', component: _QueryRequest2.default }),
      _react2.default.createElement(_router.Route, { path: '/EventDetails/:id', component: _EventDetails2.default }),
      _react2.default.createElement(_router.Route, { path: '/RequestDetails/:id', component: _RequestDetails2.default }),
      _react2.default.createElement(_router.Route, { path: '/QueryKnowledge(/:data)', component: _QueryKnowledge2.default }),
      _react2.default.createElement(_router.Route, { path: '/KnowledgeDetails/:id', component: _KnowledgeDetails2.default })
    )
  );
}

exports.default = RouterConfig;

//# sourceMappingURL=router-compiled.js.map