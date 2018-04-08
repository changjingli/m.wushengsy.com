import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

import index from './components/index.vue';
import NewsDetailComponent from './components/NewsDetailComponent.vue';

const routes = [
	{
		path: '/index',
		components: index
	},
	{
		path: '/newsDetail/:id',
		components: NewsDetailComponent
	}
];

const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})

import './libs/mui/3.7.2/css/mui.min.css';

const root = document.createElement( 'div' );
document.body.appendChild( root );

Vue.use( VueRouter );

new Vue( {
	render: (h) => h( App ),
	router,
} ).$mount( root );