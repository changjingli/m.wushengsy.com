<template>
  <!-- 缩放式侧滑（类手机QQ） -->
  <!-- 侧滑导航根容器 -->
  <div id="app" class="mui-off-canvas-wrap mui-draggable mui-scalable">
    <!-- 左侧导航开始 -->
    <nav-left></nav-left>
    <!-- 左侧导航结束 -->

    <!-- 主页面容器 -->
    <div class="mui-inner-wrap mui-transitioning">
      <!-- 主页面标题 -->
      <header class="mui-bar mui-bar-nav">
        <a class="mui-icon mui-action-menu mui-icon-bars mui-pull-left" href="#offCanvasSide"></a>
        <h1 class="mui-title">{{ title }}</h1>
      </header>

      <div class="mui-content mui-scroll-wrapper">

        <!-- 主界面具体展示内容 -->
        <router-view></router-view>
      </div>
      <div class="mui-off-canvas-backdrop"></div>
    </div>
  </div>
</template>

<script>
  import navLeft from '@/components/nav-left';
  import wsConfig from '@/config';

  export default {
    name: 'App',
    data: function () {
      return {
        title: wsConfig.title
      }
    },
    components: {
      'nav-left': navLeft
    }
  }
</script>

<style>
</style>
