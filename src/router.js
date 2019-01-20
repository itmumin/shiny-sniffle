import VueRouter from 'vue-router'
import Home from './components/Tabbar/Home.vue'
import Member from './components/Tabbar/Member.vue'
import ShopCar from './components/Tabbar/ShopCar.vue'
import Search from './components/Tabbar/Search.vue'
import NewsList from './components/news/NewsList.vue'
import newlistitem from './components/news/newlistitem.vue'


var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/member', component: Member},
        {path: '/shopcar', component: ShopCar},
        {path: '/search', component: Search},
        {path: '/home/newslist', component: NewsList},
        {path: '/home/newslist/:id', component: newlistitem}
    ],
    linkActiveClass: 'mui-active'
})

export default router