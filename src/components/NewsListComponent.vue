<template>
  <div class="mui-scroll">
    <div class="mui-card" v-cloak>
      <div class="mui-card-header">
        {{ newsTitle }}
      </div>
      <div class="mui-card-content">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-media" v-for="i in newsList">
            <router-link :to="'/newsDetail/' + i.id" @tap.native="toDetail(i.id)" class="mui-navigate-right">
              <div class="mui-media-body">
                {{ i.title }}
                <time :datetime="i.time" class="new-date mui-ellipsis">{{ i.time }}</time>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import util from '@/util';

  export default {
    name: 'NewsListComponent',
    data () {
      return {
        newsTitle: '',
        newsList: '',
      }
    },
    created () {
      this.fetchData();
      console.log( 'created' )
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        let type = this.$route.params.type;
        let ajaxUrl = 'apis/news/';

        this.newsTitle = type === 'CompanyNews' ? '雾胜动态' : '行业新闻';
        ajaxUrl += type === 'CompanyNews' ? 'getCompanyNewsList.php' : 'getIndustryNewsList.php';

        util.get( ajaxUrl, ( data ) => {
          this.newsList = data;
        } );
      },
      // 跳转新闻详情页
      toDetail: function ( id ) {
        window.location.href = '/newsDetail/' + id;
      },
    },
    updated () {
      mui( '.mui-scroll-wrapper' ).scroll( {
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      } );
    }
  }
</script>
<style scoped>
  .new-date {
    display: block;
    color: #8f8f94;
  }
</style>
