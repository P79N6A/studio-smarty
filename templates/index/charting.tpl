{if $charting }
<div class="h85"></div>

<div class="home-color case-height">

    <div class="h45"></div>
    <div class="home-title">
        <span>制图教室</span>
        <div class="h5"></div>
    </div>
    <div class="home-title-subheading">
        <div class="h3"></div>
        <span>Supervisors</span>
    </div>
    <div class="h15"></div>
    <div class="home-desc"><span>实力树立口碑，用心保证质量！ 这里是真实的成功案例，也是你前进路上的标榜</span></div>
    <div class="h40"></div>


    <div class="home-div">
        {foreach $charting as $key=>$val}
            {*<a href="javascript:void(0)">*}
                <div class="teacher-div case-div {$key%4}" {if $key%4 neq 0}style="margin-left: 38px;"{/if}>
                    <div>
                        <div style="background:url({$uri}/public/downimg/{$val['img_top']}) center center; width:262px; height:262px; background-size:cover;"></div>
                    </div>
                    <div class="teacher-desc">
                        <div class="h20"></div>
                        <div class="teacher-name">
                            <span>{$val['theme']}</span>
                        </div>
                        <div class="h15"></div>
                        <div class="teacher-tag">{$val['project']}</div>
                    </div>
                </div>
            {*</a>*}
            {if $key%4 eq 3}
                <div class=" clear h40"></div>
            {/if}
        {/foreach}
    </div>

    <div class="teacher-menus case-menus">
        <div class="changeteacher" onclick="window.location.href='/list.php?key=charting'">
            <span class="teacher-more">MORE+</span>
        </div>
    </div>

</div>
{/if}