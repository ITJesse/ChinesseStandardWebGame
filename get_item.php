<?php
$itemSetId = rand(900, 1074);
$itemSet = file_get_contents("http://www.battlenet.com.cn/api/wow/item/set/".$itemSetId);
$itemSetData = json_decode($itemSet);
if(!isset($itemSetData->status) && isset($itemSetData->id)){
	$itemId = $itemSetData->items[rand(0, count($itemSetData->items) - 1)];
	$item = file_get_contents("http://www.battlenet.com.cn/api/wow/item/".$itemId);
	$itemData = json_decode($item);
	if(!isset($itemData->status) && isset($itemData->id)){
		echo $itemData->name;
	}else{
		echo "failed";
	}
}else{
	echo "failed";
}