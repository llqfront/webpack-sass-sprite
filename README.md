# webpack-sass-sprite
webpack sass less 编译  如何使用背景图合并 sprite 使用jdf 配合使用
用 npm 安装 Webpack：（需要安装node与jdf所使用相同）
### 一、安装命令：
* $ npm install webpack -g
* 如果需要使用 Webpack 开发工具，要单独安装：
### 二、安装webpack-dev-server
* $ npm install webpack-dev-server -g
### 三、进入目录 安装
* $ npm install 

### 四、打包：
* webpack
### 五、启服务：
* webpack-dev-server
### 六、样式引入
* 1、entry.js:  equire('../css/index.scss')  保留
* 2、页面样式引入<link rel="stylesheet" href="./bundle/css/index.css">

==========
### 一、如果页面需要背景图合并
* 则需要安装：jdf
* $ npm install jdf -g
### 二、进入目录
* cd dev
### 三、启服务
* jdf b -open
### 四、样式引入 
* 1、entry.js:  equire('../css/index.scss')  注释掉
* 2、页面样式引入<link rel="stylesheet" href="./bundle/css/index.css">
----
####我们使用jdf 只是做了sass 编译 背景图合并 其他的还是webpack 独立完成
* [jdf](https://github.com/putaoshu/jdf)
* [jdf csssprite](https://github.com/putaoshu/jdf/blob/master/doc/a_tool_csssprite.md)
