import axios from 'axios';

const CONFIG = {
  serverApi: 'http://www.wushengsy.com',
};

const isFunction = ( fun ) => {
  return typeof fun === 'function' || Object.prototype.toString.call( fun ) === '[object Function]';
}

const get = ( url, data, successCb ) => {
  let params = {
    timeStamp: Date.now(),
  };

  url = /^http/i.test( url ) ? url : CONFIG.serverApi + url;

  if ( isFunction( data ) ) {
    successCb = data;
    data = params;
  }

  axios.get( url, { params } ).then( ( res ) => {
    isFunction( successCb ) && successCb( res );
  } ).catch( ( e ) => {
    console.error( e.message );
  } )
};

module.exports = {
  get,
};
