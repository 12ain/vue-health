<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text="返回"
      right-text="回到首页"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
    />
  </div>
</template>

<script>
export default {
  props: {
    title: ""
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    onClickLeft() {
      // Toast('返回');
      this.$router.back(-1);
    },
    onClickRight() {
      // Toast('返回首页');
      this.$router.push("/");
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
/deep/ .van-nav-bar {
  background-color: #99cc99;
}
.van-nav-bar__text {
  color: black;
}
</style>
