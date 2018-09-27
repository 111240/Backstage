<template>
  <div class="header">
    <boxLeftMenu />
    <boxTopContent />
    <div class="content-box" :class="{'content-box-active':isCollapse}">
      <el-tabs v-model="activeName" type="card" closable @tab-click="changeTabs" @tab-remove="remove">
        <el-tab-pane
          v-for="(item, index) in tabsList"
          :key="index"
          :label="item.title"
          :name="item.title">
        </el-tab-pane>
      </el-tabs>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import boxLeftMenu from './modules/boxLeftMenu'
import boxTopContent from './modules/boxTopContent'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Head',
  data () {
    return {

    }
  },
  methods: {
    ...mapMutations(['changeMenuActive', 'removeTabs']),
    changeTabs (tab) {
      const arr = this.tabsList.filter(val => tab.name === val.title)
      this.$router.history.push(arr[0].path)
      this.changeMenuActive(arr[0].name)
    },
    remove (tab) {
      this.removeTabs(tab)
      this.$router.history.push(this.delPath)
    }
  },
  components: {
    boxLeftMenu,
    boxTopContent
  },
  computed: {
    ...mapGetters(['activeName', 'tabsList', 'isCollapse', 'delPath'])
  }
}
</script>
<style lang="scss">
.header{
  width: 100%;
  height: 100%;
  .content-box{
    width: 100%;
    position: absolute;
    left: 180px;
    top: 64px;
    transition: all 0.5s;
    padding: 10px;
    box-sizing: border-box;
  }
  .content-box-active{
    left: 64px;
  }
  .el-tabs__header{
    margin-bottom: 10px;
  }
}
</style>
