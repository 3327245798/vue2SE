module.exports = {
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    host: '0.0.0.0',
    port: 6103,
    client: {
      webSocketURL: 'ws://0.0.0.0:6103/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  publicPath:'./'
   
 
}
