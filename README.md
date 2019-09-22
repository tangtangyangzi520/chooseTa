# zeta

zeta 是一款全新的交友 app，功能有语音聊天，红包等功能～
使用 vue+cordova 开发

# Cordova+Vue 基础环境搭建步骤

- 相关环境安装
  - node
  - Cordova
  - Vue & vue-cli
  - webpack
  - Android Studio
  - Xcode
  - IDEA(非必需)

### 环境搭建

```
# 安装node
$ node官网: https://nodejs.orj/en/ 下载对应PC平台的安装包;或者使用node包管理工具nvm安装

# 安装Vue (这里安装的是2.x.x版本)
$ 控制台输入: npm install -g vue; 输入: vue --version,输出: 2.x.x,则表示vue安装成功。
# 安装vue-cli(这里安装的是2.x.x版本)
$ 控制台输入: npm install -g vue-cli; 输入:vue cli -V,输出: 2.x.x,则表示vue-cli安装成功。

至此，上面已经安装好一个Cordova+Vue的相关环境，下面可以开始创建一个Demo项目了。

# 安装java jdk
$ 官网: http://java.sun.com/javase/downloads/index.jsp, 找到1.8.0系列下载对应平台的安装包
# 配置环境变量:
$ JAVA_HOME:D:\Java\jdk1.8.0_91
$ PATH:%JAVA_HOME%\bin CLASSPATH:.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar 具体配置请百度
$ Max OS上Java环境变量配置
 · Step 1 终端输入/usr/libexec/java_home查看jdk目录，我的电脑输出 /Library/Java/JavaVirtualMachines/jdk1.8.0_171.jdk/Contents/Home;
 cd ~vi .bash_profile
 vi 命令基本使用 https://www.cnblogs.com/fanxiaocong/p/7070130.html

# 安装Android Studio(也可单独安装SDK和gradle)
$ 官网: 进入http://www.android-studio.org/,选择AndroidStudio 3.0版本下载安装;
$ 具体安装教程:https://www.cnblogs.com/xiadewang/p/7820377.html
# 配置环境变量:
$ ANDROID_HOME:C:\Users\xxxxx\ASSDK1.5(SDK路径)
$ PATH:C:\Users\xxxxx\gradle\gradle-4.1\bin(gradle路径)

# 安装xcode(打包ios必需)
$ 打开AppStore, 搜索Xcode下载,点击安装,安装需要AppleID账号。安装完成后,在launchpad中可以找到。

# IDEA安装(非必需)
```

### 项目搭建

```
1. 创建Cordova项目
 · 控制台输入: cordova create zeta com.zetatest.demo zeta;
 · zeta是项目名, com.zetatest.demo即android的包名，ios的bundle id; zeta为安装app的名称;
 · 等待命令执行完毕后, 接着输入: npm i安装cordova项目相关依赖;
 · 删除 zeta/www 目录下的css、img、js文件夹;

2 创建vue项目
 · 进入zeta项目的根目录下，在控制台输入: vue init webpack vue-zeta, 然后一路选Y即可;
 · cd到vue-zeta目录下, 接着输入:npm i 安装vue-zeta项目相关依赖;

3 修改vue项目配置
  · 找到zeta/vue-zeta/config/index.js文件修改相关配置
  · 这样vue项目用webpack打包生成的www目录会指向Cordova项目的www目录，vue项目打包后的静态资源替代cordova的前端资源。
  · path.resolve(__dirname, '../dist/index.html') 改为 path.resolve(__dirname, '../../www/index.html');
  · path.resolve(__dirname, '../dist') 改为 path.resolve(__dirname, '../../www');
  · assetsPublicPath: '/' 改为 assetsPublicPath: './'

  · 找到zeta/vue-zeta/build/utils.js文件修改相关配置
  · 找到fallback: 'vue-style-loader'在后面添加 publicPath: '../../'这样的一段
  · 接着在zeta/vue-zeta目录下, 执行: npm run build;在zeta/www/目录下生成static目录和index.html;
  · 双击index.html, 可以看到运行的是vue项目的页面;

4 浏览器调式
  · 在zeta/vue-zeta目录下, 执行: npm run dev;
  · 复制下图的地址，在浏览器打开，即可开始调式;
  · 只要修改vue项目里的vue文件，即可触发浏览器的刷新，修改效果会立刻在浏览器上更新，相对于原生的开发调式，效率高很多。
  · vue开发阶段浏览器试可下载vue官方提供的浏览器插件调试即可;

5 打包apk/ipa
  · 在zeta根目录下, 执行: cordova platform add android/ios 添加相关平台;
  · 具体操作请百度相关步骤;
```

### 结语

按照上述的步骤，cordova + vue 的环境搭建，开发调式以及打包流程已经全部完成。请开始你的表演～

### Cordova 相关插件

- 消息推送: cordova-plugin-local-notification
  · 参考文章：https://www.imooc.com/article/27709
  · 参考文章：https://blog.csdn.net/m0_37603385/article/details/92796797

- 热更新: add cordova-hot-code-push-plugin
  · cordova-hot-code-push-cli 用于编译项目文件，生成对应的 hash 码
  · 参考文章：https://www.imooc.com/article/26119

- 启动页插件和状态栏: cordova-plugin-splashscreen/cordova-plugin-statusbar
  · 参考文章：https://juejin.im/post/5c91d56de51d45397e3d0075
  · 参考文章：https://juejin.im/post/5ce838cee51d4510803ce334

- 打开本地文件: cordova-plugin-file-opener2
  · 参考文章：https://juejin.im/post/5cdacca9f265da03a00ff375

- 开发 app-webview 遇到的 ios 兼容性解决方案
  · 参考文章：https://juejin.im/post/5bfbac54e51d450d566f22c1

### Cordova 相关命令汇总收集

```
· 查看是否满足构建cordova环境：cordova requirements
· 查看模拟器列表 cordova run --list
· 运行环境 cordova run ios/android
· 打包环境 cordova build ios/android
```

### 其他

- Cordova 开发 IOS-部分权限配置

```
Xcode打开IOS项目
在项目总目录中找到Resources/<项目名>-info.plist文件
右键选择Open As Source Code
在<dict></dict>节点输入以下内容
<key>NSPhotoLibraryUsageDescription</key>
<string>App需要您的同意,才能访问相册</string>
<key>NSCameraUsageDescription</key>
<string>App需要您的同意,才能访问相机</string>
<key>NSMicrophoneUsageDescription</key>
<string>App需要您的同意,才能访问麦克风</string>
<key>NSLocationUsageDescription</key>
<string>App需要您的同意,才能访问位置</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>App需要您的同意,才能在使用期间访问位置</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>App需要您的同意,才能始终访问位置</string>
<key>NSCalendarsUsageDescription</key>
<string>App需要您的同意,才能访问日历</string>
<key>NSRemindersUsageDescription</key>
<string>App需要您的同意,才能访问提醒事项</string>
<key>NSMotionUsageDescription</key>
<string>App需要您的同意,才能访问运动与健身</string>
<key>NSHealthUpdateUsageDescription</key>
<string>App需要您的同意,才能访问健康更新</string>
<key>NSHealthShareUsageDescription</key>
<string>App需要您的同意,才能访问健康分享</string>
<key>NSBluetoothPeripheralUsageDescription</key>
<string>App需要您的同意,才能访问蓝牙</string>
<key>NSAppleMusicUsageDescription</key>
<string>App需要您的同意,才能访问媒体资料库</string>
```

- Cordova 一些问题和使用：https://juejin.im/post/5aa78ff4518825558a064a15
