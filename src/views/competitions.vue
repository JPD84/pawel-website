

<template lang="html">
  <div class='page-content'>
    <h1>Competitions</h1>
    <carousel perPage=1 paginationActiveColor="#941c2f">
     <slide v-for="image in images">
       <img :src="`${publicPath}images/${image.src}`">
       <p class="carousel-image-caption">{{image.caption}}</p>
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
      images: [
        {
          src: "GDYNIA_POLAND_1.jpg",
          caption: "Lal lala"
        },
         {
          src: "GDYNIA_POLAND_2.jpg",
          caption: "test2"
        },
         {
          src: "GDYNIA_POLAND_3.jpg",
          caption: "test 3"
        },
         {
          src: "SALOU_SPAIN_1.jpg",
          caption: "test 4"
        },
          {
          src: "SALOU_SPAIN_2.jpg",
          caption: "test 5"
        },
          {
          src: "SALOU_SPAIN_3.jpg",
          caption: "test 6"
        },
          {
          src: "WARSAW_POLAND_1.jpg",
          caption: "test 7"
        },
         {
          src: "WARSAW_POLAND_2.jpg",
          caption: "test 8"
        },
         {
          src: "WARSAW_POLAND_3.jpg",
          caption: "test 9"
        },
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

// add captions...
// convert array item in objects, add caption text for each 
// update template to render image AND caption