import dva from 'dva';
import './index.css';
import 'antd/dist/antd.css';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva({
  onError(e, dispatch) {
    // notification.open({
    //   message: `${e.response.status} ${e.response.statusText}`,
    //   description: `${e} (服务器内部错误)`,
    // });
    // console.log(e.message);
  },
});
// 2. Plugins
app.use(createLoading());

app.model(require("./models/ListLeft"));
app.model(require("./models/ListRight"));
app.model(require("./models/ListOther"));

// 3. Model

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
