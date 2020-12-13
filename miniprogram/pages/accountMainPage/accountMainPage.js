// miniprogram/pages/accountMainPage/accountMainPage.js
Page({

    data: {
      date:[],
      title:[],
      money:[],
      dateA:'',
      titleA:'',
      moneyA:'',
      dateB:'',
      titleB:'',
      moneyB:'',
      dateC:'',
      titleC:'',
      moneyC:'',
      dateD:'',
      titleD:'',
      moneyD:'',
      dateE:'',
      titleE:'',
      moneyE:'',


    },
    bindNewTap: function () {
        wx.navigateTo({//请求跳转
          url: '../new/new'
        })
      },
    account:function(){
    
      var that=this;
      wx.cloud.callFunction({
        name:"account",
        success:function(res){


          var date=[]
          var title=[]
          var money=[]

          var length=res.result.data.length
          for(var i=0;i<length;i++)
          {
            date.push(res.result.data[i].date);
            title.push(res.result.data[i].title);
            money.push(res.result.data[i].money);

          }
          that.setData({
            date:date,
            title:title,
            money:money,

          })

          var result00=res.result.data[0]
          var result01=res.result.data[1]
          var result02=res.result.data[2]
          var result03=res.result.data[3]
          var result04=res.result.data[4]
          that.setData({
            dateA:result00.date,
            moneyA:result00.money,
            titleA:result00.title,
            dateB:result01.date,
            moneyB:result01.money,
            titleB:result01.title,
            dateC:result02.date,
            moneyC:result02.money,
            titleC:result02.title,
            dateD:result03.date,
            moneyD:result03.money,
            titleD:result03.title,        
            dateE:result04.date,
            moneyE:result04.money,
            titleE:result04.title,     
          })

        }
      })

    },
  }

)
