module.exports = {
  // publicPath默认是/，根据项目实际需要调整
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  productionSourceMap: false,
  devServer: {
    // openPage: "#/signin",
    port: 8081, // 配置端口号
    // 配置代理
    proxy: {
      "/": {
        ws: false,
        target: "http://chat.aihack.club/",
        changeOrigin: true,
      },
    },
  },
};
