export default [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/Layout/Layout'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/Layout/Home/Home'),
      },
      {
        path: 'manual',
        component: () => import('@/views/Layout/Manual/Manual'),
      },
      {
        path: 'material',
        component: () => import('@/views/Layout/Material/Material'),
      },
      {
        path: 'black',
        component: () => import('@/views/Layout/Black/Black'),
      },
    ],
  },
  {
    path: '*',
    component: () => import('@/views/404'),
  },
]
