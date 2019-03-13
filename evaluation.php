<?php
/**
 * Example Application
 *
 * @package Example-application
 */
require './configs/configs.php';
if(isset($_POST['submit']) && $_POST['submit'] == 'yes'){

    $postData = $_POST;
    $tmp = [];
    if($postData && is_array($postData)){
        foreach ($postData as $key=>$value){
            $tmp[$key] = safe_replace($value);
        }
        $tmp['id'] = '';
    }else{
        die(json_encode(['status'=>500,'messages'=>'信息错误']));
    }


    $dsn = "mysql:dbname={$configs['databases']['dbname']};host={$configs['databases']['host']}";
    $dbh = new PDO($dsn, $configs['databases']['username'], $configs['databases']['password']);
    $dbh->exec('set names utf8');

//    $sql = 'select * from evaluation';
//    $stmt = $dbh->prepare($sql)->execute();
//    $res = $stmt->fetch();
//    var_dump($res);exit;


    $sql = "INSERT INTO `evaluation` (`student_name` ,`student_school`,`student_major`,`student_gpa`,`student_langscore`,`student_weixin`,`student_tel`,`student_email`,`student_file`,`student_country`,`student_applyschool`,`student_applymajor`,`student_applytype`,`student_time`) VALUES ('{$tmp['student_name']}', '{$tmp['student_school']}','{$tmp['student_major']}','{$tmp['student_gpa']}','{$tmp['student_langscore']}','{$tmp['student_weixin']}','{$tmp['student_tel']}','{$tmp['student_email']}','{$tmp['student_file']}','{$tmp['student_country']}','{$tmp['student_applyschool']}','{$tmp['student_applymajor']}','{$tmp['student_applytype']}','{$tmp['student_time']}')";
    $stmt = $dbh->exec($sql);
    if(empty($stmt) || $dbh->errorCode()!= 0000){
        die(json_encode(['status'=>500,'messages'=>'信息错误']));
    }else{
        die(json_encode(['status'=>200,'messages'=>'提交成功']));
    }
//    echo '<pre>';
//    var_dump($stmt);
//    var_dump(empty($stmt));
//    var_dump(empty($dbh->errorCode()))
//    var_dump($dbh->errorCode());
//    var_dump($dbh->lastInsertId());
//    var_dump($dbh->errorInfo());
//    exit;
//
//    die(json_encode($result));
}elseif (isset($_POST['uploads']) && $_POST['uploads'] == 'yes'){
    require_once ('./vendor/uploads/fileUploadPlugin.php');
    $uploadsObj = new fileUploadPlugin();
    $res = $uploadsObj->upload('file',$_FILES);
    die($res);
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



function safe_replace($string) {
    $string = str_replace('%20','',$string);
    $string = str_replace('%27','',$string);
    $string = str_replace('%2527','',$string);
    $string = str_replace('*','',$string);
    $string = str_replace('"','"',$string);
    $string = str_replace("'",'',$string);
    $string = str_replace('"','',$string);
    $string = str_replace(';','',$string);
    $string = str_replace('<','<',$string);
    $string = str_replace('>','>',$string);
    $string = str_replace("{",'',$string);
    $string = str_replace('}','',$string);
    $string = str_replace('\\','',$string);
    return $string;
}
