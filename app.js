'use strict'

var Koa = require('koa')
var path = require('path')
var wechat = require('./wechat/g')
var util = require('./libs/utils')
var wechat_file = path.join(__dirname,'./config/wechat.txt')
var config = {
    wechat:{
        appID : 'wx18eee27f34fe9e81',
        appSecret : '82cbb89295bb15d8b21046a96d47c033',
        token : '123450123450',
        getAccessToken: function() {
            return util.readFileAsync(wechat_file)
        },
        saveAccessToken: function(data){
            data = JSON.stringify(data)
            return util.writeFileAsync(wechat_file,data)
        }
    }
}

var app = new Koa()
app.use(wechat(config.wechat))

app.listen(8101)
console.log('listening:8101')