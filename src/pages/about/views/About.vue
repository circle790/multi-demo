<template>
  <div class="about">
    <div class="img"></div>
    <p>关于我们-小房鸭</p>
  </div>
</template>
<script>
  import platform from '@/utils/platform'
  export default {
    name: 'about',
    mounted() {
      console.log(platform.isWeChat)
    }
  }
</script>
<style>
  @import '../assets/css/about.css';
</style>
