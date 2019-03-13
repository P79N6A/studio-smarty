<?php
$configs = [
    'uri'=>'http://www.lac-studio.com',
    'nav' =>[
        'evaluation'=>['name'=>'作品评估','url'=>'/evaluation.php?key=evaluation','key'=>'evaluation'],
        'charting'=>['name'=>'制图教室','url'=>'/list.php?key=charting','key'=>'charting'],
        'class'=>['name'=>'精品课程','url'=>'/list.php?key=class','key'=>'class'],
        'case'=>['name'=>'成功案例','url'=>'/list.php?key=case','key'=>'case'],
        'teacher'=>['name'=>'入驻师资','url'=>'/list.php?key=teacher','key'=>'teacher'],
        'index'=>['name'=>'LAC首页','url'=>'/','key'=>'index'],
    ],
    'databases'=>[
        'adapter'  => 'Mysql',
        'host'     => '127.0.0.1',
        'port'	   => 3306,
        'username' => 'studio',//'root',
        'password' => 'studio@20190313',//'password-for@mysql',
        'dbname'   => 'studio',
        'charset'  => 'UTF8',
    ]
];