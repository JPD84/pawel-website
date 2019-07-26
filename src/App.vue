<template>
  <div id="app">
    <h1>Paweł Króliński</h1>
    <nav class="navbar">
      <router-link :to="{ name: 'home' }">home</router-link>
      <router-link :to="{ name: 'about' }">about</router-link>
      <router-link :to="{ name: 'competitions' }">competitions</router-link>
      <router-link :to="{ name: 'gear' }">gear</router-link>
      <router-link :to="{ name: 'training' }">training</router-link>
    </nav>

    <router-view id='view'>
    </router-view>


  </div>
</template>

<script>


export default {
  name: 'app',

}
</script>

<style>
.navbar{
  display: flex;
justify-content: space-evenly;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
