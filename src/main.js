import './css/index.less'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueRource from 'vue-resource'
Vue.use(VueRource)
import { Header, Swipe, SwipeItem, Button  } from 'mint-ui'
import './lib/dist/mui/css/mui.min.css'
import './lib/dist/mui/css/icons-extra.css'

import app from './App.vue'
import router from './router'

import moment from 'moment'

Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dateStr).format(pattern)
})

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

var vm = new Vue({
    el: '#app',
    router,
    render: c => c(app)
})
