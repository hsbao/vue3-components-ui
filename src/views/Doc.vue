<template>
  <div class="doc">
    <Topnav />

    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li><router-link to="/doc/switch">Switch组件</router-link></li>
          <li><router-link to="/doc/button">Button组件</router-link></li>
          <li><router-link to="/doc/dialog">Dialog组件</router-link></li>
          <li><router-link to="/doc/tabs">tabs组件</router-link></li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
import Topnav from '../components/Topnav.vue'

export default {
  name: 'Doc',
  components: {
    Topnav,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    return { asideVisible }
  },
}
</script>

<style lang="scss" scoped>
.doc {
  height: 100%;
  .content {
    height: calc(100% - 60px);
    display: flex;
    aside {
      background: lightblue;
      width: 150px;
      height: 100%;
      padding: 70px 16px 16px;
      @media (max-width: 500px) {
        position: fixed;
        top: 0px;
        left: 0;
      }
      > h2 {
        margin-bottom: 4px;
      }
      > ol {
        li {
          padding: 4px 0;
        }
      }
    }

    main {
      padding-top: 60px;
      padding-left: 156px;
      overflow-y: scroll;
      @media (max-width: 500px) {
        padding-top: 30px;
        padding-left: 24px;
      }
    }
  }
}
</style>
