<template>
  <div>
    <router-link to="/">test</router-link> |
    <router-link to="/helloworld">HelloWorld</router-link>
  </div>
  <hr />
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>
