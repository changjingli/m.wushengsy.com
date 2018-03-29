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
				<div class="mui-scroll">
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
							<div class="mui-slider-item"><a href="#"><img src="./static/penwujiashi.png"
							                                              alt="喷雾加湿" /></a>
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
								<li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="(p, idx) in penwujiangwen"
								    :key="idx">
									<img class="mui-media-object" :src="p.thumb | addPrefix" :alt="p.title">
									<div class="mui-media-body">{{ p.title }}</div>
								</li>
							</ul>
						</div>
					</div>

					<div class="mui-card">
						<div class="mui-card-header">合作伙伴</div>
						<div class="mui-card-content">
							<div class="mui-slider">
								<div class="mui-slider-group">
									<template v-for="(par) in partner">
										<div class="mui-slider-item">
											<ul class="mui-table-view mui-grid-view mui-grid-9">
												<li class="mui-table-view-cell mui-media mui-col-xs-4"
												    v-for="(p, idx) in par" :key="idx">
													<img class="mui-media-object" :src="p.imagesPath | addPrefix"
													     :alt="p.title">
													<div class="mui-media-body">{{ p.title }}</div>
												</li>
											</ul>
										</div>
									</template>
								</div>
								<div class="mui-slider-indicator">
									<div class="mui-indicator mui-active"></div>
									<div class="mui-indicator"></div>
								</div>
							</div>
						</div>
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
				partner: [],
			}
		},
		components: {
			'nav-left': navLeft,
		},
		created: function () {
			// 7 获取喷雾降温列表
			util.request( 'apis/case/getPenWuJiangWenList.php', ( data ) => {
				this.penwujiangwen = data.slice( 0, this.limit );
			} );
			// 12 获取合作伙伴列表
			util.request( 'apis/system/getPartnerList.php', ( data ) => {

				const split = 5; // 6个
				let index = 0;
				let arr = [];
				data.forEach( ( item, idx ) => {

					if ( !$.isArray( arr[ index ] ) ) {
						arr[ index ] = [];
					}

					arr[ index ].push( item );

					index = idx > 0 && idx % split === 0 ? ++index : index;
				} );

				this.partner = arr;

			} );
		},
		mounted: function () {
			mui( '.mui-scroll-wrapper' ).scroll( {
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			} );

			console.log( 'mui(\'mui-slider\')', mui( '.mui-slider' ) );

			mui( '.mui-slider' ).each( ( idx, ele ) => {
				mui( ele ).slider();
			} );
		},
		filters: {
			addPrefix: function ( src ) {
				return wsConfig.imgPrefix + src;
			}
		}
	}
</script>

<style scoped>
	.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
		height: 82px;
		object-fit: cover;
	}
</style>