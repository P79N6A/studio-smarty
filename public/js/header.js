
$(function(){
    $(".seconddiv").mouseover(function(){
        $(this).attr("style","width:100%; text-align:center; font-size:14px; color:#727171; height:30px; line-height:30px; background-color:#e5e5e5;");
    }).mouseout(function(){
        $(this).attr("style","width:100%; text-align:center; font-size:14px; color:#727171; height:30px; line-height:30px;");
    })
    $("[name='menudiv']").mouseenter(function(){
        $(this).children(".menuunderdiv").attr("style","height:4px; width:40px; text-align:center; background:#d91929; margin:auto;animation:banner 0.3s;-webkit-animation:banner 0.3s;");
    }).mouseleave(function(){
        $(this).children(".menuunderdiv").attr("style","height:4px; width:0px; text-align:center; background:#d91929; margin:auto;animation:bannerdis 0.2s;-webkit-animation:bannerdis 0.2s;");
    });


    $(".showcalldiv").mouseover(function(){
        $(".callshowdiv").show();
    }).mouseout(function(){
        $(".callshowdiv").hide();
    })
})
var uri = "http://www.lac-studio.com";
