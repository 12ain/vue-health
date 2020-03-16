<template>
  <div>
    <van-nav-bar title="今日记录" fixed />
    <div class="main">
      <div class="content">
        <div class="content-top">
          <div class="content-top-item">
            今日步数
            <div class="content-top-item-font">{{num}}步</div>
          </div>
          <div class="content-top-item">
            已摄入
            <div class="content-top-item-font">{{num}}卡路里</div>
          </div>
          <div class="content-top-item">
            已消耗
            <div class="content-top-item-font">{{num}}卡路里</div>
          </div>
        </div>
        <div>
          <div class="uni-flex-item">
            计划完成度
            <van-progress :percentage="90" color="#00d8a0" />
          </div>
        </div>
        <div class="uni-padding-wrap uni-common-mt">
          <div class="uni-common-mt">
            <h4>饮食记录</h4>
            <div class="uni-flex-item uni-column">
              <div class="uni-table">
                早餐
                <div>建议摄入{{data}}大卡</div>
                <button type="primary" class="btn">+</button>
              </div>
              <div class="uni-ul">
                <button class="uni-btn-v">
                  营养金字塔
                  <svg
                    t="1583595925044"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3323"
                    width="25"
                    height="25"
                  >
                    <path
                      d="M468.9 497.8V76.6l258.3 277.8-258.3 143.4z m0-421.2L252.4 360.2l216.5 137.6V76.6z m0 0M116.6 535.1L18.8 661.9l447 284V757.7L116.6 535.1z m351 220.8v188.2l539-288.9-122.3-130.4-416.7 231.1z m0 0"
                      p-id="3324"
                      fill="#2c2c2c"
                      data-spm-anchor-id="a313x.7781069.0.i6"
                      class="selected"
                    />
                    <path
                      d="M219.9 399.6L150 490.2l317.8 201.9V557.7L219.9 399.6z m248.2 158.1v134.5l382.6-204.8-87.6-93.4-295 163.7z m0 0"
                      p-id="3325"
                      fill="#00d8a0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="uni-padding-wrap uni-common-mt">
          <div class="uni-common-mt">
            <h4>运动记录</h4>
            <div class="uni-flex-item uni-column">
              <div class="uni-table">
                运动
                <div>建议消耗{{data}}大卡</div>
                <button type="primary" class="btn">+</button>
              </div>
              <div class="uni-ul">
                <button class="uni-btn-v">
                  燃烧我的卡路里
                  <van-icon class="iconfont" class-prefix="icon" name="kaluli" size="8vw" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "../components/Tabbar";
export default {
  name: "Index",
  components: {
    Tabbar
  },
  data() {
    return {
      num: "123",
      data: "2",
      span: "hello"
    };
  }
};
</script>
<style lang="scss" scoped>
.main {
  padding: 0 10px;
}
.content-top {
  display: flex;
  text-align: center;
  background: white;
  padding: 35px;
  justify-content: space-around;
  .content-top-item {
    font-size: 15px;
    .content-top-item-font {
      color: #00d8a0;
      font-size: 15px;
      margin: 15px 0;
    }
  }
}
.uni-row .uni-flex-item {
  text-align: center;
}
.uni-common-mt .uni-common-mt .uni-column {
  // display: flex;
  padding: 15px 15px 0px 15px;
  border-radius: 10px;
  border: 3px solid #fff;
  box-shadow: 0px 2px 3px 2px rgba(100, 100, 100, 100);
}
.btn {
  margin: -45px 0px 0px 260px;
  width: 50px;
  height: 50px;
  background: #00d8a0;
  border-radius: 50%;
  border: 3px solid #fff;
  // box-shadow: 0 -2px 3px rgba(100,100,100,.4);
}
.uni-table {
  border-bottom: solid 1px;
}
.uni-ul .uni-btn-v {
  width: 280px;
  // height: 30px;
  line-height: 30px;
  border: solid 1px #00d8a0;
  border-radius: 5px;
  margin: 10px auto 15px auto;
}
.uni-ul .uni-btn-v image {
  width: 22px;
  height: 22px;
}
</style>
