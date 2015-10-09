
// 用于控制app的life circle
var app = require('app');
// 用于创建本地窗口的模块
var BrowserWindow = require('browser-window');
// 把app的crash情况发送给服务器
require('crash-reporter').start();

// 保持一个全局的window对象引用，
// 如果你不这么做，window对象会在GC启动后被自动垃圾收集机制释放
var mainWindow = null;

// 在所有窗口关闭后关闭app
app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

// 这个方法会在Atom Shell初始化结束后调用回调函数
app.on('ready', function() {
  // 创建窗口
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // 加载index.html
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // 在窗口关闭时触发
  mainWindow.on('closed', function() {
      // 移除window对象的引用
      // 通常如果是多窗口的app，你需要把window对象存储到一个数组里面，而在close时把对应的window对象移除掉
    mainWindow = null;
  });
});
