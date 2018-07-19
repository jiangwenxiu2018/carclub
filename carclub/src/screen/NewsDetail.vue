<template>
   <Screen>
    <NavBar title="动态详情">
        <template slot="start">
           <Button @click="$router.back()" color="#fff "/>
        </template>
    </NavBar>
    <Content>
       <h1>动态详情</h1>
    </Content>
   </Screen>
</template>

<script>
    export default {
        name:'NewsDetail'
    }
</script>

<style scoped>

</style>