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
  }
]

export const routers = [
  ...blogRouter
]
