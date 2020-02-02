<template lang="html">
<div class='page-content'>
  <h1>Training</h1>
    <div class="training-schedule">Training Schedule</div>
</div>

</template>

<script>
export default {};
</script>


<style lang="css" scoped>

.training-schedule {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

</style>
