

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
          caption: "Gdynia Poland"
        },
        {
          src: "GDYNIA_POLAND_2.jpg",
          caption: "Gdynia Poland"
        },
        {
          src: "GDYNIA_POLAND_3.jpg",
          caption: "Gdynia Poland"
        },
        {
          src: "SALOU_SPAIN_1.jpg",
          caption: "Salou Spain 2018"
        },
        {
          src: "SALOU_SPAIN_2.jpg",
          caption: "Salou Spain 2018"
        },
        {
          src: "SALOU_SPAIN_3.jpg",
          caption: "Salou Spain 2018"
        },
        {
          src: "WARSAW_POLAND_1.jpg",
          caption: "PZU Marathon Warsaw Poland 2018"
        },
        {
          src: "WARSAW_POLAND_2.jpg",
          caption: "PZU Marathon Warsaw Poland 2018"
        },
        {
          src: "WARSAW_POLAND_3.jpg",
          caption: "PZU Marathon Warsaw Poland 2018"
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
.VueCarousel img {
  height: 400px;
  max-width: 100%;
}
.carousel-image-caption {
  margin: 10px 0 0;
  max-width: none;
}
</style>

// add captions...
// convert array item in objects, add caption text for each 
// update template to render image AND caption