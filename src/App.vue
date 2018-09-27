<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app{
  height: 100%;
  width: 100%;
}
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
}
body{
  font-size: 14px;
  height: 100%;
}
html{
  height: 100%;
}
</style>
