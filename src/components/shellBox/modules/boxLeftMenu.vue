<template>
  <div class="top-left-meun main-bg" :class="{'iscollapse':!isCollapse}">
    <div class="logo center default-co">
      <span v-if="!isCollapse">瞎写的后台框架</span>
      <i class="el-icon-location" v-else></i>
    </div>
    <el-row class="tac">
      <el-col>
        <el-menu
          :default-active="menuActive"
          class="el-menu-vertical-demo"
          background-color="#07917D"
          :collapse="isCollapse"
          @select="select"
          text-color="#fff">
          <template v-for="(v,k) in isMenu">
            <router-link :to="v.path" v-if="!v.children" :key="k">
              <el-menu-item :index="v.index">
                <i class="el-icon-setting"></i>
                <span slot="title">{{v.name}}</span>
              </el-menu-item>
            </router-link>
            <el-submenu :index="v.index" v-else :key="k">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">{{v.name}}</span>
              </template>
              <router-link v-for="(item,key) in v.children" :key="key" :to="item.path">
                <el-menu-item :index="item.index">{{item.name}}</el-menu-item>
              </router-link>
            </el-submenu>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { menu } from './menuConfig'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'boxLeftMenu',
  data () {
    return {

    }
  },
  methods: {
    ...mapMutations(['changeTabs', 'positionCurrent']),
    select (indexPath) {
      if (indexPath.indexOf('-') !== -1) {
        let prefix = indexPath.split('')
        const arr = this.isMenu.filter(val => val.index === prefix[0])
        const childArr = arr[0].children.filter(val => val.index === indexPath)
        const params = {
          title: childArr[0].name,
          name: childArr[0].index,
          path: childArr[0].path
        }
        this.changeTabs(params)
        this.positionCurrent(params)
      } else {
        const arr = this.isMenu.filter(val => val.index === indexPath)
        const params = {
          title: arr[0].name,
          name: arr[0].index,
          path: arr[0].path
        }
        this.changeTabs(params)
        this.positionCurrent(params)
      }
    },
    getRoute () {
      let path = this.$route.path
      const newArr = []
      menu.forEach(val => {
        if (val.children) {
          val.children.forEach(item => {
            if (item.path === path) {
              newArr.push(item)
            }
          })
        } else {
          if (val.path === path) {
            newArr.push(val)
          }
        }
      })
      const params = {
        title: newArr[0].name,
        name: newArr[0].index
      }
      this.positionCurrent(params)
    }
  },
  created () {
    this.getRoute()
  },
  computed: {
    ...mapGetters(['isCollapse', 'menuActive']),
    isMenu () {
      return menu
    }
  }
}
</script>
<style lang="scss">
.top-left-meun{
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  .logo{
    width: 100%;
    height: 64px;
    line-height: 64px;
  }
  .el-col-12{
    width: 100%;
  }
  .el-menu{
    border: none;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
  }
  .el-submenu .el-menu-item{
    min-width: 180px;
  }
}

</style>
