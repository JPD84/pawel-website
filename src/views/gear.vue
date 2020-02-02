<template lang="html">
<div class='page-content'>
  <h1>Bike</h1>
  <img :src="`${publicPath}images/BIKE_POLAND.JPG`" class="gear-image">
  <div>
  <ul class="list">
    <li>TT Argon 18 E119 Ultegra Di2</li>
    <li>Carbon wheels</li>
    <li>AERON 60 &amp; 80mm </li>
  </ul>
  </div>
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
.list {
  margin: 20px auto;
  display: inline-block;
  text-align: left;
}
</style>
