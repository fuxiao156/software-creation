// pages/new/new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mask:"mask",
    text:"啊啊啊手动阀打发士大夫啊手动阀打发士大夫啊手动阀打发士大夫啊手动阀打发士大夫啊手动阀打发士大夫手动阀打发士大夫啊啊手动阀打发士大夫啊手动阀打发士大夫啊手动阀打发士大夫啊手动阀打发士大夫啊手动阀打发士大夫手动阀打发士大夫啊啊手动阀打发士大夫啊手动阀打发士大夫啊手动阀打发士大夫啊手动阀打发士大夫啊手动阀打发士大夫手动阀打发士大夫啊啊手动阀打发士大夫啊手动阀打发士大夫啊手动阀打发士大夫啊手动阀打发士大夫啊手动阀打发士大夫手动阀打发士大夫啊手动阀打发士大夫啊手动阀打发士大夫啊手动阀打发士大夫啊手动阀打发士大夫啊手动阀打发士大夫手动阀打发士大夫",
  },

  hide_detail:function(){
    this.setData({
      mask:"hide"
    })
  },

  exit:function(){
    wx.exitMiniProgram({ })
  },

  notready: function(){
    wx.showToast({
      title: '正在开发中ψ(｀∇´)ψ',
      icon:"none",
      duration: 1e3
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})