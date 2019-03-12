<?php
/**
 * Example Application
 *
 * @package Example-application
 */
require './configs/configs.php';
if(isset($_POST['submit']) && $_POST['submit'] == 'yes'){
echo 'aaa';exit;
    echo  '<pre>';
    var_dump($_FILES);
    exit;
    $result = [
        'status'=>200,
        'info'=>'ok',
        'messages'=>'success',
        'data'=>$_POST,
        'config'=>$configs['databases']
        ];


    $dsn = "mysql:dbname={$configs['databases']['dbname']};host={$configs['databases']['host']}";
    $dbh = new PDO($dsn, $configs['databases']['username'], $configs['databases']['password']);
    $res = $dbh->query('select * from evaluation');

//    mysql_connect($configs['databases']['host'],$configs['databases']['username'],$configs['databases']['password']);
//    mysql_query("set names ${$configs['databases']['charset']}");//编码转化
//    mysql_select_db($configs['databases']['dbname']);
//    $res = mysql_query("select * from evaluation");
    var_dump($res);

    die(json_encode($result));
}else{

    require './libs/Smarty.class.php';
    $smarty = new Smarty;
    $smarty->cache_dir = 'cache';
    $smarty->debugging = false;
    $smarty->caching = false;
    $smarty->cache_lifetime = 120;

    $smarty->assign('nav',$configs['nav']);
    $smarty->display('evaluation.tpl');
}

