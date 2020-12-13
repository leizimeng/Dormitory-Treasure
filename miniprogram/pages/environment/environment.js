
Page({
  data: {

  },
  //跳转到天气页面
  navigate: function() {
      wx.navigateTo({
          url: '../air/air',
      })
  }
})