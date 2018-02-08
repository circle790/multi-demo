<template>
  <div class="about">
      <p>关于我们</p>
    <div class="img"></div>
  </div>
</template>
<script>
    import test from '../assets/js/test'
    export default {
        name: 'about',
        mounted() {
            test()
        }
    }
</script>
<style>
  @import '../assets/css/about.css';
    .about{
        font-size: 36px;
        text-align: center;
    }
</style>
