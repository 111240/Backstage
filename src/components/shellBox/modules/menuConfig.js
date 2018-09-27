export const menu = [
  {
    path: '/sonhome',
    index: '1',
    name: '首页'
  },
  {
    path: '/userList',
    index: '2',
    name: '用户列表',
    children: [
      {
        path: '/userInfo',
        index: '2-1',
        name: '用户信息'
      }
    ]
  },
  {
    path: '/login',
    index: '3',
    name: '登陆'
  }
]
