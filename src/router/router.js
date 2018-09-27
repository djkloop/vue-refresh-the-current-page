import Home from '../views/Home.vue'
export default [{
  path: '/',
  name: 'home',
  alias: '/home_page',
  component: Home
},
{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
}, {
  path: '/argu/:name',
  component: () =>
            import(/* webpackChunkName: "argu" */ '@/views/argu.vue')
},
{
  path: '/parent',
  component: () =>
            import(/* webpackChunkName: "parent" */ '@/views/parent.vue'),
  children: [{
    path: 'children',
    component: () =>
                import(/* webpackChunkName: "child" */ '@/views/children.vue')
  }]
},
{
  path: '/name_views',
  components: {
    default: () =>
                import(/* webpackChunkName: "child" */ '@/views/children.vue'),
    email: () =>
                import(/* webpackChunkName: "email" */ '@/views/email.vue'),
    phone: () =>
                import(/* webpackChunkName: "phone" */ '@/views/phone.vue')
  }
},
{
  path: '/redirect/:path',
  name: 'redirect',
  component: () =>
            import(/* webpackChunkName: "loading" */ '@/views/loading.vue')
}
]
