import VueRouter from 'vue-router'
import Home from './components/home/Home.vue'
import ShopCar from './components/shopcar/ShopCar.vue'


var router = new VueRouter({
    routes: [
        {path: '/home', component: Home},
        {path: '/shopcar', component: ShopCar},
    ]
})

export default router