import Home from '../pages/home/home.vue'
import Category from '../pages/category/category.vue'
import TrustBuy from '../pages/trustBuy/trustBuy'
import Polifile from '../pages/polifile/polifile'
import Shop from '../pages/shop/shop.vue'

export default[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/trustBuy',
        component:TrustBuy
    },
    {
        path:'/polifile',
        component:Polifile
    },
    {
        path:'/shop',
        component:Shop
    },
    {
        path:'/',
        redirect:'/home'
    },
]