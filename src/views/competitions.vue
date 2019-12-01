

<template lang="html">
  <div class='page-content'>
    <h1>competitions</h1>
    <carousel :perPage=1>
      <slide>slide 1</slide>
      <slide>slide 2</slide>
      <slide>slide 3</slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  data() {
    return {};
  },
  components: {
    Carousel,
    Slide
  }
};
</script>

<style lang="css" scoped>
</style>
