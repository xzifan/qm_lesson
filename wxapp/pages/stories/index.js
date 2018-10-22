const app = getApp()

Page({
  data: {
    stories:[],
    currentVid:null,
    currentVideo:null
  },
  // 生命周期
  onLoad(options) {
    
    this.setData({
      stories: app.globalData.stories
    })
  },
  play(e){
    if(this.data.currentVid !==null){
      this.data.currentVideo.pause();
    }
    const vid = e.currentTarget.dataset.vid;
    const currentVideo = wx.createVideoContext(`${vid}`);
    currentVideo.play();
    this.setData({
      currentVid : vid,
      currentVideo
    })
  }
});