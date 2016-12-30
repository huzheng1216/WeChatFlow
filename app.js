//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  requestData: function(f){
        wx.request({
      url: 'http://zhizi.inveno.com/q?scenario=6&app=h5chn&uid=01011605090956361601000210246501&tk=07f6e5b8c9d9e325c32939e23d39ef79&tm=1482997647200&lang=zh_CN&from=h5&pgn=1&num=10&csdk=1',
      method: 'POST',
      dataType: 'json',
      header: {
          'content-type': 'application/json',
          'Server': 'inveno'
      },
      success: function(res) {
        // console.log(res.data);
        // that.setData({
        //   response: res.data.data
        // })
        typeof f == "function" && f(res.data.data)
      },
    })
  }
})