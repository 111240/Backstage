export default {
  state: {
    isCollapse: false,
    tabsList: [
      {
        title: '首页',
        name: '1',
        path: '/sonhome'
      },
      {
        path: '/userInfo',
        name: '2-1',
        title: '用户信息'
      },
      {
        title: '登陆',
        name: '3',
        path: '/login'
      }
    ],
    activeName: '首页',
    menuActive: '1',
    delPath: ''
  },
  mutations: {
    changeCollapse (state) {
      state.isCollapse = !state.isCollapse
    },
    changeTabs (state, data) {
      var isRepeat = state.tabsList.some(val => val.name === data.name)
      if (!isRepeat) {
        state.tabsList.push(data)
      }
      state.activeName = data.title
      state.menuActive = data.name
    },
    changeMenuActive (state, data) {
      state.menuActive = data
    },
    removeTabs (state, data) {
      if (state.tabsList.length !== 1 && data !== '首页') {
        state.tabsList.forEach((item, index) => {
          if (item.title === data) {
            state.tabsList.splice(index, 1)
            state.menuActive = state.tabsList[index - 1].name
            state.activeName = state.tabsList[index - 1].title
            state.delPath = state.tabsList[index - 1].path
          }
        })
      }
    },
    positionCurrent (state, data) {
      state.activeName = data.title
      state.menuActive = data.name
    }
  },
  getters: {
    activeName: state => state.activeName,
    tabsList: state => state.tabsList,
    isCollapse: state => state.isCollapse,
    menuActive: state => state.menuActive,
    delPath: state => state.delPath
  }
}
