<template>
  <div class="home">
    <Topnav />

    <div class="banner">
      <h1>Vue3 ui</h1>
      <h2>使用vue3自己开发一个组件库</h2>
      <div class="actions">
        <a href="">github</a>
        <router-link to="/doc">开始</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'

export default {
  name: 'Home',
  components: {
    Topnav,
  },
}
</script>

<style lang="scss" scoped>
.home {
  .banner {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: lightgreen;

    > .actions {
      padding: 8px 0;

      a {
        margin: 0 8px;
        background: #fff;
        display: inline-block;
        $h: 28px;
        height: $h;
        line-height: $h;
        border-radius: $h / 2;
        padding: 0 16px;
      }
    }
  }
}
</style>
