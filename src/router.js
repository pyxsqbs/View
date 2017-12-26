import React from 'react';
import {Router, Route, IndexRoute} from 'dva/router';


import IndexPage from "./routes/IndexPage.js";


function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
    </Router>
  );
}

export default RouterConfig;
