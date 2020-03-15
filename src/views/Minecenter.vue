<template>
  <div>
    <van-nav-bar title="个人中心" fixed />
    <div class="main center">
      <div class="logo" @click="goLogin" :hover-class="!login ? 'logo-hover' : ''">
        <!-- <img class="logo-img" :src="login ? uerInfo.avatarUrl : '../assets/logo.png'"> -->
        <img class="logo-img" src="../assets/static/img/logo.png" />
        <div class="logo-title">
          <div class="logo-item">
            <div class="uer-name">{{login ? uerInfo.name : '您未登录'}}</div>
            <span class="uer-day">距离完成目标还差{{login ? uerInfo.day+'天' : '一步登录哦'}}</span>
          </div>
          <span class="go-login navigat-arrow" v-if="!login">&#xe65e;</span>
        </div>
      </div>
      <div class="info">
        <div class="info-tab">
          <div class="info-title">我的BMI</div>
          <div class="info-value">
            <span>20.3</span>
            <span>kg</span>
          </div>
        </div>
        <div class="info-img">
          <img src="../assets/static/img/timg.jpeg" width="100%" />
        </div>
        <div class="info-tab">
          <div class="info-title">我的体重</div>
          <div class="info-value">
            <span>48.8</span>
            <span>kg</span>
          </div>
        </div>
        <div class="info-tab">
          <div class="info-title">我的身高</div>
          <div class="info-value">
            <span>160</span>
            <span>cm</span>
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
  name: "Minecenter",
  components: {
    Tabbar
  },
  created() {},
  data() {
    return {
      login: false,
      // login: true,
      uerInfo: {
        name: "Helloworld",
        avatarUrl: "",
        day: 12
      }
    };
  },
  methods: {
    goLogin() {
      // if (!this.login) {
      // 	console.log("点击前往登录")
      this.login = !this.login;
      // }
    }
  }
};
</script>
<style lang="scss" scoped>
@font-face {
  font-family: texticons;
  font-weight: normal;
  font-style: normal;
  src: url("https://at.alicdn.com/t/font_984210_5cs13ndgqsn.ttf")
    format("truetype");
}
.info {
  display: flex;
  width: 100%;
  flex-direction: column;
  .info-tab {
    margin: 2px 2px;
    padding: 5px 5px;
    .info-title {
      margin-right: 100px;
      font-size: 20px;
    }
    .info-value {
      line-height: 80px;
      font-size: 20px;
    }
  }
}
.center {
  flex-direction: column;
}

.logo {
  // width: 750px;
  display: inline-flex;
  height: 120px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: #00d8a0;
  flex-direction: row;
  align-items: center;
}
.logo-hover {
  opacity: 0.8;
}

.logo-img {
  width: 80px;
  height: 80px;
  border-radius: 80px;
  // border: 1px solid;
}

.logo-title {
  display: inline-flex;
  height: 80px;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 20px;
}

.uer-name {
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  color: #ffffff;
}

.go-login.navigat-arrow {
  font-size: 20px;
  color: #ffffff;
}

.login-title {
  height: 150px;
  align-items: self-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
}
.logo-item {
  flex-direction: column;
  .uer-day {
    color: white;
  }
}
.navigat-arrow {
  height: 90px;
  width: 40px;
  line-height: 90px;
  font-size: 20px;
  color: #555;
  text-align: right;
  font-family: texticons;
}
.info-img {
}
</style>
