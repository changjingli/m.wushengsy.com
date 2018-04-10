<template>
    <div class="mui-scroll">
        <!-- 轮播开始 -->
        <div class="mui-slider">
            <div class="mui-slider-group">
              <div class="mui-slider-item"><a href="#"><img src="./../assets/penwuchuchen.png" alt="喷雾除尘" /></a>
                </div>
              <div class="mui-slider-item"><a href="#"><img src="./../assets/penwuchuchou.png" alt="喷雾除臭" /></a>
                </div>
              <div class="mui-slider-item"><a href="#"><img src="./../assets/penwujiangwen.png" alt="喷雾降温" /></a>
                </div>
              <div class="mui-slider-item"><a href="#"><img src="./../assets/penwujiashi.png" alt="喷雾加湿" /></a>
                </div>
              <div class="mui-slider-item"><a href="#"><img src="./../assets/jingguanzaowu.png" alt="景观造雾" /></a>
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

        <!-- 实用案例开始 -->
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
        <!-- 实用案例结束 -->

        <!-- 合作伙伴开始 -->
        <div class="mui-card">
            <div class="mui-card-header">合作伙伴</div>
            <div class="mui-card-content">
                <div class="mui-slider" id="partner">
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
        <!-- 合作伙伴结束 -->

        <!-- 雾胜动态开始 -->
        <ws-news-component :header-text="CompanyNewsTitle" :industry-news="CompanyNews" />
        <!-- 雾胜动态结束 -->

        <!-- 行业新闻开始 -->
        <ws-news-component :header-text="IndustryNewsTitle" :industry-news="IndustryNews"/>
        <!-- 行业新闻结束 -->
    </div>
</template>

<script>

	import NewsComponent from "./NewsComponent.vue";

  import wsConfig from '@/config.js';
  import util from '@/util.js';

	export default {
		name: "index",
		data: function () {
			return {
				title: wsConfig.title,
				imgPrefix: wsConfig.imgPrefix,
				limit: wsConfig.limit,
				newsLimit: wsConfig.newsLimit,

				penwujiangwen: [],
				partner: [],

				CompanyNewsTitle: '雾胜动态',
				IndustryNewsTitle: '行业新闻',
				CompanyNews: [],
				IndustryNews: [],
			}
		},
		components: {
			'ws-news-component': NewsComponent,
		},
		created: function () {
			// 7 获取喷雾降温列表
			util.get( 'apis/case/getPenWuJiangWenList.php', ( data ) => {
				this.penwujiangwen = data.slice( 0, this.limit );
			} );
			// 12 获取合作伙伴列表
			util.get( 'apis/system/getPartnerList.php', ( data ) => {

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
			// 1 获取雾胜动态列表
			util.get( 'apis/news/getCompanyNewsList.php', ( data ) => {
				this.CompanyNews = data.slice( 0, this.newsLimit );
			} );
			// 2 获取行业新闻列表
			util.get( 'apis/news/getIndustryNewsList.php', ( data ) => {
				this.IndustryNews = data.slice( 0, this.newsLimit );
			} );
		},
		mounted: function () {
			mui( '.mui-scroll-wrapper' ).scroll( {
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			} );
		},
		updated: function () {
			// 初始化[合作伙伴]轮播
			mui( '#partner' ).slider();
		},
		filters: {
			// 添加资源URL前缀
			addPrefix: function ( src ) {
				return wsConfig.imgPrefix + src;
			}
		}
	}
</script>

<style scoped>

</style>
