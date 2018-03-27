const type = "mobile", version = "1.0.0", userAgent = navigator.userAgent;

import $ from 'jquery';
import wsConfig from './config.js';

const request = ( url, cb ) => {
	let postData = {
		type,
		version,
		userAgent,
		dateTime: Date.now()
	};

	$.get( wsConfig.ajaxPrefix + url, postData, ( data ) => {
		cb( data );
	} );
};


export default {
	request
};