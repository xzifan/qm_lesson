// miniprogram/pages/add/add.js
const db = wx.cloud.database();
const photos = db.collection('photos')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  upload:function(){
    wx.chooseImage({
      count:4,	// 默认为9
      sizeType: ['original', 'compressed'],	// 指定原图或者压缩图
      sourceType: ['album', 'camera'],	// 指定图片来源
      success: function(res) {
        console.log(res)
        var tempFilePaths = res.tempFilePaths;
        for (let i = 0; i < tempFilePaths.length; i++) {
          let randString = Math.floor(Math.random()*100000)+".png";
          wx.cloud.uploadFile({
            cloudPath:randString,
            filePath: tempFilePaths[i],
            success:res=>{
              // console.log(res);
              photos.add({
                data:{
                  image:res.fileID
                }
              }).then(res=>{
                wx.showToast({
                  title: '上传成功',
                  icon: 'success'
                })
              })
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})