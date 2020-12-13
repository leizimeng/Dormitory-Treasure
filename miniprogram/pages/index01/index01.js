// miniprogram/pages/index01/index01.js
Page({
    data: {

    },
    bindLight:function(){
        wx.navigateTo({//请求跳转
            url: '../light/light'
          })
    },
    bindEnvironment:function(){
        wx.navigateTo({
          url: '../air/air',
        })
    },
    bindAccountMainPage:function(){
        wx.navigateTo({
            url:'../accountMainPage/accountMainPage'
        })
    }
    
})