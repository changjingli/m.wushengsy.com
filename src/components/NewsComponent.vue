<template>
  <div class="mui-card">
    <div class="mui-card-header">
      {{ headerText }}
      <router-link :to="'/newList/' + type" class="mui-pull-right" @tap.native="toList()">更多<span class="mui-icon mui-icon-arrowright"></span></router-link>
    </div>
    <div class="mui-card-content">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="i in IndustryNews">
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
</template>
<script>
  export default {
    name: 'NewsComponent',
    props: {
      headerText: '',
      IndustryNews: {},
      type: ''
    },
    methods: {
      // 跳转新闻详情页
      toDetail: function ( id ) {
        window.location.href = '/newsDetail/' + id;
      },
      // 跳转分类新闻列表页
      toList: function () {
        window.location.href = '/newsList/' + this.type;
      }
    }
  }
</script>
<style scoped>
  .new-date {
    display: block;
    color: #8f8f94;
  }
</style>
