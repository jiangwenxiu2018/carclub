<template>
    <div class="car-screen">
     <slot></slot>
    </div>
</template>

<script>
//这个组件代表一个频幕  用来做整个页面的一个布局
    export default {
        name:'Screen',
    }
</script>

<style lang='less'>
   .car-screen{
       position: fixed;//做页面的布局需要定位 用于页面间的切换
       width: 100%;
       height: 100%;
       display: flex;
       flex-direction: column;

   }
</style>