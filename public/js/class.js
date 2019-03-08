
var isscroll = 0;
var pagenums = 1;
var appendnum = 0;
function getlearn(){
    if(pagenums == 1){
        $(".addleftdiv").html("");
        $(".addmiddlediv").html("");
        $(".addmiddlediv2").html("");
        $(".addrightdiv").html("");
    }


    var zyoption = "";
    var zyoptionname = "";
    var lxoption = "";
    var lxoptionname = "";
    var rjoption = "";
    var rjoptionname = "";
    var schooloption = "";
    var schooloptionname = "";
    if(zyoption != "" || zyoption != null || zyoption != "undefined"){
        zyoption = $(".xxdiv_choose span").attr("choosevalue");
        zyoptionname = $(".xxdiv_choose span").html();
    }
    if(lxoption != "" || lxoption != null || lxoption != "undefined"){
        lxoption = $(".zydiv_choose span").attr("choosevalue");
        lxoptionname = $(".zydiv_choose span").html();
    }
    if(rjoption != "" || rjoption != null || rjoption != "undefined"){
        rjoption = $(".lcdiv_choose span").attr("choosevalue");
        rjoptionname = $(".lcdiv_choose span").html();
    }
    if(schooloption != "" || schooloption != null || schooloption != "undefined"){
        schooloption = $(".lxdiv_choose span").attr("choosevalue");
        schooloptionname = $(".lxdiv_choose span").html();
    }

    if(zyoption == ""){
        $(".xxshowname").html($(".xxshowname").html());
    }
    if(lxoption == ""){
        $(".zyshowname").html($(".zyshowname").html());
    }
    if(rjoption == ""){
        $(".lcshowname").html($(".lcshowname").html());
    }
    if(schooloption == ""){
        $(".lxshowname").html($(".lxshowname").html());
    }
    var hotsearch = $(".hotsearch").val();

    $.ajax({
        url: uri+"/index/getinfo/get_learn",
        data: {
            pagenum: pagenums,
            zyoption: zyoption,
            lxoption: lxoption,
            rjoption: rjoption,
            schooloption: schooloption,
            hotsearch: hotsearch
        },
        dataType: "text",
        type: 'POST',
        timeout: 10000,
        error: function () {
            //alert("服务器超时");
        },
        success: function (data) {
            pagenums++;
            var json = eval('(' + data + ')');
            var infoData=json["data"];

            var nums = 1;
            for (i in infoData) {

                var leftdiv = parseInt($(".addleftdiv").height());
                var middlediv = parseInt($(".addmiddlediv").height());
                var rightdiv = parseInt($(".addrightdiv").height());
                var str = "";
                str += '<a href="'+'/details.php?key=class&id='+infoData[i]["id"]+'">';
                str+='<div class="strlist" style="display:none; border:1px #d5d5d5 solid;" title="'+infoData[i]["title"]+'">';

                str+='<div class="logoimg">';
                str+='<div style="background:url('+uri+'/public/downimg/'+infoData[i]["img_top"]+') center center; width:266px; height:170px; background-size:cover;"></div>';
                str+='</div>';

                str+='<div style="height:10px;"></div>'
                str+='<div class="name" style="width:90%; margin:auto; font-weight:bold;">'+infoData[i]["title"]+'</div>';
                str+='<div style="clear:both; height:10px;"></div>';

                str+='<div class="keywordsdiv" style="height:65px; width:90%; margin:auto;">';
                str+='<span style="font-size:14px; color:#9fa0a0; line-height:20px;">';
                var keywordsum = 0;
                if(infoData[i]["major"] != "" && infoData[i]["major"] != null && infoData[i]["major"] != "undefine"){
                    if(zyoptionname == infoData[i]["major"]){
                        str+='<span style="color:#d91929;">'+infoData[i]["major"]+'</span>';
                    }else{
                        str+='<span style="">'+infoData[i]["major"]+'</span>';
                    }
                    keywordsum++;
                }
                if(infoData[i]["project"] != "" && infoData[i]["project"] != null && infoData[i]["project"] != "undefine"){
                    if(keywordsum > 0){
                        str+='<br/>';
                    }
                    if(lxoptionname == infoData[i]["project"]){
                        str+='<span style="color:#d91929;">'+infoData[i]["project"]+'</span>&nbsp;&nbsp;';
                    }else{
                        str+='<span style="">'+infoData[i]["project"]+'</span>&nbsp;&nbsp;';
                    }

                    keywordsum++;
                }

                if(infoData[i]["drawing"] != "" && infoData[i]["drawing"] != null && infoData[i]["drawing"] != "undefine"){
                    if(rjoptionname == infoData[i]["drawing"]){
                        str+='<span style="color:#d91929;">'+infoData[i]["drawing"]+'</span>';
                    }else{
                        str+='<span style="">'+infoData[i]["drawing"]+'</span>';
                    }
                    keywordsum++;
                }

                if(infoData[i]["theme"] != "" && infoData[i]["theme"] != null && infoData[i]["theme"] != "undefine"){
                    if(keywordsum > 0){
                        str+='<br/>';
                    }
                    if(schooloptionname == infoData[i]["theme"]){
                        str+='<span style="color:#d91929;">'+infoData[i]["theme"]+'</span>';
                    }else{
                        str+='<span style="">'+infoData[i]["theme"]+'</span>';
                    }
                    keywordsum++;
                }

                str+='</span>';
                str+='</div>';

                var x = 60;
                var y = 20;
                var x1 = 500;
                var y1 = 150;
                var randzan = parseInt(Math.random() * (x - y + 1) + y);
                var randsee = parseInt(Math.random() * (x1 - y1 + 1) + y1);

                str+='<div style="height:10px;"></div>';
                str+='<div style="height:10px; border-top:1px #e5e5e5 solid; width:90%; margin:auto;"></div>';
                str+='<div style="font-weight:bold;height:14px; width:90%; margin:auto;">';

                if(infoData[i]["totalpeople"] != "0" && infoData[i]["totalpeople"] != "" && infoData[i]["totalpeople"] != null){
                    var bmnum = 0;
                    if(infoData[i]["applicants_num"] != "0" && infoData[i]["applicants_num"] != ""){
                        bmnum = infoData[i]["applicants_num"];
                    }
                    str+='<div style="line-height:19px; float:right; color:#040000;">报名人数：'+bmnum+'&nbsp;/&nbsp;'+infoData[i]["totalpeople"]+'</div>';
                }
                str+='<div style="line-height:14px; float:left; color:#040000;">';
                if(infoData[i]["likenums"] == "0"){
                    str+='<img src="public/images/zan.png" width="14" height="14">&nbsp;&nbsp;'+randzan+'</div>';
                }else{
                    str+='<img src="public/images/zan.png" width="14" height="14">&nbsp;&nbsp;'+infoData[i]["likenums"]+'</div>';
                }
                str+='<div style="line-height:14px; float:left; margin-left:10px; color:#040000;">';
                if(infoData[i]["browsenums"] == "0"){
                    str+='<img src="public/images/see.png" width="14" height="14">&nbsp;&nbsp;'+randsee+'</div>';
                }else{
                    str+='<img src="public/images/see.png" width="14" height="14">&nbsp;&nbsp;'+infoData[i]["browsenums"]+'</div></div>';
                }

                str+='<div style="clear:both; height:10px;"></div>';

                if(infoData[i]["img_bottom"] == null || infoData[i]["img_bottom"] == "" || infoData[i]["img_bottom"] == "undefine"){

                }else{
                    str+='<div style="height:20px;"></div>';
                    str+='<div>';
                    str+='<img src="/public/downimg/'+infoData[i]["img_bottom"]+'" width="266" style="border:none;"/>';
                    str+='</div>';
                }

                str+='</div>';
                str+='</a>';

                if(appendnum==0){
                    $(".addleftdiv").append(str);
                    appendnum = 1;
                }else if(appendnum==1){
                    $(".addmiddlediv").append(str);
                    appendnum = 2;
                }else if(appendnum==2){
                    $(".addmiddlediv2").append(str);
                    appendnum = 3;
                }else{
                    $(".addrightdiv").append(str);
                    appendnum = 0;
                }


                $(".strlist").fadeIn(500);
                isscroll = 0;
            }
        }
    });
}

$(window).scroll(function() {
    if(isscroll == 0 && pagenums >= 2){
        if ($(document).scrollTop() + 300 >= $(document).height() - $(window).height()) {   //判断是否已经滚动到页面底部；
            isscroll = 1;
            getlearn();
        }
    }
});

$(function(){
    getlearn();

    $(".hotsearchbutton").click(function(){
        pagenums = 1;
        getlearn();
    })

    $(".getnextmatter").click(function(){
        getlearn();
    });
    $(".closematterdiv").click(function(){
        $(".matteralertgrey").hide();
        $(".matteralertshow").hide();
        $("body").attr("style","overflow-y:scroll;");
    })


    $(document).click(function(e){
        e = window.event || e; // 兼容IE7
        obj = $(e.srcElement || e.target);

        if ($(obj).is(".matteralertshowss") ) {
            $(".matteralertgrey").hide();
            $(".matteralertshow").hide();
            $("body").attr("style","overflow-y:scroll;");
        }else if($(obj).is(".matteralertshow")){
            $(".matteralertgrey").hide();
            $(".matteralertshow").hide();
            $("body").attr("style","overflow-y:scroll;");
        }else if ($(obj).is(".getcodes") ) {
            $(".getcodes").hide();
        }
    });

    var search1;
    var search2;
    var search3;
    var search4;
    var search5;

    $(".alertclass1").mouseover(function(){
        window.clearTimeout(search1);
        $(".alertsearchdiv1").fadeIn(200);

        $(".alertsearchdiv2").hide();
        $(".alertsearchdiv3").hide();
        $(".alertsearchdiv4").hide();
        $(".alertsearchdiv5").hide();
    }).mouseout(function(){
        search1 = window.setTimeout("$('.alertsearchdiv1').hide();",500);

    })

    $(".alertclass2").mouseover(function(){
        window.clearTimeout(search2);
        $(".alertsearchdiv2").fadeIn(200);

        $(".alertsearchdiv1").hide();
        $(".alertsearchdiv3").hide();
        $(".alertsearchdiv4").hide();
        $(".alertsearchdiv5").hide();
    }).mouseout(function(){
        search2 = window.setTimeout("$('.alertsearchdiv2').hide();",500);
    })

    $(".alertclass3").mouseover(function(){
        window.clearTimeout(search3);
        $(".alertsearchdiv3").fadeIn(200);

        $(".alertsearchdiv1").hide();
        $(".alertsearchdiv2").hide();
        $(".alertsearchdiv4").hide();
        $(".alertsearchdiv5").hide();
    }).mouseout(function(){
        search3 = window.setTimeout("$('.alertsearchdiv3').hide();",500);
    })

    $(".alertclass4").mouseover(function(){
        window.clearTimeout(search4);
        $(".alertsearchdiv4").fadeIn(200);

        $(".alertsearchdiv1").hide();
        $(".alertsearchdiv2").hide();
        $(".alertsearchdiv3").hide();
        $(".alertsearchdiv5").hide();
    }).mouseout(function(){
        search4 = window.setTimeout("$('.alertsearchdiv4').hide();",500);
    })

    $(".alertclass5").mouseover(function(){
        window.clearTimeout(search5);
        $(".alertsearchdiv5").fadeIn(200);

        $(".alertsearchdiv1").hide();
        $(".alertsearchdiv2").hide();
        $(".alertsearchdiv3").hide();
        $(".alertsearchdiv4").hide();
    }).mouseout(function(){
        search5 = window.setTimeout("$('.alertsearchdiv5').hide();",500);
    })

    $(".alertsearchdiv1").mouseover(function(){
        $(".alertsearchdiv1").show();
        window.clearTimeout(search1);
    }).mouseout(function(){
        search1 = window.setTimeout("$('.alertsearchdiv1').hide();",500);
    })

    $(".alertsearchdiv2").mouseover(function(){
        $(".alertsearchdiv2").show();
        window.clearTimeout(search2);
    }).mouseout(function(){
        search2 = window.setTimeout("$('.alertsearchdiv2').hide();",500);
    })

    $(".alertsearchdiv3").mouseover(function(){
        $(".alertsearchdiv3").show();
        window.clearTimeout(search3);
    }).mouseout(function(){
        search3 = window.setTimeout("$('.alertsearchdiv3').hide();",500);
    })

    $(".alertsearchdiv4").mouseover(function(){
        $(".alertsearchdiv4").show();
        window.clearTimeout(search4);
    }).mouseout(function(){
        search4 = window.setTimeout("$('.alertsearchdiv4').hide();",500);
    })

    $(".alertsearchdiv5").mouseover(function(){
        $(".alertsearchdiv5").show();
        window.clearTimeout(search5);
    }).mouseout(function(){
        search5 = window.setTimeout("$('.alertsearchdiv5').hide();",500);
    })

    $(".xxdiv").click(function(){
        $('.alertsearchdiv1').hide();
        $(".xxdiv_choose").removeClass("xxdiv_choose").addClass('xxdiv');
        $(this).removeClass("xxdiv").addClass('xxdiv_choose');
        $(".xxshowname").html($(".xxdiv_choose span").html());
        $(".hotsearch").val("");
        pagenums = 1;
        getlearn();

    })
    $(".zydiv").click(function(){
        $('.alertsearchdiv2').hide();
        $(".zydiv_choose").removeClass("zydiv_choose").addClass('zydiv');
        $(this).removeClass("zydiv").addClass('zydiv_choose');
        $(".zyshowname").html($(".zydiv_choose span").html());
        $(".hotsearch").val("");
        pagenums = 1;
        getlearn();

    })
    $(".lcdiv").click(function(){
        $('.alertsearchdiv3').hide();
        $(".lcdiv_choose").removeClass("lcdiv_choose").addClass('lcdiv');
        $(this).removeClass("lcdiv").addClass('lcdiv_choose');
        $(".lcshowname").html($(".lcdiv_choose span").html());
        $(".hotsearch").val("");
        pagenums = 1;
        getlearn();
    })
    $(".lxdiv").click(function(){
        $('.alertsearchdiv4').hide();
        $(".lxdiv_choose").removeClass("lxdiv_choose").addClass('lxdiv');
        $(this).removeClass("lxdiv").addClass('lxdiv_choose');
        $(".lxshowname").html($(".lxdiv_choose span").html());
        $(".hotsearch").val("");
        pagenums = 1;
        getlearn();
    })
    $(".fgdiv").click(function(){
        $('.alertsearchdiv5').hide();
        $(".fgdiv_choose").removeClass("fgdiv_choose").addClass('fgdiv');
        $(this).removeClass("fgdiv").addClass('fgdiv_choose');
        $(".fgshowname").html($(".fgdiv_choose span").html());
        $(".hotsearch").val("");
        pagenums = 1;
        getlearn();
    })

})

