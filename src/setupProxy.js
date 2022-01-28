const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/rest',
        createProxyMiddleware({
          target: 'https://tododatabase-4477.restdb.io/',
          changeOrigin: true,
        })
      );
};