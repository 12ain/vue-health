<template>
  <div>
    <van-nav-bar title="饮食推荐" fixed />
    <div class="main">
      <div class="main-bar">
        <div class="title">每日膳食结构</div>
        <div class="img">
          <img src="../assets/static/img/jzt.jpg" width="360" />
        </div>
      </div>
      <div class="main-cards">
        <div class="title">食谱推荐</div>
        <div class="card">
          <div class="card-title">
            <b>早餐</b>
            <span>385大卡</span>
          </div>
          <hr style="width:100%;" />
          <div class="card-item">
            <div class="left">
              <div class="img">
                <img src="../assets/logo.png" width="50" />
              </div>
              <div class="item">
                <div class="item-title">煮玉米棒</div>
                <div class="item-desc">145克</div>
              </div>
            </div>
            <div class="right">
              <span class="item-val">162</span>大卡
            </div>
          </div>
          <div class="card-item">
            <div class="left">
              <div class="img">
                <img src="../assets/logo.png" width="50" />
              </div>
              <div class="item">
                <div class="item-title">煮玉米棒</div>
                <div class="item-desc">145克</div>
              </div>
            </div>
            <div class="right">
              <span class="item-val">162</span>大卡
            </div>
          </div>
          <div class="change">
            <van-button type="primary" size="small">换一换</van-button>
          </div>
        </div>
        <div class="card">
          <div class="card-title">
            <b>午餐</b>
            <span>385大卡</span>
          </div>
          <hr style="width:100%;" />
          <div class="card-item">
            <div class="left">
              <div class="img">
                <img src="../assets/logo.png" width="50" />
              </div>
              <div class="item">
                <div class="item-title">煮玉米棒</div>
                <div class="item-desc">145克</div>
              </div>
            </div>
            <div class="right">
              <span class="item-val">162</span>大卡
            </div>
          </div>
          <div class="card-item">
            <div class="left">
              <div class="img">
                <img src="../assets/logo.png" width="50" />
              </div>
              <div class="item">
                <div class="item-title">煮玉米棒</div>
                <div class="item-desc">145克</div>
              </div>
            </div>
            <div class="right">
              <span class="item-val">162</span>大卡
            </div>
          </div>
          <div class="change">
            <van-button type="primary" size="small">换一换</van-button>
          </div>
        </div>
        <div class="card">
          <div class="card-title">
            <b>晚餐</b>
            <span>385大卡</span>
          </div>
          <hr style="width:100%;" />
          <div class="card-item">
            <div class="left">
              <div class="img">
                <img src="../assets/logo.png" width="50" />
              </div>
              <div class="item">
                <div class="item-title">煮玉米棒</div>
                <div class="item-desc">145克</div>
              </div>
            </div>
            <div class="right">
              <span class="item-val">162</span>大卡
            </div>
          </div>
          <div class="card-item">
            <div class="left">
              <div class="img">
                <img src="../assets/logo.png" width="50" />
              </div>
              <div class="item">
                <div class="item-title">煮玉米棒</div>
                <div class="item-desc">145克</div>
              </div>
            </div>
            <div class="right">
              <span class="item-val">162</span>大卡
            </div>
          </div>
          <div class="change">
            <van-button type="primary" size="small">换一换</van-button>
          </div>
        </div>
        <div class="card">
          <div class="card-title">
            <b>晚餐</b>
            <span>385大卡</span>
          </div>
          <hr style="width:100%;" />
          <div class="card-item">
            <div class="left">
              <div class="img">
                <img src="../assets/logo.png" width="50" />
              </div>
              <div class="item">
                <div class="item-title">煮玉米棒</div>
                <div class="item-desc">145克</div>
              </div>
            </div>
            <div class="right">
              <span class="item-val">162</span>大卡
            </div>
          </div>
          <div class="card-item">
            <div class="left">
              <div class="img">
                <img src="../assets/logo.png" width="50" />
              </div>
              <div class="item">
                <div class="item-title">煮玉米棒</div>
                <div class="item-desc">145克</div>
              </div>
            </div>
            <div class="right">
              <span class="item-val">162</span>大卡
            </div>
          </div>
          <div class="change">
            <van-button type="primary" size="small">换一换 </van-button>
          </div>
        </div>
        <div class="card">
          <div class="card-title">
            <b>晚餐</b>
            <span>385大卡</span>
          </div>
          <hr style="width:100%;" />
          <div class="card-item">
            <div class="left">
              <div class="img">
                <img src="../assets/logo.png" width="50" />
              </div>
              <div class="item">
                <div class="item-title">煮玉米棒</div>
                <div class="item-desc">145克</div>
              </div>
            </div>
            <div class="right">
              <span class="item-val">162</span>大卡
            </div>
          </div>
          <div class="card-item">
            <div class="left">
              <div class="img">
                <img src="../assets/logo.png" width="50" />
              </div>
              <div class="item">
                <div class="item-title">煮玉米棒</div>
                <div class="item-desc">145克</div>
              </div>
            </div>
            <div class="right">
              <span class="item-val">162</span>大卡
            </div>
          </div>
          <div class="change">
            <van-button type="primary" size="small">换一换 </van-button>
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
  name: "Customfood",
  components: {
    Tabbar
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.main {
  .main-bar {
    .title {
      font-size: 18px;
      font-weight: bold;
      line-height: 50px;
      height: 50px;
      margin: auto 10px;
    }
    .img {
      text-align: center;
      margin: auto 10px;
    }
  }
  .main-cards {
    .title {
      font-size: 18px;
      font-weight: bold;
      line-height: 50px;
      margin: auto 10px;
    }
    .card {
      display: flex;
      flex-wrap: wrap;
      // height: 60px;
      margin: 15px 10px;
      border: 1px solid #fff;
      border-radius: 5px;
      box-shadow: 0px 2px 3px 2px rgba(100, 100, 100, 100);
      .change {
        width: 100%;
        line-height: 15px;
        margin: 5px 5px;
        text-align: center;
      }
      .card-title {
        display: inline-flex;
        width: 100%;
        align-self: center;
        line-height: 45px;
        height: 45px;
        font-size: 18px;
        padding: 0 10px;
        justify-content: space-between;
        span {
          color: #00d8a0;
        }
      }
      .card-item {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        margin: 2px 10px;
        width: 100%;
        align-items: center;
        .left {
          display: flex;
          flex-direction: row;
          .item {
            flex-direction: column;
            margin-left: 10px;
            align-self: center;
            .item-title {
              padding: 5px;
            }
            .item-desc {
              font-size: 14px;
              color: dimgray;
              padding: 5px;
            }
          }
          .img {
            padding: 5px;
            img {
              border: 1px solid #ff0;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
}
</style>
