
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

function showError(msg) {
    $('.Validform_info').html(msg)
    var _scrollHeight = $(document).scrollTop(),//获取当前窗口距离页面顶部高度
        _windowHeight = $(window).height(),//获取当前窗口高度
        _windowWidth = $(window).width(),//获取当前窗口宽度
        _popupHeight = $('#Validform_msg').height(),//获取弹出层高度
        _popupWeight = $('#Validform_msg').width();//获取弹出层宽度
    _posiTop = (_windowHeight - _popupHeight)/2 + _scrollHeight;
    _posiLeft = (_windowWidth - _popupWeight)/2;
    $('#Validform_msg').css({"left": _posiLeft + "px","top":_posiTop + "px","display":"block"});//设置position
}
