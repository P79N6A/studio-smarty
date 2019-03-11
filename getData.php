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
    $_GET['pagenum'] = $_GET['pagenum'] ? $_GET['pagenum'] : 1;
    $nums = 10;
    die(json_encode(array_slice($case,$nums*($_GET['pagenum']-1),$nums)));
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