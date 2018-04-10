<template>
  <div class="mui-card">
    <div class="mui-card-header">
      {{ headerText }}
      <a href="javascript:;" class="mui-pull-right">更多<span class="mui-icon mui-icon-arrowright"></span></a>
    </div>
    <div class="mui-card-content">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="i in IndustryNews">
          <router-link :to="'/newsDetail/' + i.id" @tap.native="toDetail(i.id)">
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
    },
    methods: {
      toDetail: function ( id ) {
        window.location.href = '/newsDetail/' + id;
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
