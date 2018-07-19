<template>
    <div class="car-news">
        <v-touch v-for="(item,id) in data" :key="id" @tap="$emit('select',item)">
            <div class="car-news-item">
                <header class="car-news-item-header">
                   <Avatar :size="1.2" :src="item.upic"/>
                   <div class="car-news-item-header-info">
                     <h3>{{item.username}}</h3>
                     <small>{{item.pubtime}}</small>
                   </div>
                   <Icon name="arrowright" :size="30"/>
                </header>
                <p>{{item.content}}</p>
                <div class="images">
                    <div class="image"  v-for="(img,index) in item.photos" :key="index">
                    <img :src="img"/>
                    </div>
                </div>
                <footer class="car-news-item-footer">
                    <div class="left">
                        {{item.like}}赞{{item.comment}}评论
                    </div>
                    <div class="icons">
                        <Icon name="like" :size="30" />
                         <Icon name="comment" :size="30" />
                          <Icon name="share" :size="30" />
                    </div>
                </footer>
            </div>
        </v-touch>
    </div>
</template>

<script>
    export default {
        name:"News",
        props:{
            data:{
                type:Array,
                default:[]
            }
        }
    }
</script>

<style lang="less">
.car-news{
    display: flex;
    flex-direction: column;
    font-size: 16px;
    background: #e79a9a;
    .car-news-item{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        background: #fff;
        .car-news-item-header{
            width: 100%;
            display: flex;
            flex-direction: row;
            .car-news-item-header-info{
                flex:1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                h3{
                    margin: 0
                }
            }
        }
        .images{
            display: flex;
            flex-wrap: wrap;
            .image{
                width: 3rem;
                min-height:2.5rem;
                padding: 3px;
                box-sizing: border-box;  
                 img{
                        width: 100%;
                        display: block;
                        background: #ccc;
                        min-height: 1rem;
                    }
            }
        }
    }
    .car-news-item-footer{
        clear: #999;
        display: flex;
        justify-content: space-between
    }
}
</style>