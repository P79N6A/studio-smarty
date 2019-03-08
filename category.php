<?php
/**
 * Example Application
 *
 * @package Example-application
 */
require './libs/Smarty.class.php';
require './configs/configs.php';
require './ApiUtil.php';
$Api = new  ApiUtil();

echo '<pre>';
$result = $Api::appGet('http://www.lac-studio.com/index/getinfo/zzw_get_type');
$data = $result['data'];
$arr = [];


$schoole = $Api::appGet('http://www.lac-studio.com/index/getinfo/zzw_get_school');
foreach ($schoole['data'] as $v){
    $v['itemid'] = $v['id'];
    $v['itemname'] = $v['name_cn'];
    $v['fatherid'] = 11;
    $v['content'] = '';
    $v['searchid'] = '';
    $v['sort'] = 0;
    unset($v['id'],$v['name_cn']);
    $schooleArr[] = $v;
}

    foreach ($data as $key=>$value){
        if(empty($value['fatherid'])){
            $value['data'] = getCategory($value['itemid'],$data);
            $arr[$value['searchid']] = $value ;

        }
    }

    $arr['F11'] = array(
        'itemid' =>11,
        'itemname'=>'院校类别',
        'fatherid'=>0,
        'content'=>'',
        'searchid'=>'',
        'sort'=>0,
        'data'=>$schooleArr
    ) ;

var_dump(json_encode($arr));


function getCategory($itemid,$data){
    $tmp = [];
    foreach ($data as $value){
        if($value['fatherid'] == $itemid){
            $tmp[] = $value;
        }
    }
    return $tmp;
}
//["id"]=>
//        int(36)
//        ["itemid"]=>
//        int(1000002)
//        ["itemname"]=>
//        string(12) "建筑设计"
//["fatherid"]=>
//        int(1)
//        ["content"]=>
//        NULL
//        ["searchid"]=>
//        NULL
//        ["sort"]=>
//        int(10)
//echo '<pre>';var_dump($schooleArr);
//[0]=>
//    array(2) {
//    ["id"]=>
//      int(20)
//      ["name_cn"]=>
//      string(20) "AA建筑联盟学院"
//    }

exit;
