<template>
  <div class="tab">
    <van-tabbar route fixed safe-area-inset-bottom active-color="#00d8a0" inactive-color="#000">
      <van-tabbar-item replace to="/index">
        首页
        <van-icon
          slot-scope="props"
          :class="props.active ? 'iconfont iconfont-active' : 'iconfont' "
          class-prefix="icon"
          name="shouye"
          size="8vw"
          slot="icon"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/addweight">
        体重记录
        <van-icon
          :class="props.active ? 'iconfont iconfont-active' : 'iconfont' "
          class-prefix="icon"
          name="tizhong"
          size="8vw"
          slot="icon"
          slot-scope="props"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/customfood">
        推荐饮食
        <van-icon
          :class="props.active ? 'iconfont iconfont-active' : 'iconfont' "
          class-prefix="icon"
          name="dingdan"
          size="8vw"
          slot="icon"
          slot-scope="props"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/minecenter">
        我的
        <van-icon
          :class="props.active ? 'iconfont iconfont-active' : 'iconfont' "
          class-prefix="icon"
          name="wode"
          size="8vw"
          slot="icon"
          slot-scope="props"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      active: 0
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.iconfont-active {
  color: #00d8a0;
}
.tab {
  margin-top: 60px;
}
</style>