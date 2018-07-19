<template>
<v-touch @swipeleft="left" @swiperight="right">
    <div class="car-banner" :style="{height:height+'px'}">
        <transition-group 
         :enter-active-class="enter"
         :leave-active-class="leave"
        >
           <div class="car-banner-item" v-if="bannerIndex==index" v-for="(item,index) in data" :key="index">
               <img :src="item.img" />
            </div>
        </transition-group>
    <div class="car-listbar">
         <div class="car-listbar-dot" :class="{active:bannerIndex==index}" v-for="(item,index) in data" :key="index"></div>
    </div>

    </div>
</v-touch>
</template>

<script>
    export default {
        name:'Banners',
        props:{
           data:{
               type:Array,
               default:[]
           },
           height:{
               type:Number,
               default:100,
           }
        },
        data() {
            return {
                bannerIndex:0,
                enter:"banner-swiper slideInRight",
                leave:"banner-swiper slideOutLeft",
              
            }
        },
        methods: {
            left(e) {
                // console.log(e)
                 this.enter = "banner-swiper slideInRight"
                this.leave ="banner-swiper slideOutLeft"
                this.bannerIndex --;
                if(this.bannerIndex < 0){
                    this.bannerIndex = this.data.length -1
                }
            },
            right(e){
                 this.enter = 'banner-swiper slideInLeft'
                this.leave = 'banner-swiper slideOutRight'
                this.bannerIndex ++;
                if(this.bannerIndex > this.data.length-1){
                    this.bannerIndex = 0
                }
            }
        },
    }
</script>

<style lang="less">
.banner-swiper{
      -webkit-animation-duration: 0.5s;
        animation-duration: 0.5s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
}
.car-banner{
    width:10rem;
    position: relative;
    overflow: hidden;
    height: 175px;
.car-banner-item{
    width: inherit;
    position: absolute;
    img{
        max-width: 100%;
    }
}
.car-listbar{
    position: absolute;
    bottom: 10px;
    width: 100%;
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    .car-listbar-dot{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #fff;
        margin: 0 5px;
        &.active{
            background: rgb(243, 58, 58);
        }
    }
}
}
</style>