{include file="header.tpl"}


<div>
    <div style="width:1170px; margin:auto; border-top:1px #efefef solid;">
        <div style="height:130px; border-bottom: 1px #efefef solid;">
            <div style="width:900px; height:130px; margin: auto;">
                <div style="margin-left: 5px;">
                    <div class="h20"></div>
                    <div class="h40">
                        <span style="font-size: 23px;">{$data['title']}</span></div>
                    <div class="h35">
                        <span style="font-size: 14px; color:#c0c0c0;">
                                {$smarty.now|date_format:"%Y-%m-%d %H:%M:%S"}
                        </span>
                    </div>
                    <div class="h35">
                        <div class="w375 fr">
                        </div>
                        <span style="font-size: 14px; color:#c0c0c0;">{$data['major']} {$data['project']} {$data['drawing']}{$data['theme']}</span>
                    </div>
                </div>
            </div>
        </div>


        <div style="width:900px; margin:auto;" class="detailtextdiiv">
            <div class="h20"></div>
            {$text}
        </div>



     </div>
</div>




{include file="foot.tpl"}