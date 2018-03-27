<template>
	<nav class="mui-bar mui-bar-tab">
		<a class="mui-tab-item mui-active">
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</a>
		<a class="mui-tab-item">
			<span class="mui-icon mui-icon-phone"></span>
			<span class="mui-tab-label">电话</span>
		</a>
		<a class="mui-tab-item">
			<span class="mui-icon mui-icon-qq" href="#popover_qq"></span>
			<span class="mui-tab-label">QQ</span>
		</a>
		<a class="mui-tab-item">
			<span class="mui-icon mui-icon-gear"></span>
			<span class="mui-tab-label">设置</span>
		</a>
		<div id="popover_qq" class="mui-popover">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell"><a href="javascript:;" @tap="gotoQQ($event)">上海雾盛实业有限公司</a></li>
			</ul>
		</div>
	</nav>
</template>

<script>
	import wsConfig from '../config.js';

	export default {
		name: "nav-bottom",
		data () {
			return {
				qq: wsConfig.qq
			}
		},
		methods: {
			gotoQQ: function (e) {
				e.stopPropagation();
				e.preventDefault();

				window.location.href = this.qq;
			}
		}
	}
</script>

<style scoped>

</style>