const Vue = window.Vue
Vue.config.productionTip = false
import Demo from "./demo.vue"

new Vue({
  data() {
    return {
      n: 0
    }
  },
  components: {Demo},
  template: `
    <div>
    {{ n }}
    <Demo :message="n" :fn="add"/>
    </div>
  `,
  methods: {
    add() {
      this.n += 1
    }
  }
}).$mount('#app')
