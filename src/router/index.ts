import { h } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../components/switch/SwitchDemo.vue'
import ButtonDemo from '../components/button/ButtonDemo.vue'
import DialogDemo from '../components/dialog/DialogDemo.vue'
import TabsDemo from '../components/tabs/TabsDemo.vue'
import InputDemo from '../components/input/InputDemo.vue'
import TagDemo from '../components/tag/TagDemo.vue'

import Markdown from '../components/Markdown.vue'
import intro from '../markdown/intro.md'
import getStarted from '../markdown/get-started.md'
import install from '../markdown/install.md'
const history = createWebHashHistory()
const md = (string) => h(Markdown, { content: string, key: string })

export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', redirect: '/doc/intro' },
        { path: 'intro', component: md(intro) },
        { path: 'get-started', component: md(getStarted) },
        { path: 'install', component: md(install) },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'input', component: InputDemo },
        { path: 'tag', component: TagDemo },
      ],
    },
  ],
})
