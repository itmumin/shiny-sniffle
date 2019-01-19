import VueRouter from 'vue-router'
import Home from './components/Home/Home.vue'
import Member from './components/Member/Member.vue'
import ShopCar from './components/ShopCar/ShopCar.vue'
import Search from './components/Search/Search.vue'


var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/member', component: Member},
        {path: '/shopcar', component: ShopCar},
        {path: '/search', component: Search}
    ],
    linkActiveClass: 'mui-active'
})

export default router