// import Vue from "vue";
// import App from "./App.vue";

// Vue.config.productionTip = false;

import Demo from "./demo.vue";
console.log(Demo);
new Vue({
  el: "#app", //对id为app的标签进行MVC的封装
  render(h) {
    //h用于创建元素
    return h(Demo);
  },
});
