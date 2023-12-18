let host = 'imweb.91biu.top';
// #ifdef  MP-WEIXIN
let env = wx.getAccountInfoSync()
if (env.miniProgram.envVersion == 'develop') {
	host = 'imweb.91biu.top';
}
// #endif
//  #ifdef APP-PLUS || H5
if (process.env.NODE_ENV === 'development') {
	host = 'imweb.91biu.top';
}
// #endif
const apiUrl = 'https://' + host;
const wssUrl = 'wss://' + host + '/wss';
const now = Date.now || function() {
	return new Date().getTime();
};
const isArray = Array.isArray || function(obj) {
	return obj instanceof Array;
};


export default {
	apiUrl,
	wssUrl,
	now,
	isArray
}