<template>
    <div class="car-tabbar">
      <div class="car-tabbar-item" @click="click(item,index)" v-for="(item,index) in data" :key="item.title">
          <div class="car-tabbar-item-icon">
              <img :src="item.icon[0]" v-if="index != tabIndex" />
              <img :src="item.icon[1]" v-else />
          </div>
          <div class="car-tabbar-item-lable" :class="{active:index == tabIndex}">{{item.lable}}</div>
      </div>
     
    </div>
</template>

<script>
    export default {
        name:'TabBar',
        props:['data'],
        data() {
            return {
               tabIndex:0,
            }    
        },
        methods: {
            click(item,index) {
                if(typeof item.handler == 'function')  item.handler(item,index);
                this.tabIndex = index;
                this.$emit('select',item,index);
            }
        },
    }
</script>

<style lang="less">
  @import './var.less';
  .car-tabbar{
    height:40px;
    border-top: 1px solid @tabbar-border-color;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .car-tabbar-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .car-tabbar-item-icon{
          padding: 3px 0;
            img{
               width:1.7em;
               height:1.7em;
            }
        }
        .car-tabbar-item-lablie{
          &.active{
              color: @primary;
          }
          text-align: center;
        }
    }
 
  }

</style>