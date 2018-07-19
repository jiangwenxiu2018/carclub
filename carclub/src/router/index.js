import Vue from 'vue'
import Router from 'vue-router'
// import Homescreen from '@/screen/Home'
// import Messagescreen from '@/screen/Message'
// import Minescreen from '@/screen/Mine'
// import Clubscreen from '@/screen/Club'

import TabScreen from '@/screen/Tab'
import NewsDetailScreen from '@/screen/NewsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TabScreen',
      component: TabScreen
    },
    {
      path: '/news',
      name: 'NewsDetailScreen',
      component: NewsDetailScreen
    },
    // {
    //   path: '/mine',
    //   name: 'Minescreen',
    //   component: Minescreen
    // },
    // {
    //   path: '/club',
    //   name: 'Clubscreen',
    //   component: Clubscreen
    // }
  ]
})
