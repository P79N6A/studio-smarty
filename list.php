<?php
/**
 * Example Application
 *
 * @package Example-application
 */
require './libs/Smarty.class.php';
require './configs/configs.php';
require './configs/json.php';
require './ApiUtil.php';

$smarty = new Smarty;
$smarty->cache_dir = 'cache';
$smarty->debugging = false;
$smarty->caching = false;
$smarty->cache_lifetime = 120;

$api = new ApiUtil();
$banner = $api::appGet($configs['uri'].'/index/getinfo/zzw_get_banner');

$classArr = [];
switch ($_GET['key']){
    case 'teacher' :
        $classArr = ['F1','F9','F11','F12'];
        break;
    case 'charting' :
        $classArr = ['F11','F1','F2','F3','F4'];
        break;
    default :
        $classArr = ['F1','F5','F6','F11'];
        break;
}

$smarty->assign('classArr',$classArr);
$smarty->assign('category',json_decode($json,true));
$smarty->assign('banner',$banner['data']);
$smarty->assign('nav',$configs['nav']);
$smarty->assign('uri',$configs['uri']);

$smarty->display('list.tpl');
