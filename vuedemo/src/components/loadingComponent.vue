<template>
  <div class="pagelock">
      <b-icon icon="arrow-clockwise" animation="spin" font-scale="4" class="loading"></b-icon>
  </div>
  
</template>
<script>
export default {
    name:'LoadingComponent'
}
</script>
<style lang="css" scope>
    .loading{
      color: red !important;
    }
    .pagelock{
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(10, 10, 10, .5);
      z-index: 10000;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>