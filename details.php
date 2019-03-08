<?php
/**
 * Example Application
 *
 * @package Example-application
 */
require './libs/Smarty.class.php';
require './configs/configs.php';
$smarty = new Smarty;
$smarty->cache_dir = 'cache';
$smarty->debugging = false;
$smarty->caching = false;
$smarty->cache_lifetime = 120;
$smarty->assign('nav',$configs['nav']);
$smarty->assign('uri',$configs['uri']);
$smarty->display('details.tpl');
