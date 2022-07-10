export default [
  {
    path: '/',
    redirect: '/webhp'
  },
  {
    path: '/webhp',
    component: () => import('@/views/Webhp')
  },
  {
    path: '/manual',
    component: () => import('@/views/Manual')
  },
  {
    path: '/',
    component: () => import('@/views/Layout/Layout'),
    children: [
      {
        path: 'material',
        component: () => import('@/views/Layout/Material/Material')
      },
      {
        path: 'black',
        component: () => import('@/views/Layout/Black/Black')
      }
    ]
  },
  {
    path: '/test',
    component: () => import('@/views/Test')
  },
  {
    path: '*',
    component: () => import('@/views/404')
  }
]
