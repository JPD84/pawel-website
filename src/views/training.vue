<template lang="html">
<div class='page-content'>
  <h1>Training</h1>
  <div class="grid-container">
      <div class="grid-cell">
<table class="table">
  <tr>
    <th>Monday</th>
    <th>Tues</th>
    <th>Wed</th>
    <th>Thu</th>
    <th>Fri</th>
    <th>Sat</th>
    <th>Sun</th>
  </tr>
 
  <tr>
    <td data-label="Mon"> <span class='activity'><i class="fas fa-running"></i>&nbsp;1hr</span></td>
    <td data-label="Tues"> <span class='activity'><i class="fas fa-running"></i>&nbsp;1hr</span></td>
    <td data-label="Wed"> <span class='activity'><i class="fas fa-running"></i>&nbsp;2hr</span><br><span class='activity'><i class="fas fa-swimmer"></i>&nbsp;1hr</span></td>
    <td data-label="Thu"> <span class='activity'><i class="fas fa-running"></i>&nbsp;2hr</span></td>
    <td data-label="Fri"> <span class='activity'><i class="fas fa-running"></i>&nbsp;1hr</span> <span class='activity'><i class="fas fa-biking"></i>&nbsp;1hr</span></td>
    <td data-label="Sat"> <span class='activity'><i class="fas fa-running"></i>&nbsp;1hr</span></td>
    <td data-label="Sun"> <span class='activity'><i class="fas fa-running"></i>&nbsp;1hr</span></td>
  </tr>
</table>
</div>
</div>
</div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.table {
  border-collapse: collapse;
}
.table th,
.table td {
  padding: 20px 0;
  display: block;
  vertical-align: top;
}
.table th {
  color: #f1f3f5;
  border-bottom: 1px solid #747678;
  display: none;
}
.table .activity {
  display: block;
  margin-bottom: 6px;
}

.table td:before {
  content: attr(data-label);
  display: block;
  font-size: 0.75rem;
  color: #747678;
  text-transform: uppercase;
  padding: 0 0 0.5rem;
}

.table .fas {
  width: 20px;
  text-align: center;
  color: #8cc84b;
}

@media screen and (min-width: 768px) {
  .navbar ul {
    display: flex;
  }
  .table {
    max-width: 100%;
    width: 100%;
  }
  .table th,
  .table td {
    padding: 20px;
    display: table-cell;
  }

  .table td:before {
    display: none;
  }
}
</style>
