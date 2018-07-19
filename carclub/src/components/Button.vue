<template>
    <button @click="$emit('click')" :style="{color:color}" class="car-btn car-btn-back" >
      返回
    </button>
</template>

<script>
    export default {
        name:'Button',
        props:{
            color:String
        }
    }
</script>

<style lang="less">
.car-btn{
    border:1px solid transparent;
    background: transparent;
    outline: none;
}
</style>