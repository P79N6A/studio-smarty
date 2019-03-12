<?php
/**
 * Example Application
 *
 * @package Example-application
 */
require './libs/Smarty.class.php';
require './configs/configs.php';
require './ApiUtil.php';

$smarty = new Smarty;
$smarty->cache_dir = 'cache';
$smarty->debugging = false;
$smarty->caching = false;
$smarty->cache_lifetime = 120;


$api = new ApiUtil();
$data = $api::appGet($configs['uri'].'/index/getinfo/zzw_get_learninfo/id/'.$_GET['id']);
$smarty->assign('data',$data['data'][0]);

$text = $data['data'][0]['detail_text'];
$reg = '/<img src="/';
$str = '<img src="'.$configs['uri'];
$smarty->assign('text',preg_replace($reg,$str,$text));


$smarty->assign('nav',$configs['nav']);
$smarty->assign('uri',$configs['uri']);
$smarty->display('details.tpl');
