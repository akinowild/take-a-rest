// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    // counts: [63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    loginStatus:true,
    roger:true,
  },
  handlePhone(){
    this.setData({
      loginStatus:!this.data.loginStatus
    })
  },
  openModel(){
    wx.showModal({
      title: '温馨提示',
      content: '请您仔细阅读并充分理解相关条款，点击同意即代表您已阅读并同意《用户协议》与《隐私声明》',
      complete: (res) => {      
        if (res.confirm) {
          this.setData({
            roger:true
          })
        }
      }
    })
  },
  checkboxChange(e){
    if(e.detail.value[0]==="roger"){
      this.setData({
        roger:true
      })
    }else{
      this.setData({
        roger:false
      })
    }
  },
  onLoad() {
  }
})
