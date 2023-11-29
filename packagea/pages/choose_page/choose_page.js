// packagea/pages/choose_page/choose_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    title:["开始记录生活后，我治愈了我自己","每天一个人独来独往，没有朋友，我该如何对抗孤独？","摸摸头，你已经很棒了","开心一点，你没有自己想象得那么糟糕","抑郁症是不是真的治不好？开朗的人就不会抑郁？","别让负面情绪主导你，你才是你自己的主人"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      index: 2*Number(options.index)
    })
    console.log(this.data.index)
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