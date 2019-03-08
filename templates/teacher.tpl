{include file="header.tpl"}

<div>
    <div style="width:100%; background:url({$uri}/public/downimg/{$teacher['teacher_banner_backimg']}) center; background-size:cover; height:500px;">
        <div style="width:1174px; margin:auto;">
            <div style="height:100px;"></div>
            <div style="width:390px; color:#ffffff; text-align:justify;">
                <div style="min-height:35px; text-align:left;">
                    <span style="font-size:28px; ">{$teacher['teacher_banner_title']}</span>
                </div>

                <div style="height:13px;"></div>
                <span style="font-size:14px;  line-height:24px;">{$teacher['teacher_banner_text']}</span>
            </div>
            <div style="height:40px;"></div>
            <div style="border:1px #ffffff solid; width: 150px; height:35px; color:#ffffff; font-size:18px; text-align:center; line-height:35px;">
            </div>
        </div>
    </div>
    <div style="width:100%;">
        <div style="width:1174px; position: relative;  margin:auto; top:-50px; border-radius:60px;">
            <div style="width:120px; height:120px; overflow: hidden; margin:auto; border-radius:60px;">
                <img src="{$uri}/public/downimg/{$teacher['picture']}" width="120">
            </div>
        </div>
    </div>
    <div style="width:100%;  position: relative; top:-15px;">
        <div style="width:1174px; margin:auto; text-align:center;">
            <div style="width:1174px; margin:auto;">
                <div style="text-align:center; margin:auto; border-bottom:1px #d5d5d5 solid; width:237px; font-size:22px; font-weight:bold;">
                    <span style="text-transform:uppercase;">{$teacher['english_name']}</span>
                    <div style="height:7px;"></div>
                </div>
                <div style="text-align:center; margin:auto; font-size: 18px; color:#666666; text-transform:uppercase;">
                    <div style="height:3px;"></div>
                    <span>About Me</span>
                </div>
            </div>
            <div style="height:50px;"></div>
            <div style="width:100%; background:url(/public//resources/index/index/img/teacher_aboutback.jpg) bottom center; background:none; height:auto; border:1px #e4e4e4 solid;">
                <div style="width:1174px; margin:auto; font-size:15px; color:#727171;">

                    <div style="clear:both; height:25px;"></div>
                    <div style="width:358px; float:left; margin-left:50px;">
                        <div style="width:358px; font-size:14px; font-weight: bold; text-align:left;">
                            <span style="color:#000000;"><span style="color:#727171;">WHO</span> AM I？</span>
                            <div style="height:7px;"></div>
                        </div>

                        <div style="height:7px;"></div>
                        <div style="width:358px; text-align:left;">
                            <span style="font-size: 14px; line-height:21px;">所在城市：</span>
                        </div>

                        <div style="height:7px;"></div>
                        <div style="width:358px; text-align:left;">
                            <span style="font-size: 14px; line-height:21px;">毕业学院：{$teacher['finish_school']}</span>
                        </div>

                        <div style="height:7px;"></div>
                        <div style="width:358px; text-align:left;">
                        </div>

                        <div style="height:7px;"></div>

                        <div style="background:#dbdbdb; width:100px; bottom:70px; height:25px; font-size: 14px; line-height:25px;">Follow&nbsp;</div>
                    </div>
                    <div style="width:358px; float:left;">
                        <div style="width:358px; font-size:14px; font-weight: bold; text-align:left;">
                            <span style="color:#000000;">授课教学</span>
                            <div style="height:7px;"></div>
                        </div>

                        <div style="height:7px;"></div>
                        <div style="width:358px; text-align:left;">
                            <span style="font-size: 14px; line-height:21px;">辅导方向：{$teacher['profression']}</span>
                        </div>

                        <div style="height:7px;"></div>
                        <div style="width:358px; text-align:left;">
                            <span style="font-size: 14px; line-height:21px;">是否面授：{if $teacher['teacher_status'] eq 1}是{else}否{/if}</span>
                        </div>
                        <div style="height:7px;"></div>

                    </div>
                    <div style="width:358px; float:left;">
                        <div style="width:358px; font-size:14px; font-weight: bold; text-align:left;">
                            <span style="color:#000000;">工作经历</span>
                            <div style="height:7px;">{$teacher['describe']}</div>
                        </div>

                        <div style="height:7px;"></div>
                        <div style="width:358px; text-align:left; height:50px;">
                            <span style="font-size: 14px; line-height:21px;"></span>
                        </div>

                        <div style="color:#000000; position:absolute; width:100px; bottom:70px; height:25px; font-size: 14px; line-height:25px; font-weight:bold; text-align:left;">
                            联系我们<img src="public/images/teacher_arrow.png" style="height:10px; margin-left: 5px;">
                        </div>
                    </div>

                    <div class="clear h25"></div>
                </div>
            </div>
            <div class="clear h40"></div>


        </div>
    </div>

    <div class="clear"></div>





    <div>

        <div style="width:1174px; margin:auto; text-align:center;">
            <div style="width:1174px; margin:auto;">
                <div style="text-align:center; margin:auto; border-bottom:1px #d5d5d5 solid; width:237px; font-size:22px; font-weight:bold;">
                    <span style="">设计作品</span>
                    <div style="height:7px;"></div>
                </div>
                <div style="text-align:center; margin:auto; font-size: 18px; color:#666666; text-transform:uppercase;">
                    <div style="height:3px;"></div>
                    <span>Design Works</span>
                </div>
            </div>
            <div class="h55"></div>



            <div>

                <div style="width:270px; float:left;">
                    <img src="{$uri}/public/downimg/{$teacher['teacher_works_img_one']}" width="270" height="370">
                    <img src="{$uri}/public/downimg/{$teacher['teacher_works_img_five']}" width="270" height="263" style="margin-top:30px;">
                </div>
                <div style="width:270px; float:left; margin-left:30px;">
                    <img src="{$uri}/public/downimg/{$teacher['teacher_works_img_two']}" width="270" height="263">
                    <img src="{$uri}/public/downimg/{$teacher['teacher_works_img_six']}" width="270" height="370" style="margin-top:30px;">
                </div>
                <div style="width:270px; float:left; margin-left:30px;">
                    <img src="{$uri}/public/downimg/{$teacher['teacher_works_img_three']}" width="270" height="370">
                    <img src="{$uri}/public/downimg/{$teacher['teacher_works_img_seven']}" width="270" height="263" style="margin-top:30px;">
                </div>
                <div style="width:270px; float:left; margin-left:30px;">
                    <img src="{$uri}/public/downimg/{$teacher['teacher_works_img_four']}" width="270" height="263">
                    <img src="{$uri}/public/downimg/{$teacher['teacher_works_img_eight']}" width="270" height="370" style="margin-top:30px;">
                </div>

            </div>
        </div>
    </div>


    <div class="clear h60"></div>

</div>


{include file="foot.tpl"}