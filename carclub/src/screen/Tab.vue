<template>
<Screen>
    <NavBar :title="title" />
    <HomeScreen v-if="tabIndex == 0"/>
    <MessageScreen  v-if="tabIndex == 1"/>
    <ClubScreen  v-if="tabIndex == 2"/>
     <MineScreen v-if="tabIndex == 3" />
    <TabBar :data='tabs' @select='select'/>
</Screen>

</template>

<script>
//用于切换各个页面

import HomeScreen from './Home'
import ClubScreen from './Club'
import MessageScreen from './Message'
import MineScreen from './Mine'
    export default {
        name:'Tab',
        data() {
            return {
                tabIndex:0,
                title:'首页',
                  tabs:[
                   {
                      icon: [
                          require('../assets/icons/home_default@3x.png'),
                          require('../assets/icons/home_onclick@3x.png')
                      ],
                      lable:'首页' ,
                    //    handler:(item,index)=>{
                    //      this.tabIndex = index
                    //   }
                   },
                    {
                      icon: [require('../assets/icons/club_default@3x.png'),
                       require('../assets/icons/club_onclick@3x.png')
                      ],
                      lable:'车会' ,
                    //    handler:(item,index)=>{
                    //      this.tabIndex = index
                    //   }
                   },
                    {
                      icon:[ require('../assets/icons/news_default@3x.png'),
                       require('../assets/icons/news_onclick@3x.png')
                      ],
                      lable:'消息' ,
                    //   handler:(item,index)=>{
                    //      this.tabIndex = index
                    //   }
                   },
                    {
                      icon: [require('../assets/icons/mine_default@3x.png'),
                      require('../assets/icons/mine_onclick@3x.png')
                      ],
                      lable:'我的' ,
                    //    handler:(item,index)=>{
                    //      this.tabIndex = index
                    //   }
                   },
               ]
            }
        },
        methods: {
            select(item,index) {
                this.tabIndex = index; 
                this.title = item.lable;
            }
        },
        components:{
            HomeScreen,
            ClubScreen,
            MessageScreen,
            MineScreen
        }
    }
</script>

<style scoped>

</style>