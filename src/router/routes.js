import Home from '../pages/home/home.vue'
import Category from '../pages/category/category.vue'
import TrustBuy from '../pages/trustBuy/trustBuy'
import Polifile from '../pages/polifile/polifile'
import Shop from '../pages/shop/shop.vue'
import Login from '../pages/login/login.vue'
import Search from '../pages/search/search.vue'

import Coupon from '../pages/shop/coupon/coupon.vue'
import SubRightCateList from '../pages/category/rightCateList/rightCateList.vue'

export default[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category,
        children: [
            {
                path: '/category/cateId/:id',
                component: SubRightCateList,
            }
        ]
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
        component:Shop,
        children:[
            {
                path:'/coupon',
                component:Coupon
            }
        ]
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/search',
        component:Search
    },
    {
        path:'/',
        redirect:'/home'
    },
]