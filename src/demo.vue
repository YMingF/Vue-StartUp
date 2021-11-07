<!--vue-loader可以将这一整串代码变成一个对象-->
<template>
  <div class="red">
    {{ message }}
    <button @click="fn">+1</button>
  </div>
</template>

<script>
export default {
  props: ['message','fn'],
  data() {
    return {
      n: 1
    }
  },
  methods: {
    addMore() {
      this.n += 1
    }
  },
  created() {
    console.log('页面初始化创建成功')
  },
  mounted() {
    console.log('页面挂载成功')
  },
  updated() {
    console.log('数据产生了更新')
  },
  destroyed() {
    console.log('页面元素发生了消亡')
  }
}
</script>
<style>
.red {
  color: red;
  background-color: blue;
}
</style>
