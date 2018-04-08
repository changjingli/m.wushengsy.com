<template>
    <div class="mui-card">
        <div class="mui-card-header">
            行业新闻
            <a href="javascript:;" class="mui-pull-right">更多<span class="mui-icon mui-icon-arrowright"></span></a>
        </div>
        <div class="mui-card-content">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media" v-for="i in IndustryNews">
                    <a href="javascript:;">
                        <div class="mui-media-body">
                            {{ i.title }}
                            <time :datetime="i.time" class="new-date mui-ellipsis">{{ i.time }}</time>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
	export default {
		name: 'NewsDetailComponent',
		props: {
			headerText: '',
			IndustryNews: {},
		}
	}
</script>
<style scoped>

    .new-date {
        display: block;
        color: #8f8f94;
    }
</style>