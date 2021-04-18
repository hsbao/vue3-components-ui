import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import App from './App.vue'
import Test from './components/Test.vue'
import HelloWorld from './components/HelloWorld.vue'
import './index.css'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Test,
    },
    {
      path: '/helloworld',
      component: HelloWorld,
    },
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
