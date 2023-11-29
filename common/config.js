let host = '123.56.77.160';
// #ifdef  MP-WEIXIN
let env = wx.getAccountInfoSync()
if (env.miniProgram.envVersion == 'develop') {
	host = '123.56.77.160';
}
// #endif
//  #ifdef APP-PLUS || H5
if (process.env.NODE_ENV === 'development') {
	host = '123.56.77.160';
}
// #endif
const apiUrl = 'http://' + host;
const wssUrl = 'ws://' + host + '/wss';
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