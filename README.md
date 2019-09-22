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
# 1. 创建Cordova项目
$ 控制台输入: cordova create zeta com.zetatest.demo zeta;
 · zeta是项目名, com.zetatest.demo即android的包名，ios的bundle id; zeta为安装app的名称;
 ·  等待命令执行完毕后, 接着输入: npm i安装cordova项目相关依赖;
$ 删除 zeta/www 目录下的css、img、js文件夹;

# 2 创建vue项目
$ 进入zeta项目的根目录下，在控制台输入: vue init webpack vue-zeta, 然后一路选Y即可;
·  cd到vue-zeta目录下, 接着输入:npm i 安装vue-zeta项目相关依赖;

3 修改vue项目配置
#
$

4 浏览器调式
#
$

5 打包apk
#
$

6 打包ipa
#
$

```

### 结语

按照上述的步骤，cordova + vue 的环境搭建，开发调式以及打包流程已经全部完成。请开始你的表演～
