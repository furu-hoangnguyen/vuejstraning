<template>
    <div>
          <b-row class="text-md-center">
    <b-col md="6" class="mb-3">
      <p>Spinning animation:</p>
      <b-icon icon="arrow-clockwise" animation="spin" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Reverse spinning animation:</p>
      <b-icon icon="arrow-counterclockwise" animation="spin-reverse" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Pulsing spin animation:</p>
      <b-icon icon="arrow-clockwise" animation="spin-pulse" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Reversed pulsing spin animation:</p>
      <b-icon icon="arrow-counterclockwise" animation="spin-reverse-pulse" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Cylon animation:</p>
      <b-icon icon="three-dots" animation="cylon" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Vertical cylon animation:</p>
      <b-icon icon="three-dots-vertical" animation="cylon-vertical" font-scale="4"></b-icon>
    </b-col>
  </div>
</template>
<script>
export default {
    name:'loadingComponent'
}
</script>
<style lang="css" scope>
    
</style>