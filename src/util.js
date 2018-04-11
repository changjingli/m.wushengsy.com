const device = "mobile", version = "1.0.0", userAgent = navigator.userAgent;

import wsConfig from './config.js';

const get = ( url, data, cb ) => {
  let postData = {
    device,
    version,
    userAgent,
    dateTime: Date.now()
  };

  if ( isFunction( data ) ) {
    cb = data;
  } else {
    postData = Object.assign( data, postData );
  }

  $.get( wsConfig.ajaxPrefix + url, postData, ( res ) => {
    cb( res );
  } );
};

const isFunction = ( obj ) => {
  return typeof obj === 'function' && typeof obj.nodeType !== 'number';
};

export default {
  get,
  isFunction,
};
