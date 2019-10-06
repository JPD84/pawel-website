

<template lang="html">
  <div class='container'>
  <h1>competitions</h1>
  <carousel :perPage=1>
    <slide>slide 1</slide>
    <slide>slide 2</slide>
    <slide>slide 3</slide>
  </carousel>
</div>
</template>

<script>
import { Carousel,Slide} from 'vue-carousel';
export default {
  data(){
    return{

    }
  },
  components: {
    Carousel,
    Slide

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
