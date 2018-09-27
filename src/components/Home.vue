<template>
  <div class="home">
    <shell-box>
      <router-view></router-view>
    </shell-box>
  </div>
</template>

<script>
import shellBox from './shellBox'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    shellBox
  }
}
</script>

<style lang="scss">
.home{
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
