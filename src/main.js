import './css/index.less'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueRource from 'vue-resource'
Vue.use(VueRource)
import { Header, Swipe, SwipeItem  } from 'mint-ui'
import './lib/dist/mui/css/mui.min.css'
import './lib/dist/mui/css/icons-extra.css'

import app from './App.vue'
import router from './router'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

var vm = new Vue({
    el: '#app',
    router,
    render: c => c(app)
})
