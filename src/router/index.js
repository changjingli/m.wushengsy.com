import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import newsDetail from '@/components/NewsDetailComponent'
import NewsListComponent from '@/components/NewsListComponent'

Vue.use( Router )

export default new Router( {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/newsDetail/:id',
      name: 'newsDetail',
      component: newsDetail
    }, {
      path: '/newsList/:type',
      name: 'newsList',
      component: NewsListComponent
    }
  ]
} )
