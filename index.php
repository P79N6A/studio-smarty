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

$Api = new ApiUtil();
$banner = $Api::appGet($configs['uri'].'/index/getinfo/zzw_get_banner');

$charting = $Api::appGet($configs['uri'].'/index/getinfo/get_matter?pagenum=1');
$smarty->assign('charting',array_slice($charting['data'],0,8));

$smarty->assign('banner',$banner['data']);
$smarty->assign('nav',$configs['nav']);
$smarty->assign('uri',$configs['uri']);

$smarty->display('index.tpl');
