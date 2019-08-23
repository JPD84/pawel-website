<template>
  <div id="app">
    <h1>Paweł Króliński</h1>
    <nav class="navbar">
      <span
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{ active: hover }"
      >
      <router-link :to="{ name: 'home' }">home</router-link>
    </span>
    <span
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="{ active: hover }"
    >
    <router-link :to="{ name: 'training' }">training</router-link>
  </span>
  <span
  @mouseover="hover = true"
  @mouseleave="hover = false"
  :class="{ active: hover }"
  >
  <router-link :to="{ name: 'gear' }">gear</router-link>
</span>
<span
@mouseover="hover = true"
@mouseleave="hover = false"
:class="{ active: hover }"
>
<router-link :to="{ name: 'competitions' }">competitions</router-link>
</span>
<span
@mouseover="hover = true"
@mouseleave="hover = false"
:class="{ active: hover }"
>
<router-link :to="{ name: 'contact' }">contact</router-link>
</span>

</nav>
<router-view id='view'>
</router-view>

</div>
</template>

<script>


export default {
  name: 'app',
  data(){
    return{
      hover: false,
    };
  }

}
</script>

<style>
.navbar{
  display: flex;
  justify-content: space-evenly;
  background-color: rgba(243, 25, 25, 0.5);
  background-size:contain;
  font-family: Permanent Marker;
  font-variant: normal;

}


#app {
  font-family: Permanent Marker;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}

body {
  margin: 0;
  flex-direction: column;
  justify-content: center;
  background: url(./assets/Carbon-Fibre.jpg);
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

h1 {
  color: #d4d8dd;
  margin:0;
  font-variant: medium-caps;
  font-size: 80px;
  text-align: center;
  font-family: Permanent Marker;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px red;
}

a {
  color: white;
  font-size: 35px;

}

span:hover{
  background: black;
}



/* h1#view {
div.transbox
margin: 30px;
background-color: #ffffff;
border: 1px solid black;
opacity: 0.6;
filter: alpha(opacity=60);
width: 250px;
} */

</style>
