
<!--视图-->
<template>
    <div class="red">
        {{n}}
        <button @click="add">+1</button>
    </div>
</template>

<!--视图以外的其它选项-->
<script>
export default{
    data() {
        return {
            n:0
        }
    },
    methods:{
        add(){
            this.n+=1
        }
    }
}
</script>

<style scoped>
.red{
    color:red
}
</style>
<!--vue-loader可以将这一整串代码变成一个对象-->
