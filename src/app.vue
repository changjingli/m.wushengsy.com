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

			<!-- 底部导航开始 -->
			<nav-bottom></nav-bottom>
			<!-- 底部导航结束 -->

			<div class="mui-content mui-scroll-wrapper">
				<div class="mui-scroll">
					<!-- 主界面具体展示内容 -->

				</div>
			</div>
			<div class="mui-off-canvas-backdrop"></div>
		</div>
	</div>
</template>

<script>
	import navBottom from './components/nav-bottom.vue';
	import navLeft from './components/nav-left.vue';

	import mui from './libs/mui/3.7.2/js/mui.min';
	import wsConfig from './config.js';

	export default {
		name: "app",
		data () {
			return {
				title: wsConfig.title
			}
		},
		components: {
			'nav-left': navLeft,
			'nav-bottom': navBottom
		}
	}
</script>

<style scoped>

</style>