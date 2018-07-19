<template>
  <div id="app">
 
   <!-- <NavBar>
     <template slot="start">返回</template>
     <template slot="title">车友会</template>
     <template slot="end">菜单</template>
   </NavBar> -->
     <!-- <Screen>
    <NavBar start="返回" title="车友会" end="菜单"/>
    <Content :scrollY="true">
      <div style="height:3000px;background:red"></div>
    </Content>
    <TabBar />
   </Screen> -->
   <transition
   enter-active-class="animated slideInLeft"
   leave-active-class="animated slideOutRight"
   >
     <router-view />
   </transition>

  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang='less'>
 @import './assets/less/var.less';
</style>
