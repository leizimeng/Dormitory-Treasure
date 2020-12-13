// miniprogram/pages/new/new.js

Page({
    



    data: {
        loadingStatus: false,
        date: '',
        money: '',
        title:'',
       
       
    },
    //日期选择
    bindDateChange: function (e) {
        this.setData({
          date: e.detail.value
        })
        
    },
    bindMoneyInput: function (e) {
        this.setData({
          money: e.detail.value
        })
      },
    bindTitleInput:function(e){
        this.setData({
            title:e.detail.value
        })
    },
    formSave:function(e){
        wx.navigateTo({//请求跳转
            url: '../accountMainPage/accountMainPage'
          })
        var db=wx.cloud.database()
        let outDate=e.detail.value.pickerDate//将输入的数据装入新的变量，使程序更简单易懂
        let outTitle=e.detail.value.inputTitle
        let outMoney=e.detail.value.inputMoney
        db.collection("result").get({
            success:function(res){
                console.log(res)                
                    db.collection("result").add({
                        data:{
                            date:outDate,
                            title:outTitle,
                            money:outMoney
                        },
                        success:function(res){
                            console.log(res)
                        }
                    })               
            }
        })
    }
    
 
})