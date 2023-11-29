// packagea/pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score:[0,0,0,0,0,0,0,0,0],
    result_arr:["没有抑郁","轻度抑郁","中度抑郁","中重度抑郁","重度抑郁"],
    advice_arr:["无","观察等待：随访时重复PHQ-9","制定治疗计划，考虑咨询，随访或药物治疗","积极药物治疗或心理治疗","首先选择药物治疗，若严重损伤或治疗无效，建议转移至精神疾病专家进行心理治疗或综合治疗"],
    status:0,
    mask:"hide"
  },

  change_val:function(e){
    let index=e.target.dataset.index
    var temp = "score["+index+"]"
    this.setData({
      [temp]:e.detail.value
    })
  },

  summit:function(){
    var sum=0
    for(var i=0;i<9;i++)
    {
      if(this.data.score[i]==0)
        continue
      else if(this.data.score[i]==1)
        sum++
      else if(this.data.score[i]==2)
        sum+=2
      else
        sum+=3
    }
    if(sum<5)
    {
      this.setData({
        status:0
      })
    }
    else if(sum<10)
    {
      this.setData({
        status:1
      })
    }
    else if(sum<15)
    {
      this.setData({
        status:2
      })
    }
    else if(sum<20)
    {
      this.setData({
        status:3
      })
    }
    else
    {
      this.setData({
        status:4
      })
    }

    this.setData({
      mask:"mask"
    })
  },

  hide_detail:function(){
    this.setData({
      mask:"hide"
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