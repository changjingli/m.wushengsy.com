<template>
	<!-- 缩放式侧滑（类手机QQ） -->
	<!-- 侧滑导航根容器 -->
	<div class="mui-off-canvas-wrap mui-draggable mui-scalable">
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


				<!-- 路由出口 -->
				<!-- 路由匹配到的组件将渲染在这里 -->
				<router-view></router-view>
			</div>
			<div class="mui-off-canvas-backdrop"></div>
		</div>
	</div>
</template>

<script>

	import wsConfig from './config.js';
	import mui from './libs/mui/3.7.2/js/mui.min';

	import navLeft from './components/nav-left.vue';
	import index from './components/index.vue';
	import NewsDetailComponent from './components/NewsDetailComponent.vue';

	export default {
		name: "app",
		data: function () {
			return {
				title: wsConfig.title,
			}
		},
		components: {
			'nav-left': navLeft,
		},
		created: function () {

		},

	}
</script>

<style scoped>


</style>