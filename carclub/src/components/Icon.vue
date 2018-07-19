<template>
    <i class="iconfont" :class="['icon-'+name]" :style="{fontSize:size+'px',color}">  </i>
</template>

<script>
    export default {
        name:"Icon",
        props:{
            name:{
                type:String,
                default:'like'
            },
            size:Number,
            color:String

        }
    }
</script>

<style scoped>

</style>