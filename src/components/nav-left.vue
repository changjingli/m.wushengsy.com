<template>
	<!-- 菜单容器 -->
	<aside class="mui-off-canvas-left mui-transitioning" id="offCanvasSide">
		<div class="mui-scroll-wrapper">
			<div class="mui-scroll">
				<!-- 菜单具体展示内容 -->
				<ul class="mui-table-view mui-card">
				    <li class="mui-table-view-cell mui-collapse"> 
				        <a href="javascript:;">首页</a>
				    </li>
				    <li class="mui-table-view-cell mui-collapse"> 
				        <a class="mui-navigate-right" href="javascript:;">案例展示</a>
				        <ul class="mui-table-view mui-card">
				        	<li class="mui-table-view-cell">
				        		<a href="javascript:;">喷雾降温</a>
				        	</li>
				        	<li class="mui-table-view-cell">
				        		<a href="javascript:;">喷雾除尘</a>
				        	</li>
				        	<li class="mui-table-view-cell">
				        		<a href="javascript:;">景观造雾</a>
				        	</li>
				        	<li class="mui-table-view-cell">
				        		<a href="javascript:;">喷雾加湿</a>
				        	</li>
				        	<li class="mui-table-view-cell">
				        		<a href="javascript:;">喷雾除臭</a>
				        	</li>
				        </ul>
				    </li>
				    <li class="mui-table-view-cell mui-collapse"> 
				        <a class="mui-navigate-right" href="javascript:;">产品展示</a>
				        <ul class="mui-table-view mui-card">
				        	<li class="mui-table-view-cell">
				        		<a href="javascript:;">雾胜主机</a>
				        	</li>
				        	<li class="mui-table-view-cell">
				        		<a href="javascript:;">喷头和管件</a>
				        	</li>
				        </ul>
				    </li>
				    <li class="mui-table-view-cell mui-collapse"> 
				        <a href="javascript:;">视频中心</a>
				    </li>
				    <li class="mui-table-view-cell mui-collapse"> 
				        <a href="javascript:;">联系我们</a>
				    </li>
				</ul>
			</div>
		</div>
	</aside>
</template>

<script>
	export default {
		name: "nav-left"
	}
</script>

<style scoped>

</style>