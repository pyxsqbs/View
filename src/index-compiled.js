'use strict';

var _dva = require('dva');

var _dva2 = _interopRequireDefault(_dva);

require('./index.css');

require('antd/dist/antd.css');

var _dvaLoading = require('dva-loading');

var _dvaLoading2 = _interopRequireDefault(_dvaLoading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 1. Initialize
var app = (0, _dva2.default)({
  onError: function onError(e, dispatch) {
    // notification.open({
    //   message: `${e.response.status} ${e.response.statusText}`,
    //   description: `${e} (服务器内部错误)`,
    // });
    // console.log(e.message);
  }
});
// 2. Plugins
app.use((0, _dvaLoading2.default)());

// 3. Model
app.model(require("./models/model-IndexPage"));
app.model(require("./models/model-KnowledgeDetails"));
app.model(require("./models/model-QueryKnowledge"));
app.model(require("./models/model-RequestDetails"));
app.model(require("./models/model-EventDetails"));
app.model(require("./models/model-QueryRequest"));
app.model(require("./models/model-QueryEvent"));
app.model(require("./models/model-NewRequest"));
app.model(require("./models/model-NewEvent"));
app.model(require("./models/model-KnowledgeSearch"));
app.model(require("./models/model-IndexPageContent"));
app.model(require("./models/model-LoginContent"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

//# sourceMappingURL=index-compiled.js.map