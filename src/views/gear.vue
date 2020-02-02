<template lang="html">
<div class='page-content'>
  <h1>Gear</h1>
  <img :src="`${publicPath}images/BIKE_POLAND.JPG`" class="gear-image">
  <ul>
    <li>Something</li>
    <li>Lorem ipsum</li>
    <li>and something else</li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>

<style lang="css" scoped>
.gear-image {
  max-width: 600px;
}
</style>
