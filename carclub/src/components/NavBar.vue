<template>
    <div class="car-navbar">
        <div class="car-navbar-start">
           {{start}}
            <slot v-if="!start" name="start"></slot>
        </div>
       <div class="car-navbar-title">
           {{title}}
            <slot v-if="!title" name="title"></slot>
       </div>
       <div class="car-navbar-end">  
            {{end}}
            <slot v-if="!end" name="end"></slot>
       </div>
       
    </div>
</template>

<script>
    export default {
        name:'NavBar',
        props:['title','start','end'],
    }
</script>

<style lang='less'>
@import './var.less';
 .car-navbar{
     height:50px;
     background: @primary;
     color: @navbar-title-color;
     display: flex;
     justify-content: space-between;
     align-items: center;
     font-size: 16px;
     .car-navbar-start,//写这个宽度是为了减少一个插槽 也能够让title居中
     .car-navbar-end{
         width: 1.5rem;
         text-align: center;
     }

 }
</style>