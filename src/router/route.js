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
  }
]

export const routers = [
  ...blogRouter
]
