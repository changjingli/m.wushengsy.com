<template>
    <div class="mui-card">
        <div class="mui-card-header">
          {{ newsTitle }}
        </div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner mui-text-justify" v-html="newsContent"></div>
        </div>
    </div>
</template>
<script>
  import util from '@/util';

	export default {
		name: 'NewsDetailComponent',
		props: {
			headerText: '',
			IndustryNews: {},
    },
    data () {
      return {
        newsTitle: '',
        newsContent: '',
      }
    },
    created () {
      this.fetchData();
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        let id = this.$route.params.id;

        util.get( 'apis/news/getNewsDetail.php', {
          id,
        }, ( data ) => {
          this.newsTitle = data.title;
          this.newsContent = data.content;
        } );
      }
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
