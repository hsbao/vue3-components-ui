import { createApp } from 'vue'

import 'github-markdown-css'
import './lib/style.scss'

import App from './App.vue'
import Markdown from './components/Markdown.vue'

import './index.scss'
import { router } from './router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('Markdown', Markdown)
