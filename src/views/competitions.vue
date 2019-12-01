

<template lang="html">
  <div class='page-content'>
    <h1>Competitions</h1>
    <carousel perPage=1 paginationActiveColor="#941c2f">
     <slide v-for="image in images">
      
       <img :src="`${publicPath}images/${image}`">
     </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      images:[
        "GDYNIA_POLAND_1.jpg",
        "GDYNIA_POLAND_2.jpg",
        "GDYNIA_POLAND_3.jpg",
        "SALOU_SPAIN_1.jpg",
        "SALOU_SPAIN_2.jpg",
        "SALOU_SPAIN_3.jpg",
        "WARSAW_POLAND_1.jpg",
        "WARSAW_POLAND_2.jpg",
        "WARSAW_POLAND_3.jpg"

        ]
    };
  },
  components: {
    Carousel,
    Slide
  }
};
</script>

<style lang="css" scoped>
.VueCarousel img{
  height: 400px; 
  max-width: 100%; 
}

</style>
