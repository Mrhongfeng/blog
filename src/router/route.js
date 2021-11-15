export const blogRouter = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home')
  },
  {
    path: '/select',
    name: 'select',
    component: () => import('@/pages/select')
  },
  {
    path: '/pagination',
    name: 'pagination',
    component: () => import('@/pages/pagination')
  },
  {
    path: '/inputphone',
    name: 'inputphone',
    component: () => import('@/pages/inputphone')
  },
  {
    path: '/carouselform',
    name: 'carouselform',
    component: () => import('@/pages/carouselform')
  }
]

export const routers = [
  ...blogRouter
]
