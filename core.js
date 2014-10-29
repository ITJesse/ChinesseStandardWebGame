alert("欢迎加入游戏")
var j = 1;
for(var i = 1; i < 10; i++){
	var a = confirm("任务-"+i+"\n是否接受任务");
	if(a){
		alert("完成任务,升到" + (++j) + "级,自动寻路到下一个任务");
	}else{
		alert("任务失败,新手奖励获得失败经验\n恭喜升到"+ (++j) + "级自动寻路到下一个任务")
	}
	if(Math.random()<1){
		var itemSetId = Math.floor(Math.random() * 1074 + 900);
		$.ajax({
			url: "./get_item.php",
			type: "get",
			async: false,
			success: 
				function(data){
					if(data.indexOf("failed") == -1){
						alert("恭喜获得神装：" + data);
					}
				}
		});
	}
}
var b = confirm("新手奖励期已过,充值可延长新手期,是否充值?")
if(b){
	window.location.href = "http://home.alipay.com/bank/paymentOnlineBank.htm";
}else{
	alert("恭喜你度过新手期,接下来的旅途请再接再励,下一个任务需要你自己寻找了哦~88")
}