<template>
  <div class="topnav">
    <span class="toggle-aside" @click="toggleAside"></span>
    <div class="logo">
      <router-link to="/">LOGO</router-link>
    </div>
    <ul class="menu">
      <li class="menu-item">菜单1</li>
      <li class="menu-item">菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'

export default {
  name: 'Topnav',
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }

    return {
      toggleAside,
    }
  },
}
</script>

<style lang="scss" scoped>
.topnav {
  position: relative;
  padding: 0 24px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #999;
  z-index: 10;

  .logo {
    max-width: 6em;
    margin-right: auto;
  }

  .menu {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    .menu-item {
      margin: 0 1em;
    }
  }

  .toggle-aside {
    position: absolute;
    top: 50%;
    left: 24px;
    display: none;
    width: 24px;
    height: 24px;
    background: red;
    transform: translateY(-50%);
  }

  @media (max-width: 500px) {
    .toggle-aside {
      display: inline-block;
    }
    .logo {
      margin: 0 auto;
    }
    .menu {
      display: none;
    }
  }
}
</style>
