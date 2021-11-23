const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {
    app.use(
      createProxyMiddleware(['/login/','/user/','/naga/'],{
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      })
    );
    
  };

  // module.exports = function(app) {
  //   app.use(
  //     '/userupdate',
  //     createProxyMiddleware({
  //       target: "https://hbo9761oh2.execute-api.ap-northeast-3.amazonaws.com",
  //       changeOrigin: true,
  //     })
  //   );
    
  // };

  //  "https://hbo9761oh2.execute-api.ap-northeast-3.amazonaws.com"
