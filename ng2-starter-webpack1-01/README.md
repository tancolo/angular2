# ng2-starter-webpack1-01
This is a basic webpack config.

About the detail of the webpack,Please reference these articles

[Angular2开发基础之TSC编译](http://www.jianshu.com/p/b12ccfdfb0c1)

[Angular2开发基础之Webpack](http://www.jianshu.com/p/4b4264f045b7)

# How to run
1) **npm install**

2) **npm run serve**
http://localhost:8080/ 查看效果

3) **npm run build**
编译到dist目录，其中 `app.bundle.js` 以及`index.html`如何自动拷贝到`dist`中，参考文章: [Angular2开发基础之Webpack](http://www.jianshu.com/p/4b4264f045b7)

4) **npm run build:prod**
编译到dist目录，文件大小有明显压缩，参考文章: [Angular2开发基础之Webpack](http://www.jianshu.com/p/4b4264f045b7)


# About package.json
依赖包版本，没有使用 `^`,`~`等符号，使用固定版本号，防止`npm install`后导致依赖包，相互不一致情况。

## script
```
        "build": "webpack --progress",
        "build:prod": "webpack -p --progress",
        "postinstall": "typings install",
        "serve": "webpack-dev-server --inline --progress"
```
基本含义自行google.


# About webpack.config.js
```
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.component.ts$/, loader: 'ts!angular2-template' },
            { test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: 'raw' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
```
[Angular2开发基础之Webpack](http://www.jianshu.com/p/4b4264f045b7) 有详细说明！

## About loader 
```
            { test: /\.component.ts$/, loader: 'ts!angular2-template' },
            { test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts' },
```
区别是*.component.ts有可能包含html template, 而不是简单的
```
template: `<h1>Hello World!</h1>`
```
而main.ts， vendor.ts（后续会介绍）是没有html模板的, 当然，可以只用一行替代：不考虑有没有html模板语句
```
 { test: /\.ts$/, loader: 'ts!angular2-template' },
```

# Component 结构
典型的Component结构是 xxx.component.html, xxx.component.css
```
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    stylesUrl: ['./app.component.css']
})
```

# typings.d.ts
`declare function require(id: string): any;`
解决， 编译过程中出现 Can not find 'require' 问题。
https://github.com/angular/angular-cli/issues/2221



















