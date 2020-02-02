<template>
  <div id="app">
    <h1 class="site-heading">Paweł Króliński</h1>
    <nav class="navbar">
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'training' }">Training</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'gear' }">Gear</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'competitions' }">Competitions</router-link>
        </li>
      </ul>
    </nav>
    <div class="page-content-container">
      <router-view id="view"></router-view>
    </div>
    <div class="footer">
      <div class="footer__inner">
        <ul>
          <li>
            <a href="https://www.instagram.com/ironpawel.86/?hl=en" target="_blank">
              <i class="fab fa-instagram"></i>
              <span>ironPawel.86</span>
            </a>
          </li>
          <li>
            <a href="mailto:pkrolinski@gmail.com">
              <i class="far fa-envelope"></i>
              <span>pkrolinski@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
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
@import url("./vendor/flexboxgrid.min.css");
.navbar {
  display: flex;
  justify-content: space-evenly;
  background-color: #941c2f;
  background-size: contain;
  font-family: "Lora", serif;
  font-weight: 700;
  min-height: 2rem;
}
.navbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  /* display: none; */
}
.navbar a {
  display: block;
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: all 0.25s ease-in-out;
  border-radius: 4px;
}
.navbar a:hover,
.navbar a:focus {
  background-color: #000;
}

.grid-cell-ista-Widget {
  width: 100%;
  border: 0;
  overflow: hidden;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
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
  font-size: 1rem;
}

.page-content-container {
  background-color: #000;
  max-width: 1010px;
  padding: 20px;
  margin: 0 auto;
}

.site-heading {
  color: #d4d8dd;
  margin: 0;
  font-variant: medium-caps;
  font-size: 2rem;
  text-align: center;
  font-family: "Lora", serif;
  margin-bottom: 20px;
  text-shadow: 2px 2px 1px #941c2f;
  font-weight: 700;
}
.page-content {
  color: #fff;
}
.page-content h1 {
  color: #d4d8dd;
  margin: 0;
  font-variant: medium-caps;
  font-size: 40px;
  text-align: center;
  font-family: "Lora", serif;
  margin-bottom: 20px;
  text-shadow: 2px 2px 1px #941c2f;
  font-weight: 700;
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
.page-content p {
  font-size: 20px;
  max-width: 800px;
}
.page-content p:only-child {
  margin-left: auto;
  margin-right: auto;
}
img {
  max-width: 100%;
}
a {
  transition: all 0.25s ease-in-out;
}

.grid-container {
  display: flex;
  text-align: left;
  margin-bottom: 30px;
}

.grid-cell {
  flex: 1;
}

.footer {
  margin-top: 2rem;
  background: rgba(0, 0, 0, 0.8);
  padding: 0.5rem;
}
.footer__inner {
  color: #fff;
}
.footer a {
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}
.footer a:hover,
.footer a:active {
  color: #941c2f;
}

.footer a span {
  margin-left: 0.5rem;
}
.footer ul {
  list-style: none;
}
.footer ul li {
  display: inline-block;
  margin: 0 1rem;
}

@media screen and (min-width: 768px) {
  .navbar ul {
    display: flex;
  }
  .navbar a {
    font-size: 2rem;
  }
  .site-heading {
    font-size: 90px;
  }
  .page-content h1 {
    font-size: 60px;
  }
}
</style>
