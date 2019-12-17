<template lang="html">
  <div class='page-content'>
    <h1>Home</h1>
    <div class="grid-container">
      <div class="grid-cell"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
    </div>
    <div class="grid-container">
      <div class="grid-cell-ista-Widget">instagram feed goes here - <src="https://cdn.lightwidget.com/widgets/lightwidget.js"><src="//lightwidget.com/widgets/369694c428b859cd93efdee95abf1cfa.html" scrolling="no" allowtransparency="true" class="lightwidget-widget"></div>
      <div class="grid-cell"><img :src="`${publicPath}images/BIKE_POLAND_2.jpg`"></div>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL, 
    }
  }
}
</script>

<style lang="css" scoped>
</style>
