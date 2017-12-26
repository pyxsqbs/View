export default {
  "entry": ["babel-polyfill", "src/index.js"],
  "publicPath": "/self-services/dist/",
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import", {"libraryName": "antd", "style": "css"}],
        "transform-react-jsx"
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime",
        ["import", {"libraryName": "antd", "style": "css"}],
        "transform-react-jsx"
      ]
    }
  },
  "proxy": {
    "/api": {
      "target": "http://47.93.123.185:5090/",
      "changeOrigin": true,
      "pathRewrite": {"^/api": ""},
      "secure": false
    },
    "/other": {
      "target": "https://sc.9fbank.com/",
      "changeOrigin": true,
      "pathRewrite": {"^/other": ""},
      "secure": false

    }
  }
}

