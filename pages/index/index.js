//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '巫妖王列表：',
    userInfo: {},
    list:{},
    response: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  scroll_tap: function(){
    wx.navigateTo({
      url: '../home/home'
    })
  },
  lower: function(e){
    var that = this;
    app.requestData(function(data){
      var d = that.data.response.concat(data);
      that.setData({
        response:d
      })
    })
  },
  request_tap: function(){
    var that = this;
    app.requestData(function(data){
      that.setData({
        response:data
      })
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
