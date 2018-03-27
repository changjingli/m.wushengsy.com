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

			<div class="mui-content">
				<!-- 主界面具体展示内容 -->

				<!-- 轮播开始 -->
				<div class="mui-slider">
					<div class="mui-slider-group">
						<div class="mui-slider-item"><a href="#"><img src="./static/penwuchuchen.png" alt="喷雾除尘" /></a>
						</div>
						<div class="mui-slider-item"><a href="#"><img src="./static/penwuchuchou.png" alt="喷雾除臭" /></a>
						</div>
						<div class="mui-slider-item"><a href="#"><img src="./static/penwujiangwen.png" alt="喷雾降温" /></a>
						</div>
						<div class="mui-slider-item"><a href="#"><img src="./static/penwujiashi.png" alt="喷雾加湿" /></a>
						</div>
						<div class="mui-slider-item"><a href="#"><img src="./static/jingguanzaowu.png" alt="景观造雾" /></a>
						</div>
					</div>
					<div class="mui-slider-indicator">
						<div class="mui-indicator mui-active"></div>
						<div class="mui-indicator"></div>
						<div class="mui-indicator"></div>
						<div class="mui-indicator"></div>
					</div>
				</div>
				<!-- 轮播结束 -->

				<div class="mui-card">
					<div class="mui-card-header">实用案例</div>
					<div class="mui-card-content">
						<ul class="mui-table-view mui-grid-view">
							<li class="mui-table-view-cell mui-media mui-col-xs-6 wow"
							    :class="[idx % 2 ? 'slideInRight' : 'slideInLeft']" v-for="(p, idx) in penwujiangwen"
							    :key="idx">
								<img class="mui-media-object" :src="p.thumb | addPrefix">
								<div class="mui-media-body">{{ p.title }}</div>
							</li>
						</ul>
					</div>
				</div>

			</div>
			<div class="mui-off-canvas-backdrop"></div>
		</div>
	</div>
</template>

<script>
	import navLeft from './components/nav-left.vue';

	import mui from './libs/mui/3.7.2/js/mui.min';
	// import wow from 'wowjs';

	import wsConfig from './config.js';
	import util from './util';

	export default {
		name: "app",
		data: function () {
			return {
				title: wsConfig.title,
				imgPrefix: wsConfig.imgPrefix,
				limit: wsConfig.limit,
				penwujiangwen: [],
			}
		},
		components: {
			'nav-left': navLeft,
		},
		created: function () {
			// 7 获取喷雾降温列表
			util.request( 'apis/case/getPenWuJiangWenList.php', ( data ) => {
				this.penwujiangwen = data.slice(0, this.limit);
			} );
		},
		mounted: function () {
			// https://github.com/matthieua/WOW
			let wows = new WOW();

			wows.init();

		},
		filters: {
			addPrefix: function ( src ) {
				return wsConfig.imgPrefix + src;
			}
		}
	}
</script>

<style scoped>
	.mui-off-canvas-wrap {
		overflow: auto;
	}
</style>