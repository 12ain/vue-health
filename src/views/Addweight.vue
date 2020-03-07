<template>
  <div>
    <van-nav-bar title="添加体重" />
    <div class="content">
      <div class="content-top">
        <van-button class="van-button active" type="pirmary">7天</van-button>
        <van-button class="van-button" type="pirmary">30天</van-button>
        <van-button class="van-button" type="pirmary">全部</van-button>
      </div>
      <div class="content-pic"></div>
      <div class="content-tab">
        <div class="content-tab-item">
          <span class="title">记录天数</span>
          <span class="content">7</span>
        </div>
        <div class="content-tab-item">
          <span class="title">体重变化</span>
          <span class="content">-5.0</span>
        </div>
        <div class="content-tab-item">
          <span class="title">日均变化</span>
          <span class="content">-1.7</span>
        </div>
        <div class="content-tab-item">
          <span class="title">最高体重</span>
          <span class="content">99.5</span>
        </div>
        <div class="content-tab-item">
          <span class="title">最低体重</span>
          <span class="content">89</span>
        </div>
        <div class="content-tab-item">
          <span class="title">平均体重</span>
          <span class="content">94.6</span>
        </div>
      </div>
    </div>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "../components/Tabbar";
export default {
  name: "Addweight",
  components: {
    Tabbar
  }
};
</script>
<style lang="scss" scoped>
.content-top {
  display: flex;
  margin-top: 15px;
  justify-content: space-around;
  .van-button {
    font-size: 15px;
    line-height: 25px;
  }
  .active {
    background-color: #00d8a0;
    color: white;
  }
}
.content-pic {
  display: flex;
  margin-top: 20px;
  height: 300px;
  border: 1px solid #000000;
}
.content-tab {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  width: 100%;
  .content-tab-item {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    flex: 0 0 33%;
    border: 1px 0 solid #000000;
    padding: 20px;
    .title {
      color: #8c8c8c;
      font-size: 20px;
    }
    .content {
      color: #333333;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
