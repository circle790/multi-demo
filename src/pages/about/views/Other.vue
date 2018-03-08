<template>
  <div class="first">
    <img src="../assets/img/zdy.jpeg" alt="">
    <p>{{name}}</p>
  </div>
</template>
<script>
  import platform from '@/utils/platform'
  export default {
    data() {
      return {
        name: '小房鸭'
      }
    },
    mounted() {
      console.log(platform)
    }
  }
</script>
<style>
  .first{
    text-align: center;
  }
</style>