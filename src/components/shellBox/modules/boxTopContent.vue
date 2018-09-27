<template>
  <div class="top-top-content default-bg" :class="{'box-top-active':isCollapse}">
    <div class="shrink center left" @click="shrink">
      <i class="iconfont icon-caidan color"></i>
    </div>
    <div class="right-state right">
      <div class="left">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-tixing"></i>
      </div>
      <div class="right">
        <a href="#"></a>
        <el-dropdown class="right">
          <span class="el-dropdown-link">
            欢迎<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改信息</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'boxTopContent',
  data () {
    return {

    }
  },
  methods: {
    ...mapMutations(['changeCollapse']),
    shrink () {
      this.changeCollapse()
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.HomeStore.isCollapse
    }
  }
}
</script>
<style lang="scss">
.top-top-content{
  position: absolute;
  top: 0px;
  left: 0px;
  height: 64px;
  width: 100%;
  transition: all 0.5s;
  padding-left: 180px;
  padding-right: 20px;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  .shrink{
    width: 50px;
    height: 100%;
    line-height: 64px;
    cursor: pointer;
  }
  .right-state{
    width: 300px;
    height: 100%;
    line-height: 64px;
    .left{
      &>i{
        font-size: 20px;
        margin-left: 30px;
        cursor: pointer;
      }
    }
    &>div:nth-child(2){
      width: 140px;
      height: 100%;
      line-height: 64px;
      a{
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #a6dbff;
        vertical-align: middle;
        margin-right: 10px;
        cursor: pointer;
      }
      .el-dropdown{
        width: 75px;
      }
    }
  }
}
.box-top-active{
  padding-left: 64px;
}
</style>
