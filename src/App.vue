<template>
  <div id="app">
    <h1 class="site-heading">Paweł Króliński</h1>
    <nav class="navbar">
      <ul>
        <li @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }">
          <router-link :to="{ name: 'home' }">home</router-link>
        </li>
        <li @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }">
          <router-link :to="{ name: 'training' }">training</router-link>
        </li>
        <li @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }">
          <router-link :to="{ name: 'gear' }">gear</router-link>
        </li>
        <li @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }">
          <router-link :to="{ name: 'competitions' }">competitions</router-link>
        </li>
        <li @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }">
          <router-link :to="{ name: 'contact' }">contact</router-link>
        </li>
      </ul>
    </nav>
    <div class="page-content-container">
      <router-view id="view"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      hover: false
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lora:400,700&display=swap&subset=cyrillic,cyrillic-ext,latin-ext");

.navbar {
  display: flex;
  justify-content: space-evenly;
  background-color: rgba(243, 25, 25, 0.5);
  background-size: contain;
  font-family: "Lora", serif;
  font-weight: 400;
}
.navbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#app {
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
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}

.page-content-container {
  background-color: #000;
}

.page-content h1,
.site-heading {
  color: #d4d8dd;
  margin: 0;
  font-variant: medium-caps;
  font-size: 80px;
  text-align: center;
  font-family: "Lora", serif;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px red;
  font-weight: 700;
}
.page-content h1 {
  opacity: 0.6;
}

.page-content h2 {
}
.page-content h3 {
}
.page-content h4 {
}
.page-content h5 {
}
.page-content h6 {
}

a {
  color: white;
  font-size: 35px;
}
</style>
