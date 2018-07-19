<template>
    <Content scrollY>
        <Banner :data="banners" :height="150">          
        </Banner>
        <News :data="news" @select="select"/>
     <!-- <h1>Home</h1>
     <Button @click="$router.push('/news')" /> -->
   </Content> 

</template>

<script>
import Banner from '@/components/Banner'

    export default {
       components:{
           Banner
       },
       data() {
           return {
               news:[
                   {
                       id:"1",
                       upic:"http://img3.duitang.com/uploads/item/201508/07/20150807082213_AcdWu.jpeg",
                       username:"勇敢一点",
                       pubtime:"2018-7-20 18:20",
                       content:"毕业了要干嘛呢",
                       like:2,
                       photos:[
                           "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980402827&di=ce70ff7aef37a83d20cfb43cc75f9343&imgtype=0&src=http%3A%2F%2Fpic9.photophoto.cn%2F20081128%2F0033033999061521_b.jpg",
                           "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980402821&di=626ea463ff900bb3f6d8a872ad4b9888&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F14%2F07%2F97b58PICEn4_1024.jpg",
                           "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980402816&di=92a3d5900ceebce8c1c47556493a4281&imgtype=0&src=http%3A%2F%2Fpic5.photophoto.cn%2F20071228%2F0034034901778224_b.jpg",
                           "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980402815&di=0c232ba18daadb2163386e7a472d5eb2&imgtype=0&src=http%3A%2F%2Fpic22.photophoto.cn%2F20120225%2F0034034432152602_b.jpg",
                           "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980402812&di=cbf149a4bddffe1ec1dcfeca18e5494d&imgtype=0&src=http%3A%2F%2Fppt.downhot.com%2Fd%2Ffile%2Fp%2F2014%2F06%2F07%2F6c6dafd4cf3741d4d66a20cc453ce77a.jpg",
                           "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980402811&di=df06a3f94d3c9c99ad28919d46feb968&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F69%2F47%2F36W58PICgBm_1024.jpg"
                       ]
                   },
                   {
                       id:"1",
                       upic:"http://img3.duitang.com/uploads/item/201508/07/20150807082213_AcdWu.jpeg",
                       username:"勇敢一点",
                       pubtime:"2018-7-20 18:20",
                       content:"毕业了要干嘛呢",
                       like:2,
                       photos:[
                           "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980402827&di=ce70ff7aef37a83d20cfb43cc75f9343&imgtype=0&src=http%3A%2F%2Fpic9.photophoto.cn%2F20081128%2F0033033999061521_b.jpg",
                           "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980402821&di=626ea463ff900bb3f6d8a872ad4b9888&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F14%2F07%2F97b58PICEn4_1024.jpg",
                           "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980402816&di=92a3d5900ceebce8c1c47556493a4281&imgtype=0&src=http%3A%2F%2Fpic5.photophoto.cn%2F20071228%2F0034034901778224_b.jpg",
                           "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980402815&di=0c232ba18daadb2163386e7a472d5eb2&imgtype=0&src=http%3A%2F%2Fpic22.photophoto.cn%2F20120225%2F0034034432152602_b.jpg",
                           "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980402812&di=cbf149a4bddffe1ec1dcfeca18e5494d&imgtype=0&src=http%3A%2F%2Fppt.downhot.com%2Fd%2Ffile%2Fp%2F2014%2F06%2F07%2F6c6dafd4cf3741d4d66a20cc453ce77a.jpg",
                           "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531980402811&di=df06a3f94d3c9c99ad28919d46feb968&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F69%2F47%2F36W58PICgBm_1024.jpg"
                       ]

                   }
               ],
                 banners: [
                    {
                        path:'/news',
                        img:'https://img1.360buyimg.com/da/jfs/t23053/133/1044606093/370707/7fa9ff9d/5b4d8f4fN95435aa8.jpg!cr_1125x549_0_72'   
                    },
                     {
                        path:'/news',
                        img:'https://m.360buyimg.com/mobilecms/s1280x624_jfs/t21766/159/2257224810/132260/b8d396e9/5b4db8b5Nc1d646ec.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp'   
                    },
                     {
                        path:'/news',
                        img:'https://img1.360buyimg.com/da/jfs/t21682/90/2085986098/98413/41611362/5b46d138N8935d336.jpg!cr_1125x549_0_72'   
                    },
                   
                ]
           }
       },
       methods: {
           select(item) {
               this.$router.push({name:'NewsDetailScreen',params:{item}})  
           }
       },
    }
</script>

<style scoped>

</style>