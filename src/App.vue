<template>
  <router-view />
</template>

<script>
import { ref, provide } from 'vue'
import { router } from './router/index'

export default {
  name: 'App',
  setup() {
    const clientWidth = document.documentElement.clientWidth
    const isMobile = clientWidth <= 500
    const asideVisible = ref(isMobile ? false : true)
    provide('asideVisible', asideVisible)

    router.afterEach(() => {
      if (isMobile) {
        asideVisible.value = false
      }
    })

  },
}
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
