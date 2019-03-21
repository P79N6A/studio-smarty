{include file="header.tpl"}

{include file="banner.tpl"}

{assign var=currentKey value=$smarty.get.key|default:'index' }

{if $currentKey|in_array:[charting,case] }
    {if $currentKey eq case}
        <style>
            .mattershowimg{
                width: 99%;
                height: auto;
            }
        </style>
        <script src="public/js/case.js"></script>
    {else}
        <script src="public/js/charting.js"></script>
    {/if}
    <link rel="stylesheet" href="public/css/charting.css">
{elseif $currentKey eq class}
    <script src="public/js/class.js"></script>
    <link rel="stylesheet" href="public/css/class.css">
{else}
    <script src="public/js/list.js"></script>
    <link rel="stylesheet" href="public/css/list.css">
{/if}


<div class="h15"></div>


<div class="body" datatype="{$currentKey}">
    {if $category and $currentKey neq case}
        {assign var=i value=1}
        {foreach $category as $key=>$val}
            {if $key|in_array:$classArr}
                <div class="category-div alertclass{$i}" data-val="{$i}">
                    <div class="search-name-div">
                        <span class="{if $i eq 1}xxshowname{elseif $i eq 2}zyshowname{elseif $i eq 3}lcshowname{elseif $i eq 4}lxshowname{elseif $i eq 5}fgshowname{/if}" data-val="{$val['itemname']}">{$val['itemname']}</span>
                        <div class="search-img-div"><img src="public/images/search_jt1.png" width="10"></div>
                        <div class="clear" data-i="{$i++}"></div>
                    </div>
                </div>
            {/if}
        {/foreach}
    {/if}
    {if $currentKey neq case }
        <div class="search-box">
            <div>
                <input type="text" class="hotsearch" value="" placeholder="">
                <img src="public/images/search.png" class="hotsearchbutton">
                <div class="clear"></div>
            </div>
        </div>
    {/if}
</div>

<div class="clear"></div>

{if $category and $currentKey neq case}
    {assign var=j value=1}
        {foreach $category as $key=>$val}
            {if $key|in_array:$classArr}
                <div class="search-class alertsearchdiv{$j}">
                    <div class="clear h20"></div>
                    <div class="search-class-box">
                        <div class="clear h10"></div>
                        <div class="{if $j eq 1}xxdiv{elseif $j eq 2}zydiv{elseif $j eq 3}lcdiv{elseif $j eq 4}lxdiv{else}fgdiv{/if}"><span choosevalue="">全部</span></div>
                            {foreach $category[$key]['data'] as $c}
                                 <div class="{if $j eq 1}xxdiv{elseif $j eq 2}zydiv{elseif $j eq 3}lcdiv{elseif $j eq 4}lxdiv{else}fgdiv{/if}"><span choosevalue="{$c['itemid']}">{$c['itemname']}</span></div>
                            {/foreach}
                        <div class="clear h10" data-i="{$j++}"></div>
                    </div>
                </div>
            {/if}
        {/foreach}
{/if}
<div class="clear h20"></div>


<div style="background:url(public/images/teacherline.png) center; height:1px; width:100%;"></div>
<div class="clear h20"></div>


<div class="body">

        <!-- left -->
        <div class="{if $currentKey|in_array:[charting,class,case]}w266{else}w180{/if} fl addleftdiv"></div>

        <!-- middle -->
        <div class="{if $currentKey|in_array:[charting,class,case]}w266 mf37{else}w180 mf64{/if} fl addmiddlediv"></div>

        <div class="{if $currentKey|in_array:[charting,class,case]}w266 mf37{else}w180 mf64{/if} fl addmiddlediv2"></div>

        {if !$currentKey|in_array:[charting,case] }
            <div class="w180 mf64 fl addmiddlediv3"></div>
        {/if}

        <!-- right -->
        <div class="{if $currentKey|in_array:[charting,case] }w266 mf37{else}w180 mf64{/if} fl addrightdiv"></div>

        <div class="clear"></div>
        <div style="text-align:center; height:80px;">
            {if $currentKey|in_array:[charting,class,case]}
                <img src="public/images/search_down2.png" style="margin-left:10px;" class="getnextmatter">
            {else}
            <div style="height:30px; width:120px; cursor:pointer; border:1px #d5d5d5 solid; margin:auto; line-height:30px;" class="getnextteacher">
                <span>MORE+</span>
            </div>
            {/if}
        </div>

</div>

{if $currentKey|in_array:[charting,case] }
    <div class="matteralertgrey"></div>
    <div id="style-1" class="matteralertshow">
        <div class="closematterdiv" style="font-family:'黑体'; font-size:32px; float:right; margin-right: 20px; cursor:pointer; color:#444444; margin-top: 10px;">
            <img src="public/images/close.png" width="22" height="22">
        </div>
        <div style="width:1080px; height:100%; margin:auto;" class="matteralertshowss">
            <div class="h50"></div>
            <div class="matter_alertdiv_left" style="background-color:#ffffff; width:750px; float:left; height:auto; text-align: center; border:1px #d5d5d5 solid; -moz-box-shadow:0 0 5px #d5d5d5; -webkit-box-shadow:0 0 5px #d5d5d5; box-shadow:0 0 5px #d5d5d5;">
                <div class="h15"></div>
                <div style="width:710px; margin: auto;">
                    <div class="usercollect" imgdetailid="5093" style="cursor:pointer; width:70px; height:30px; float:right; background:#f2f2f2; border:1px #d5d5d5 solid; line-height:30px; font-size: 14px; border-radius:5px; margin-top: 10px;">收藏</div>
                    <div id="downdemo" class="usercollect2" imgdetailid="0" style="cursor: pointer; width: 70px; height: 30px; float: right; background: rgb(242, 242, 242); border: 1px solid rgb(213, 213, 213); line-height: 30px; font-size: 14px; border-radius: 5px; margin-top: 10px; margin-right: 15px; display: none;"><span style="color:#040000;">素材下载</span></div>
                    <div style="width:610px; font-size: 18px; color:#040000; text-align:left;"><span class="mattershowtitle">Rebecca.Ploj-3</span></div>
                    <div class="h5"></div>
                    <div style="width:610px; font-size: 14px; color:#9fa0a0; text-align:left;" class="mattershowkeyword">
                        <span style=" font-size: 14px; color:#9fa0a0;" class="keywordsspan">

                    </div>
                </div>
                <div class="h15"></div>
                <div style="text-align: center;" class="matterbig">
                    <a href="" target="_blank" title="点击查看高清大图" class="matterimga"><img src="" width="710" class="mattershowimg"></a>
                </div>
                <div style="text-align: center; display:none;" class="mattersmall">
                    <img src="" class="mattershowimg">
                </div>

                <div class="h15"></div>
                <div class="mattershowdetail" style="width:710px; margin:auto;"></div>

                <div class="h15"></div>
            </div>
            <div class="matter_alertdiv_right">
                <div class="h15"></div>
                <div style="width:280px; margin: auto; font-size: 16px; color:#040000;"><span>推荐图片</span></div>
                <div class="h15"></div>
                <div style="overflow-y:scroll; height:425px; width:303px; position:relative;" id="style_img">
                    <div class="matter_left_img">
                    </div>
                    <div class="matter_middle_img">

                    </div>
                    <div class="matter_right_img">

                    </div>
                </div>
            </div>

            <div class="clear h50"></div>
        </div>

    </div>

{/if}


{include file="foot.tpl"}