// 统一请求路径前缀在libs/axios.js中修改
import {
	postJsonRequest,
	apiUrl
} from '@/utils/request.js';
let third_openApi = {}


/**
 * @desc 第三方列表
 * @param {*} 参数 
 */
third_openApi.thirdList = (params) => {
	return postJsonRequest('/enterprise/third/index', params)
}
/**
 * @desc 附近的人列表
 * @param {*} 参数 
 */
third_openApi.near_user_List = (params) => {
	return postJsonRequest('/enterprise/third/nearby_index', params)
}
/**
 * @desc 公开的群列表
 * @param {*} 参数 
 */
third_openApi.opengroup_List = (params) => {
	return postJsonRequest('/enterprise/third/open_group_list', params)
}


export default third_openApi;
