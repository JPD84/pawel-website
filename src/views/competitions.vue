<template lang="html">
  <h1>competitions</h1>

</template>
<div>
  <b-carousel
  id="carousel-fade"
  v-model="slide"
  :interval="4000"
  controls
  indicators
  background="#ababab"
  img-width="1024"
  img-height="480"
  style="text-shadow: 1px 1px 2px #333;"
  @sliding-start="onSlideStart"
  @sliding-end="onSlideEnd"
  >

  <b-carousel-slide
  caption="competition"
  text="First comp in Poland"
  img-src=".\assets\GDYNIA_POLAND_1.JPG"
  ></b-carousel-slide>

  <b-carousel-slide
  caption="competition 2"
  text="Second comp in Poland"
  img-src=".\assets\GDYNIA_POLAND_2.JPG"
  ></b-carousel-slide>



<script>
export default {
  data(){
    return{
      slide: 0,
      sliding: null
    }
  }
},
methods: {
  onSlideStart(slide){
    this.sliding = true
  },
  onSlideEnd(slide){
    this.sliding = false
  }
}
</script>

<style lang="css" scoped>

h1#view{
  color: #d4d8dd;
    background-color: black;
    border: 1px solid black;
    opacity: 0.92;
    width: center;
  font-variant: medium-caps;
  font-size: 60px;
  text-align: center;
  font-family: Permanent Marker;
  margin-bottom: 15px;
  text-shadow: 2px 2px 5px red;
}

</style>
