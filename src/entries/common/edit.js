import Router from 'vue-router'
import create from './entry'

export default function ({ component }) {
  let Vue = create()
  Vue.use(Router)

  const router = new Router({
    routes: [
      {
        path: '/:action?/:oid?',
        name: 'view',
        component
      }
    ]
  })

  new Vue({
    router,
    render: h => h(component)
  }).$mount('#app')
}
