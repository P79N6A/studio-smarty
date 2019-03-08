<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="shortcut icon" href="public/images/favicon.ico" type="image/x-icon" />

    {assign var=getKey value=$smarty.get.key|default:'index' }
    <title>{$nav[$getKey]['name']}</title>

    <script src="public/js/jquery-2.1.4.min.js"></script>
    <script src="public/js/header.js"></script>
    <link rel="stylesheet" href="public/css/common.css">
    <script>
        var detailsUri = '/teacher.php?key=teacher';
        {if $getKey eq case}
            var detailsUri = '/details.php?key=case';
        {/if}
    </script>
</head>
<body style="margin: auto;">

<div id="titlebig">

    <div class="menu" style="position: fixed; width:100%; margin: auto; box-shadow: #f0eeee 0px 1px 5px 1px ; z-index: 199; background: #fff; min-width:760px;">
        <div class="h10"></div>
        <div id="cflist">
            <div style="float: left; margin-left: 150px; margin-top: 15px; " id="cfheadleft">
                <div style="height:35px; width:75px; float:left; " name="menudiv">
                    <img src="public/images/indexlogo.jpg" width="200" style="margin-top:-2px; margin-left: -8px;">
                </div>
            </div>

            <div style="float: right; margin-right:30px;margin-right:110px; margin-top: 20px;" id="cfheadright">
                {foreach $nav as $k=>$n }
                    <a href="{$n['url']}">
                        <div style="height:35px; width:75px; float:right; margin-right:60px;" name="menudiv" class="cf">
                            <div><span style="color:#3e3a39; font-size:14px;">{$n['name']}</span></div>
                            {if $getKey eq $k}
                                <div class="h10"></div>
                                <div style="height:4px; width:100%; text-align:center; background:url(public/images/menu_underline.png) center; background-repeat:no-repeat;"></div>
                            {/if}
                        </div>
                    </a>
                {/foreach}
            </div>
        </div>
    </div>
    <div class="menu"></div>
</div>

<div class="left-menu">

    <div class="h10"></div>
    <div>
        <a data-pin-do="buttonBookmark" data-pin-custom="true" href="javascript:void(0);">
            <img src="public/images/right_p.png" height="40">
        </a>
    </div>

    <div class="clear h10"></div>
    <div class="showcalldiv"></div>

    <div class="clear h10"></div>
    <a href="javascript:void(0);">
        <div class="left-menu-yun"></div>
    </a>

    <div class="clear h10"></div>
    <a href="javascript:void(0);" onclick="window.scrollTo(0,0);">
        <div class="left-menu-top"></div>
    </a>

</div>

<div class="callshowdiv">
    <div >
        <span style="">联系电话：400-863-5573</span>
    </div>
</div>