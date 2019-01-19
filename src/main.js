import './css/index.less'
import Vue from 'vue'
import { Header  } from 'mint-ui'
import './lib/dist/mui/css/mui.min.css'

import app from './App.vue'

Vue.component(Header.name, Header)

var vm = new Vue({
    el: '#app',
    render: c => c(app)
})




console.log('ok')