<?php
/**
 * Created by PhpStorm.
 * User: pengjian
 * Date: 2019/2/27
 * Time: 12:43 PM
 */
require_once './vendor/autoload.php';
require './configs/case.php';
use \Phpbe\Lib\Captcha\Factory;

if($_GET['key']=='caseList'){
    $_GET['pagenum'] = (isset($_GET['pagenum']) && $_GET['pagenum']) ? $_GET['pagenum'] : 1;
    $nums = 10;
    $data = array();
    foreach ($case as $value){
        $data[] = structure($value);
    }

    die(json_encode(array_slice($data,$nums*($_GET['pagenum']-1),$nums)));
}else if($_GET['key']=='recommendList'){
    $key = $_GET['idKey'];
    unset($case[$key]);
    $data = array();
    foreach ($case as $value){
        $data[] = structure($value);
    }
    die(json_encode($data));
}


function structure($params){
    $arr = [
        'bottomimg_height'=>0,
        'bottomimg_width'=>0,
        'browsenums'=>rand(0,999),
        'comment'=>0,
        'detail_text'=>null,
        'drawing'=>'剖面图',
        'getcodes'=> null,
        'id'=>$params['id'],
        'img_bottom'=>'',
        'img_top'=>$params['thumb'],
        'imgfile'=>null,
        'introduction'=>'Pinterest',
        'likenums'=>rand(0,999),
        'major'=>$params['major'],
        'name_cn'=>$params['name'],
        'project'=>'流程V 设计图纸',
        'showtype'=>1,
        'theme'=>$params['theme'],
        'title'=>$params['title'],
        'topimg_height'=>$params['topimg_height'],
        'topimg_width'=>$params['topimg_width']
    ];
    return $arr;
}
// ...
//$rgbColor = array(255, 0, 0); // 红色

//$libCaptcha = Factory::getInstance();
//$libCaptcha->setFontColor($rgbColor);
//$libCaptcha->point(20); // 添加干扰点
//$libCaptcha->line(3); // 添加干扰线
//$libCaptcha->distortion();	// 扭曲
//$libCaptcha->border(1, $rgbColor); // 添加边框
//$libCaptcha->output();
//$libCaptcha->toString();
//$catcha = '1';
//$_SESSION['captcha'] = $catcha;
//echo $catcha;