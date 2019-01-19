import './css/index.less'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import { Header  } from 'mint-ui'
import './lib/dist/mui/css/mui.min.css'
import './lib/dist/mui/css/icons-extra.css'

import app from './App.vue'
import router from './router'

Vue.component(Header.name, Header)

var vm = new Vue({
    el: '#app',
    router,
    render: c => c(app)
})
