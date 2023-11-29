'use strict';

exports.main = async (event, context) => {
	
	const uniPush = uniCloud.getPushManager({appId:"__UNI__D1E78EC"}) //注意这里需要传入你的应用appId，用于指定接收消息的客户端
	//event为客户端上传的参数
	let data = JSON.parse(event.body)
	if(data.type=='bindCid'){
		return await uniPush.cidBindAlias(data.alias);
	}else{
		return await uniPush.sendMessage({
			"getui_alias": data.toUser, 	
			"title": data.title,	
			"content": data.content,
			"force_notification": data.force_notification ? data.force_notification : false, // 服务端推送 需要加这一句 
			"payload": data.payload
		})
	}
};
