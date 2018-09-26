<template>
  <div class="home">
    <Header/>
    <h1>Home</h1>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Header from './header'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    Header
  }
}
</script>

<style lang="scss">

</style>
