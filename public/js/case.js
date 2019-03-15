$(function(){

    var search1;
    var search2;
    var search3;
    var search4;

    $(".alertclass1").mouseover(function(){
        window.clearTimeout(search1);
        $(".alertsearchdiv1").fadeIn(200);

        $(".alertsearchdiv2").hide();
        $(".alertsearchdiv3").hide();
        $(".alertsearchdiv4").hide();
    }).mouseout(function(){
        search1 = window.setTimeout("$('.alertsearchdiv1').hide();",500);

    })

    $(".alertclass2").mouseover(function(){
        window.clearTimeout(search2);
        $(".alertsearchdiv2").fadeIn(200);

        $(".alertsearchdiv1").hide();
        $(".alertsearchdiv3").hide();
        $(".alertsearchdiv4").hide();
    }).mouseout(function(){
        search2 = window.setTimeout("$('.alertsearchdiv2').hide();",500);
    })

    $(".alertclass3").mouseover(function(){
        window.clearTimeout(search3);
        $(".alertsearchdiv3").fadeIn(200);

        $(".alertsearchdiv1").hide();
        $(".alertsearchdiv2").hide();
        $(".alertsearchdiv4").hide();
    }).mouseout(function(){
        search3 = window.setTimeout("$('.alertsearchdiv3').hide();",500);
    })

    $(".alertclass4").mouseover(function(){
        window.clearTimeout(search4);
        $(".alertsearchdiv4").fadeIn(200);

        $(".alertsearchdiv1").hide();
        $(".alertsearchdiv2").hide();
        $(".alertsearchdiv3").hide();
    }).mouseout(function(){
        search4 = window.setTimeout("$('.alertsearchdiv4').hide();",500);
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


    $(".xxdiv").click(function(){
        $('.alertsearchdiv1').hide();
        $(".xxdiv_choose").removeClass("xxdiv_choose").addClass('xxdiv');
        $(this).removeClass("xxdiv").addClass('xxdiv_choose');
        $(".xxshowname").html($(".xxdiv_choose span").html());
        $(".hotsearch").val("");
        pagenums = 1;
        getteacher();
    })
    $(".zydiv").click(function(){
        $('.alertsearchdiv2').hide();
        $(".zydiv_choose").removeClass("zydiv_choose").addClass('zydiv');
        $(this).removeClass("zydiv").addClass('zydiv_choose');
        $(".zyshowname").html($(".zydiv_choose span").html());
        $(".hotsearch").val("");
        pagenums = 1;
        getteacher();
    })
    $(".lcdiv").click(function(){
        $('.alertsearchdiv3').hide();
        $(".lcdiv_choose").removeClass("lcdiv_choose").addClass('lcdiv');
        $(this).removeClass("lcdiv").addClass('lcdiv_choose');
        $(".lcshowname").html($(".lcdiv_choose span").html());
        $(".hotsearch").val("");
        pagenums = 1;
        getteacher();
    })
    $(".lxdiv").click(function(){
        $('.alertsearchdiv4').hide();
        $(".lxdiv_choose").removeClass("lxdiv_choose").addClass('lxdiv');
        $(this).removeClass("lxdiv").addClass('lxdiv_choose');
        $(".lxshowname").html($(".lxdiv_choose span").html());
        $(".hotsearch").val("");
        pagenums = 1;
        getteacher();
    })

    getteacher();
    $(".getnextteacher").click(function(){
        getteacher();
    });

    $(".hotsearchbutton").click(function(){
        var hotsearch = $(".hotsearch").val();
        // if(hotsearch != ""){
        //     $(".xxshowname").html($(".xxshowname").html());
        //     $(".zyshowname").html($(".zyshowname").html());
        //     $(".lcshowname").html($(".lcshowname").html());
        //     $(".lxshowname").html($(".lxshowname").html());
        //     // $(".fgshowname").html($(".fgshowname").html());
        // }

        pagenums = 1;
        getteacher();
    })
})



function teacherenter(obj){
    $(obj).find(".greyimg").attr("style","border:none;-webkit-filter: grayscale(100%); -moz-filter: grayscale(100%); -ms-filter: grayscale(100%); -o-filter: grayscale(100%); filter: grayscale(100%); filter: gray;");

}

function teacherleave(obj){
    $(obj).find(".greyimg").attr("style","border:none;");
}

var isscroll = 0;
var pagenums = 1;
function getteacher(){
    if(pagenums == 1){
        $(".addleftdiv").html("");
        $(".addmiddlediv").html("");
        $(".addrightdiv").html("");
        $(".addmiddlediv2").html("");
        $(".addmiddlediv3").html("");
    }

    var zyoption = "";
    var zyoptionname = "";
    var dqoption = "";
    var dqoptionname = "";
    var gjoption = "";
    var gjoptionname = "";
    var schooloption = "";
    var schooloptionname = "";
    if(zyoption != "" || zyoption != null || zyoption != "undefined"){
        zyoption = $(".xxdiv_choose span").attr("choosevalue");
        zyoptionname = $(".xxdiv_choose span").html();
    }
    if(dqoption != "" || dqoption != null || dqoption != "undefined"){
        dqoption = $(".lxdiv_choose span").attr("choosevalue");
        dqoptionname = $(".lxdiv_choose span").html();
    }
    if(gjoption != "" || gjoption != null || gjoption != "undefined"){
        gjoption = $(".zydiv_choose span").attr("choosevalue");
        gjoptionname = $(".zydiv_choose span").html();
    }
    if(schooloption != "" || schooloption != null || schooloption != "undefined"){
        schooloption = $(".lcdiv_choose span").attr("choosevalue");
        schooloptionname = $(".lcdiv_choose span").html();
    }


    if(zyoption == ""){
        $(".xxshowname").html($(".xxshowname").html());
    }
    if(dqoption == ""){
        $(".zyshowname").html($(".lxshowname").html());
    }
    if(gjoption == ""){
        $(".lcshowname").html($(".zyshowname").html());
    }
    if(schooloption == ""){
        $(".lxshowname").html($(".lcshowname").html());
    }

    var hotsearch = $(".hotsearch").val();

    var leftallheight = 0;
    var middleallheight = 0;
    var rightallheight = 0;
    $.ajax({
        url:'/getData.php?key=caseList',
        data: {
            pagenum: pagenums,
            // zyoption: zyoption,
            // dqoption: dqoption,
            // gjoption: gjoption,
            // schooloption: schooloption,
            // hotsearch: hotsearch
        },
        dataType: "json",
        type: 'get',
        timeout: 10000,
        error: function () {
            //alert("服务器超时");
        },
        success: function (data) {
            console.log(data)
            pagenums++;
            // var json = eval('(' + data + ')');
            var infoData=data;
            // console.log(infoData)
            var nums = 1;
            for (i in infoData) {
                var describeheightleft = 0;
                var describeheightmiddle = 0;
                var describeheightmiddle2 = 0;
                var describeheightmiddle3 = 0;
                var describeheightright = 0;

                var nameheightleft = 0;
                var nameheightmiddle = 0;
                var nameheightmiddle2 = 0;
                var nameheightmiddle3 = 0;
                var nameheightright = 0;

                var keywordsdivheightleft = 0;
                var keywordsdivheightmiddle = 0;
                var keywordsdivheightmiddle2 = 0;
                var keywordsdivheightmiddle3 = 0;
                var keywordsdivheightright = 0;

                $(".addleftdiv").find(".describe").each(function(){
                    describeheightleft += $(this).height();
                    nameheightleft += $(this).prev().height();
                    keywordsdivheightleft += $(this).prev().prev().height();
                })
                $(".addmiddlediv").find(".describe").each(function(){
                    describeheightmiddle += $(this).height();
                    nameheightmiddle += $(this).prev().height();
                    keywordsdivheightmiddle += $(this).prev().prev().height();
                })
                $(".addmiddlediv2").find(".describe").each(function(){
                    describeheightmiddle2 += $(this).height();
                    nameheightmiddle2 += $(this).prev().height();
                    keywordsdivheightmiddle2 += $(this).prev().prev().height();
                })
                $(".addmiddlediv3").find(".describe").each(function(){
                    describeheightmiddle3 += $(this).height();
                    nameheightmiddle3 += $(this).prev().height();
                    keywordsdivheightmiddle3 += $(this).prev().prev().height();
                })
                $(".addrightdiv").find(".describe").each(function(){
                    describeheightright += $(this).height();
                    nameheightright += $(this).prev().height();
                    keywordsdivheightright += $(this).prev().prev().height();
                })

                var imgheightleft = 0;
                var imgheightmiddle = 0;
                var imgheightmiddle2 = 0;
                var imgheightmiddle3 = 0;
                var imgheightright = 0;
                $(".addleftdiv .logoimg").find("img").each(function(){
                    imgheightleft += parseInt(180/$(this).attr("showwidth")*$(this).attr("showheight"));
                })
                $(".addmiddlediv .logoimg").find("img").each(function(){
                    imgheightmiddle += parseInt(180/$(this).attr("showwidth")*$(this).attr("showheight"));
                })
                $(".addmiddlediv2 .logoimg").find("img").each(function(){
                    imgheightmiddle2 += parseInt(180/$(this).attr("showwidth")*$(this).attr("showheight"));
                })
                $(".addmiddlediv3 .logoimg").find("img").each(function(){
                    imgheightmiddle3 += parseInt(180/$(this).attr("showwidth")*$(this).attr("showheight"));
                })
                $(".addrightdiv .logoimg").find("img").each(function(){
                    imgheightright += parseInt(180/$(this).attr("showwidth")*$(this).attr("showheight"));
                })

                $(".addleftdiv .showbottomimg").find("img").each(function(){
                    imgheightleft += parseInt(180/$(this).attr("showwidth")*$(this).attr("showheight"));
                })
                $(".addmiddlediv .showbottomimg").find("img").each(function(){
                    imgheightmiddle += parseInt(180/$(this).attr("showwidth")*$(this).attr("showheight"));
                })
                $(".addmiddlediv2 .showbottomimg").find("img").each(function(){
                    imgheightmiddle2 += parseInt(180/$(this).attr("showwidth")*$(this).attr("showheight"));
                })
                $(".addmiddlediv3 .showbottomimg").find("img").each(function(){
                    imgheightmiddle3 += parseInt(180/$(this).attr("showwidth")*$(this).attr("showheight"));
                })
                $(".addrightdiv .showbottomimg").find("img").each(function(){
                    imgheightright += parseInt(180/$(this).attr("showwidth")*$(this).attr("showheight"));
                })


                var leftdiv = describeheightleft + nameheightleft + keywordsdivheightleft + imgheightleft;
                var middlediv = describeheightmiddle + nameheightmiddle + keywordsdivheightmiddle + imgheightmiddle;
                var middlediv2 = describeheightmiddle2 + nameheightmiddle2 + keywordsdivheightmiddle2 + imgheightmiddle2;

                var middlediv3 = describeheightmiddle3 + nameheightmiddle3 + keywordsdivheightmiddle3 + imgheightmiddle3;
                var rightdiv = describeheightright + nameheightright + keywordsdivheightright + imgheightright;


                var str = "";

                // str += '<a href="'+detailsUri+'&id='+infoData[i]["id"]+'" target="_blank">';
                str +='<div class="strlist" style="display:none; border:1px #d5d5d5 solid;" onmouseenter="teacherenter(this)" onmouseleave="teacherleave(this)">';

                str+='<div class="logoimg">';
                if(infoData[i]["teacherlevel"] == "400"){
                }else if(infoData[i]["teacherlevel"] == "500"){
                }else if(infoData[i]["teacherlevel"] == "200"){
                }

                str+='<img class="greyimg" showheight="'+infoData[i]["topimg_height"]+'" showwidth="'+infoData[i]["topimg_width"]+'" src="/public/'+infoData[i]['thumb']+'" height="200" width="200" style="border:none;"/>';

                str+='</div>';
                str+='<div class="name" style=" height: 36px; overflow: hidden; width:90%; margin:auto; font-weight:bold;">'+infoData[i]["title"]+'</div>';
                str+='<div class="keywordsdiv" style="height:auto; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width:90%; margin:auto;">';
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
                if(infoData[i]["theme"] != "" && infoData[i]["theme"] != null && infoData[i]["theme"] != "undefine"){
                    if(keywordsum > 0){
                        str+='<br/>';
                    }

                    // if(gjoptionname == infoData[i]["drawing"]){
                    //     str+='<span style="color:#d91929;">'+infoData[i]["drawing"]+'</span>&nbsp;&nbsp;';
                    // }else{
                    //     str+='<span style="">'+infoData[i]["drawing"]+'</span>&nbsp;&nbsp;';
                    // }

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

                str+='<div class="h10"></div>';
                str+='<div style="height:10px; border-top:1px #e5e5e5 solid; width:90%; margin:auto;"></div>';
                str+='<div style="font-weight:bold;height:14px; width:90%; margin:auto;">';
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

                str+='<div class="clear h10"></div>';

                if(infoData[i]["introduction"] != "" && infoData[i]["introduction"] != null && infoData[i]["introduction"] != "undefine"){
                }
                if(infoData[i]["img_bottom"] == null || infoData[i]["img_bottom"] == "" || infoData[i]["img_bottom"] == "undefine"){

                }else{
                    str+='<div class="h20"></div>';
                    str+='<div class="showbottomimg">';
                    str+='<img showheight="'+infoData[i]["bottomimg_height"]+'" showwidth="'+infoData[i]["bottomimg_width"]+'" src="/public/downimg/'+infoData[i]["img_bottom"]+'" width="266" style="border:none;"/>';
                    str+='</div>';
                }
                str+='</div>';
                str +='</a>';

                if(leftdiv <= middlediv && leftdiv <= middlediv2 && leftdiv <= middlediv3 && leftdiv <= rightdiv){
                    $(".addleftdiv").append(str);
                }else if(middlediv <= leftdiv && middlediv <= middlediv2 && middlediv <= middlediv3 && middlediv <= rightdiv){
                    $(".addmiddlediv").append(str);
                }else if(middlediv2 <= leftdiv && middlediv2 <= middlediv && middlediv2 <= middlediv3 && middlediv2 <= rightdiv){
                    $(".addmiddlediv2").append(str);
                }else if(middlediv3 <= leftdiv && middlediv3 <= middlediv && middlediv3 <= middlediv2 && middlediv3 <= rightdiv){
                    $(".addmiddlediv3").append(str);
                }else{
                    $(".addrightdiv").append(str);
                }

                $(".strlist").fadeIn(500);
                isscroll = 0;
            }
        }
    });
}