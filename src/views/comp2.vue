<template>
    <div>
        <section>组件 2</section>
        <button @click="change">改变</button>
        <div>{{msg}}</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'unchanged'
            }
        },
        methods: {
            change: function () {
                console.log('changed')
                this.msg = 'changed'
            }
        }
    }
</script>