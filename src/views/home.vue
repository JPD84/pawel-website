<template lang="html">
  <div class='page-content'>
    <h1>Iron Pawel</h1>
    <div class="grid-container">
      <div class="grid-cell"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></div>
    </div>
    <div class="grid-container">
      <div class="grid-cell" id="instagram-widget">
        <iframe src="//lightwidget.com/widgets/39cf7236a34f5d77b98f92eebec4255f.html" scrolling="no" allowtransparency="true" class="lightwidget-widget"></iframe>
      </div>


    </div>
    
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  mounted() {
    // LOAD THE LIGHTWIDGET SCRIPT ON COMPONENT MOUNT
    // vue lifecycle - https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
    const lightwidgetScript = document.createElement("script");
    lightwidgetScript.setAttribute(
      "src",
      "https://cdn.lightwidget.com/widgets/lightwidget.js"
    );
    document.body.appendChild(lightwidgetScript);
  }
};
</script>

<style lang="css" scoped>
.lightwidget-widget {
  width: 100%;
  border: 0;
  overflow: hidden;
}
</style>
