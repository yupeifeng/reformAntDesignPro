export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/resource/controlPanel' },
      {
        path: '/resource',
        name: 'resource',
        icon: 'resource',
        routes: [
          {
            path: 'controlPanel',
            name: 'controlPanel',
            component: './resource/controlPanel',
          },
          {
            path: 'chart',
            name: 'chart',
            component: './resource/controlPanel/chart',
          }
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
