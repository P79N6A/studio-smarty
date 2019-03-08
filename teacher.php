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
$teacher = $api::appGet($configs['uri']."/index/getinfo/zzw_get_teacherinfo?teacher_id={$_GET['id']}");
$smarty->assign('teacher',$teacher['data'][0]);

$smarty->assign('nav',$configs['nav']);
$smarty->assign('uri',$configs['uri']);

$smarty->display('teacher.tpl');
