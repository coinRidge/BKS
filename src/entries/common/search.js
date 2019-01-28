import create from './entry'

export default function ({ store, component }) {
  let Vue = create()

  new Vue({
    store,
    render: h => h(component)
  }).$mount('#app')
}
