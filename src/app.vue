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
			<!--<nav-bottom></nav-bottom>-->
			<!-- 底部导航结束 -->

			<div class="mui-content mui-scroll-wrapper">
				<div class="mui-scroll">
					<!-- 主界面具体展示内容 -->

					<!-- 轮播开始 -->
					<div class="mui-slider">
						<div class="mui-slider-group">
							<div class="mui-slider-item"><a href="#"><img src="./static/penwuchuchen.png" /></a></div>
							<div class="mui-slider-item"><a href="#"><img src="./static/penwuchuchou.png" /></a></div>
							<div class="mui-slider-item"><a href="#"><img src="./static/penwujiangwen.png" /></a></div>
							<div class="mui-slider-item"><a href="#"><img src="./static/penwujiashi.png" /></a></div>
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
								<li class="mui-table-view-cell mui-media mui-col-xs-6 wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s" v-for="p in penwujiangwen">
									<img class="mui-media-object" :src="p.thumb | addPrefix">
									<div class="mui-media-body">{{ p.title }}</div>
								</li>
							</ul>
						</div>
					</div>

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
	import $ from 'jquery';
	import WOW from 'wowjs';

	import wsConfig from './config.js';

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
			'nav-bottom': navBottom
		},
		created: function () {
			// 7 获取喷雾降温列表
			$.get( "http://wushengsy.com/apis/case/getPenWuJiangWenList.php", ( data ) => {
				this.penwujiangwen = data.slice(0, this.limit);
			} );
		},
		mounted: function () {
			mui( '.mui-scroll-wrapper' ).scroll( {
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			} );

			new WOW.WOW().init();
		},
		filters: {
			addPrefix: function ( src ) {
				return wsConfig.imgPrefix + src;
			}
		}
	}
</script>

<style scoped>

</style>