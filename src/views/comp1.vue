<template>
    <div>
        <section>组件 1</section>
        <input v-model="a"/>
        <div>{{a}}</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                a:'test'
            }
        }
    }
</script>