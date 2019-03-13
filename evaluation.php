<?php
/**
 * Example Application
 *
 * @package Example-application
 */
require './configs/configs.php';
require './libs/Smarty.class.php';
if($_POST){
    $dsn = "mysql:dbname={$configs['databases']['dbname']};host={$configs['databases']['host']}";
    $dbh = new PDO($dsn, $configs['databases']['username'], $configs['databases']['password']);
    $dbh->exec('set names utf8');

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

        $sql = "INSERT INTO `evaluation` (`student_name` ,`student_school`,`student_major`,`student_gpa`,`student_langscore`,`student_weixin`,`student_tel`,`student_email`,`student_file`,`student_software`,`student_country`,`student_applyschool`,`student_applymajor`,`student_applytype`,`student_time`) VALUES ('{$tmp['student_name']}', '{$tmp['student_school']}','{$tmp['student_major']}','{$tmp['student_gpa']}','{$tmp['student_langscore']}','{$tmp['student_weixin']}','{$tmp['student_tel']}','{$tmp['student_email']}','{$tmp['student_file']}','{$tmp['student_software']}','{$tmp['student_country']}','{$tmp['student_applyschool']}','{$tmp['student_applymajor']}','{$tmp['student_applytype']}','{$tmp['student_time']}')";
        $stmt = $dbh->exec($sql);
        if(empty($stmt) || $dbh->errorCode()!= 0000){
            die(json_encode(['status'=>500,'messages'=>'信息错误']));
        }else{
            die(json_encode(['status'=>200,'messages'=>'提交成功']));
        }
    }elseif (isset($_POST['uploads']) && $_POST['uploads'] == 'yes'){
        require_once ('./vendor/uploads/fileUploadPlugin.php');
        $uploadsObj = new fileUploadPlugin();
        $res = $uploadsObj->upload('file',$_FILES);
        die($res);
    }
}else{

    $smarty = new Smarty;
    $smarty->cache_dir = 'cache';
    $smarty->debugging = false;
    $smarty->caching = false;
    $smarty->cache_lifetime = 120;
    $smarty->assign('nav',$configs['nav']);

    if(isset($_GET['export']) && $_GET['export'] === 'Yes'){

        $data = [];
        $dsn = "mysql:dbname={$configs['databases']['dbname']};host={$configs['databases']['host']}";
        $dbh = new PDO($dsn, $configs['databases']['username'], $configs['databases']['password']);
        $dbh->exec('set names utf8');
        $page = intval(isset($_GET['page']) ? $_GET['page'] : 1);
        $nums = intval(isset($_GET['nums']) ? $_GET['nums'] : 2);
        $start = intval(($page-1)*$nums);

        $sql = "SELECT * FROM `evaluation` ORDER BY `id` DESC LIMIT {$start},{$nums}";
        $res = $dbh->prepare($sql);
        $res->execute();
        if($dbh->errorCode() == 0000){
            $data = $res->fetchAll(PDO::FETCH_ASSOC);

            $countSql = "SELECT COUNT(`id`) FROM `evaluation`";
            $countRes = $dbh->prepare($countSql);
            $countRes->execute();
            $count = $countRes->fetch();

            require_once ('./vendor/pages/numPage.php');
            $pageObj = new numPage($count[0],$page,$nums);
            $smarty->assign('pageStr',$pageObj->GetPager());
        }
        $smarty->assign('data',$data);
        $smarty->display('export.tpl');

    }else{
        $smarty->assign('nav',$configs['nav']);
        $smarty->display('evaluation.tpl');
    }

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
