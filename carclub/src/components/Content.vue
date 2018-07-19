<template>
    <div class="car-content" :class="{
        'car-content-scroll-x':scrollX,
        'car-content-scroll-y':scrollY
    }">
     <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'Content',
        props:{
            scrollX:Boolean,
            scrollY:Boolean
        }
    }
</script>

<style lang="less">
   .car-content{
     flex: 1;
  //   display: flex;
     overflow: hidden;
     font-size: 14px;
     &.car-content-scroll-x{
         overflow-x: auto;
     }
      &.car-content-scroll-y{
         overflow-y: auto;
     }
    
}

</style>