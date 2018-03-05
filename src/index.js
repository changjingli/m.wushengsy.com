import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

const root = document.createElement( 'div' );
document.body.appendChild( root );

Vue.use( VueRouter );

new Vue( {
	render: (h) => h( App )
} ).$mount( root );