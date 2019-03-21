
var isscroll = 0;
var pagenums = 1;
function getmatter(){
    if(pagenums == 1){
        $(".addleftdiv").html("");
        $(".addmiddlediv").html("");
        $(".addrightdiv").html("");
        $(".addmiddlediv2").html("");
    }

    var zyoption = "";
    var xmoption = "";
    var tzoption = "";
    var ztoption = "";
    var schooloption = "";
    var zyoptionname = "";
    var xmoptionname = "";
    var tzoptionname = "";
    var ztoptionname = "";
    var schooloptionname = "";
    if(schooloption != "" || schooloption != null || schooloption != "undefined"){
        schooloption = $(".fgdiv_choose span").attr("choosevalue");
        schooloptionname = $(".fgdiv_choose span").html();
    }
    if(zyoption != "" || zyoption != null || zyoption != "undefined"){
        zyoption = $(".xxdiv_choose span").attr("choosevalue");
        zyoptionname = $(".xxdiv_choose span").html();
    }
    if(xmoption != "" || xmoption != null || xmoption != "undefined"){
        xmoption = $(".zydiv_choose span").attr("choosevalue");
        xmoptionname = $(".zydiv_choose span").html();
    }
    if(tzoption != "" || tzoption != null || tzoption != "undefined"){
        tzoption = $(".lcdiv_choose span").attr("choosevalue");
        tzoptionname = $(".lcdiv_choose span").html();
    }
    if(ztoption != "" || ztoption != null || ztoption != "undefined"){
        ztoption = $(".lxdiv_choose span").attr("choosevalue");
        ztoptionname = $(".lxdiv_choose span").html();
    }

    if(schooloption == ""){
        $(".fgshowname").html($(".fgshowname").html());
    }
    if(zyoption == ""){
        $(".xxshowname").html($(".xxshowname").html());
    }
    if(xmoption == ""){
        $(".zyshowname").html($(".zyshowname").html());
    }
    if(tzoption == ""){
        $(".lcshowname").html($(".lcshowname").html());
    }
    if(ztoption == ""){
        $(".fgshowname").html($(".lxshowname").html());
    }

    var hotsearch = $(".hotsearch").val();
    $.ajax({
        url:'/getData.php?key=caseList',
        data: {
            pagenum: pagenums,
            zyoption: zyoption,
            xmoption: xmoption,
            tzoption: tzoption,
            ztoption: ztoption,
            schooloption: schooloption,
            hotsearch: hotsearch
        },
        dataType: "json",
        type: 'get',
        timeout: 10000,
        error: function () {
            //alert("服务器超时");
        },
        success: function (data) {
            //alert(data)
            pagenums++;
            // var json = eval('(' + data + ')');
            // var infoData=json["data"]
            var infoData=data
            console.log(data)

            var nums = 1;
            for (i in infoData) {

                var describeheightleft = 0;
                var describeheightmiddle = 0;
                var describeheightmiddle2 = 0;
                var describeheightright = 0;

                var nameheightleft = 0;
                var nameheightmiddle = 0;
                var nameheightmiddle2 = 0;
                var nameheightright = 0;

                var keywordsdivheightleft = 0;
                var keywordsdivheightmiddle = 0;
                var keywordsdivheightmiddle2 = 0;
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
                $(".addrightdiv").find(".describe").each(function(){
                    describeheightright += $(this).height();
                    nameheightright += $(this).prev().height();
                    keywordsdivheightright += $(this).prev().prev().height();
                })

                var imgheightleft = 0;
                var imgheightmiddle = 0;
                var imgheightmiddle2 = 0;
                var imgheightright = 0;
                $(".addleftdiv .logoimg").find("img").each(function(){
                    imgheightleft += parseInt(266/$(this).attr("showwidth")*$(this).attr("showheight"));
                })
                $(".addmiddlediv .logoimg").find("img").each(function(){
                    imgheightmiddle += parseInt(266/$(this).attr("showwidth")*$(this).attr("showheight"));
                })
                $(".addmiddlediv2 .logoimg").find("img").each(function(){
                    imgheightmiddle2 += parseInt(266/$(this).attr("showwidth")*$(this).attr("showheight"));
                })
                $(".addrightdiv .logoimg").find("img").each(function(){
                    imgheightright += parseInt(266/$(this).attr("showwidth")*$(this).attr("showheight"));
                })

                $(".addleftdiv .showbottomimg").find("img").each(function(){
                    imgheightleft += parseInt(266/$(this).attr("showwidth")*$(this).attr("showheight"));
                })
                $(".addmiddlediv .showbottomimg").find("img").each(function(){
                    imgheightmiddle += parseInt(266/$(this).attr("showwidth")*$(this).attr("showheight"));
                })
                $(".addmiddlediv2 .showbottomimg").find("img").each(function(){
                    imgheightmiddle2 += parseInt(266/$(this).attr("showwidth")*$(this).attr("showheight"));
                })
                $(".addrightdiv .showbottomimg").find("img").each(function(){
                    imgheightright += parseInt(266/$(this).attr("showwidth")*$(this).attr("showheight"));
                })

                $(".addleftdiv .keywordsdiv").each(function(){
                    imgheightleft += parseInt($(this).height());
                })
                $(".addmiddlediv .keywordsdiv").each(function(){
                    imgheightmiddle += parseInt($(this).height());
                })
                $(".addmiddlediv2 .keywordsdiv").each(function(){
                    imgheightmiddle2 += parseInt($(this).height());
                })
                $(".addrightdiv .keywordsdiv").each(function(){
                    imgheightright += parseInt($(this).height());
                })


                var leftdiv = describeheightleft + nameheightleft + keywordsdivheightleft + imgheightleft;
                var middlediv = describeheightmiddle + nameheightmiddle + keywordsdivheightmiddle + imgheightmiddle;
                var middlediv2 = describeheightmiddle2 + nameheightmiddle2 + keywordsdivheightmiddle2 + imgheightmiddle2;
                var rightdiv = describeheightright + nameheightright + keywordsdivheightright + imgheightright;

                var str = "";

                if(infoData[i]["detail_text"] != "" && infoData[i]["detail_text"] != null && infoData[i]["detail_text"] != "undefine"){
                    str+='<div class="strlist" style="display:none; border:1px #d5d5d5 solid;" imgdetailid='+infoData[i]["id"]+' detail_text=\''+infoData[i]["detail_text"]+'\'  showimgfile="'+infoData[i]["imgfile"]+'" showgetcodes="'+infoData[i]["getcodes"]+'">';
                }else{
                    str+='<div class="strlist" style="display:none; cursor:pointer; border:1px #d5d5d5 solid;" imgdetailid='+infoData[i]["id"]+' detail_text=\''+infoData[i]["detail_text"]+'\' showimgfile="'+infoData[i]["imgfile"]+'" showgetcodes="'+infoData[i]["getcodes"]+'">';
                }



                str+='<div datakey='+i+'  imgdetailid='+infoData[i]["id"]+' onclick="alertworksdiv(this)" detail_text=\''+infoData[i]["detail_text"]+'\'  showimgfile="'+infoData[i]["imgfile"]+'" showgetcodes="'+infoData[i]["getcodes"]+'">';
                str+='<div class="logoimg" style="border-bottom:1px #f5f5f5 solid;">';

                str+='<img showheight="'+infoData[i]["topimg_height"]+'" showwidth="'+infoData[i]["topimg_width"]+'" src="/public/'+infoData[i]["img_top"]+'" width="266" style="border:none;"/>';

                str+='</div>';

                str+='<div style="height:10px;"></div>';
                str+='<div class="name" style="font-weight:bold; width:90%; margin:auto; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">'+infoData[i]["title"]+'</div>';

                str+='<div style="height:10px;"></div>';
                str+='<div class="keywordsdiv" style="height:auto; width:90%; margin:auto;">';
                str+='<span style="font-size:14px; color:#9fa0a0; line-height:20px;" class="keywordsspan">';

                var keywordsum = 0;
                if(infoData[i]["name_cn"] != "" && infoData[i]["name_cn"] != null && infoData[i]["name_cn"] != "undefine"){
                    if(schooloptionname == infoData[i]["name_cn"]){
                        str+='<span style="color:#d91929;">'+infoData[i]["name_cn"]+'</span>';
                    }else{
                        str+='<span style="">'+infoData[i]["name_cn"]+'</span>';
                    }
                    keywordsum++;
                }

                if(infoData[i]["major"] != "" && infoData[i]["major"] != null && infoData[i]["major"] != "undefine"){

                    if(keywordsum > 0){
                        str+='<br/>';
                    }
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
                    if(xmoptionname == infoData[i]["project"]){
                        str+='<span style="color:#d91929;">'+infoData[i]["project"]+'</span>';
                    }else{
                        str+='<span style="">'+infoData[i]["project"]+'</span>';
                    }
                    keywordsum++;
                }
                if(infoData[i]["drawing"] != "" && infoData[i]["drawing"] != null && infoData[i]["drawing"] != "undefine"){

                    if(keywordsum > 0){
                        str+='<br/>';
                    }
                    if(tzoptionname == infoData[i]["drawing"]){
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
                    if(ztoptionname == infoData[i]["theme"]){
                        str+='<span style="color:#d91929;">'+infoData[i]["theme"]+'</span>';
                    }else{
                        str+='<span style="">'+infoData[i]["theme"]+'</span>';
                    }
                    keywordsum++;
                }

                str+='</span>';
                str+='</div>';


                str+='<div class="keywordsdivs" style="height:auto; display:none;">';
                str+='<span style="font-size:14px; color:#9fa0a0; line-height:30px;" class="keywordsspan">';

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
                    if(keywordsum == 0){
                        if(xmoptionname == infoData[i]["project"]){
                            str+='<span style="color:#d91929;">'+infoData[i]["project"]+'</span>';
                        }else{
                            str+='<span style="">'+infoData[i]["project"]+'</span>';
                        }
                        keywordsum++;
                    }else{
                        if(xmoptionname == infoData[i]["project"]){
                            str+='<span style="color:#d91929; margin-left:5px;">'+infoData[i]["project"]+'</span>';
                        }else{
                            str+='<span style="margin-left:5px;">'+infoData[i]["project"]+'</span>';
                        }
                    }
                }
                if(infoData[i]["drawing"] != "" && infoData[i]["drawing"] != null && infoData[i]["drawing"] != "undefine"){
                    if(keywordsum == 0){
                        if(tzoptionname == infoData[i]["drawing"]){
                            str+='<span style="color:#d91929;">'+infoData[i]["drawing"]+'</span>';
                        }else{
                            str+='<span style="">'+infoData[i]["drawing"]+'</span>';
                        }
                        keywordsum++;
                    }else{
                        if(tzoptionname == infoData[i]["drawing"]){
                            str+='<span style="color:#d91929; margin-left:5px;">'+infoData[i]["drawing"]+'</span>';
                        }else{
                            str+='<span style="margin-left:5px;">'+infoData[i]["drawing"]+'</span>';
                        }
                    }
                }
                if(infoData[i]["theme"] != "" && infoData[i]["theme"] != null && infoData[i]["theme"] != "undefine"){
                    if(keywordsum == 0){
                        if(ztoptionname == infoData[i]["theme"]){
                            str+='<span style="color:#d91929;">'+infoData[i]["theme"]+'</span>';
                        }else{
                            str+='<span style="">'+infoData[i]["theme"]+'</span>';
                        }
                        keywordsum++;
                    }else{
                        if(ztoptionname == infoData[i]["theme"]){
                            str+='<span style="color:#d91929; margin-left:5px;">'+infoData[i]["theme"]+'</span>';
                        }else{
                            str+='<span style="margin-left:5px;">'+infoData[i]["theme"]+'</span>';
                        }
                    }
                }

                str+='</span>';
                str+='</div>';


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
                    str+='<img src="public/images/see.png" width="14" height="14">&nbsp;&nbsp;'+infoData[i]["browsenums"]+'</div>';
                }

                if(infoData[i]["imgfile"] != "" && infoData[i]["imgfile"] != null && infoData[i]["imgfile"] != "undefine"){
                    str+='<div style="line-height:14px; float:right; color:#040000; margin-right:10px;">';
                    str+='<img src="public/images/fj.png" width="14" height="14">&nbsp;&nbsp;1</div>';
                }

                str+='</div><div style="clear:both; height:10px;"></div>';



                str+='</div><div style="clear:both; height:10px;"></div>';
                if(infoData[i]["img_bottom"] == null || infoData[i]["img_bottom"] == "" || infoData[i]["img_bottom"] == "undefine"){

                }else{
                    str+='<div style="height:20px;"></div>';
                    str+='<div class="showbottomimg">';
                    str+='<img showheight="'+infoData[i]["bottomimg_height"]+'" showwidth="'+infoData[i]["bottomimg_width"]+'" src="'+uri+'/public/downimg/'+infoData[i]["img_bottom"]+'" width="266" style="border:none;"/>';
                    str+='</div>';
                }
                str+='</div>';
                if(leftdiv <= middlediv && leftdiv <= middlediv2 && leftdiv <= rightdiv){
                    $(".addleftdiv").append(str);
                }else if(middlediv <= leftdiv && middlediv <= middlediv2 && middlediv <= rightdiv){
                    $(".addmiddlediv").append(str);
                }else if(middlediv2 <= leftdiv && middlediv2 <= middlediv && middlediv2 <= rightdiv){
                    $(".addmiddlediv2").append(str);
                }else{
                    $(".addrightdiv").append(str);
                }

                $(".strlist").fadeIn(500);
                isscroll = 0;
            }

        }
    });
}

$(function(){

    $(".hotsearchbutton").click(function(){
        pagenums = 1;
        getmatter();
    })


    getmatter();

    $(".getnextmatter").click(function(){
        getmatter();
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
        getmatter();

    })
    $(".zydiv").click(function(){
        $('.alertsearchdiv2').hide();
        $(".zydiv_choose").removeClass("zydiv_choose").addClass('zydiv');
        $(this).removeClass("zydiv").addClass('zydiv_choose');
        $(".zyshowname").html($(".zydiv_choose span").html());
        $(".hotsearch").val("");
        pagenums = 1;
        getmatter();

    })
    $(".lcdiv").click(function(){
        $('.alertsearchdiv3').hide();
        $(".lcdiv_choose").removeClass("lcdiv_choose").addClass('lcdiv');
        $(this).removeClass("lcdiv").addClass('lcdiv_choose');
        $(".lcshowname").html($(".lcdiv_choose span").html());
        $(".hotsearch").val("");
        pagenums = 1;
        getmatter();
    })
    $(".lxdiv").click(function(){
        $('.alertsearchdiv4').hide();
        $(".lxdiv_choose").removeClass("lxdiv_choose").addClass('lxdiv');
        $(this).removeClass("lxdiv").addClass('lxdiv_choose');
        $(".lxshowname").html($(".lxdiv_choose span").html());
        $(".hotsearch").val("");
        pagenums = 1;
        getmatter();
    })
    $(".fgdiv").click(function(){
        $('.alertsearchdiv5').hide();
        $(".fgdiv_choose").removeClass("fgdiv_choose").addClass('fgdiv');
        $(this).removeClass("fgdiv").addClass('fgdiv_choose');
        $(".fgshowname").html($(".fgdiv_choose span").html());
        $(".hotsearch").val("");
        pagenums = 1;
        getmatter();
    })

})



$(window).scroll(function() {
    if(isscroll == 0 && pagenums >= 2){
        if ($(document).scrollTop() + 300 >= $(document).height() - $(window).height()) {   //判断是否已经滚动到页面底部；
            isscroll = 1;
            getmatter();


        }
    }
});

function alertworksdiv(obj){
    recomment_title=$(obj).find(".name").html();
    imgdetailid=$(obj).attr("imgdetailid");

    if($(obj).attr("detail_text") == "" || $(obj).attr("detail_text") == null || $(obj).attr("detail_text") == "null" || $(obj).attr("detail_text") == "undefined"){
        $(".mattershowdetail").html("");
    }else{
        $(".mattershowdetail").html($(obj).attr("detail_text"));
    }
    $(".showgetcode").html("提取码："+$(obj).attr("showgetcodes"));

    var showimgdetailid = imgdetailid;
    // _hmt.push(['_trackEvent', '素材', '列表页访问', showimgdetailid]);
    // console.log(_hmt);
    get_recommend_matter($(obj).attr('datakey'));
    $(".usercollect").attr("imgdetailid",imgdetailid);
    if($(obj).attr("showimgfile") == "" || $(obj).attr("showimgfile") == "null" || $(obj).attr("showimgfile") == null || $(obj).attr("showimgfile") == "undefined"){
        $(".usercollect2").hide();
    }else{
        $(".usercollect2").show();
        $(".downhref").attr("href",$(obj).attr("showimgfile"));
    }


    if($(obj).find(".logoimg").find("img").attr("showwidth") < 710){
        $(".matterbig").hide();
        $(".mattersmall").show();
    }else{
        $(".mattersmall").hide();
        $(".matterbig").show();
    }

    $(".matterimga").attr("href",$(obj).find(".logoimg").find("img").attr("src"));
    $(".mattershowimg").attr("src",$(obj).find(".logoimg").find("img").attr("src"));


    $(".mattershowtitle").html($(obj).find(".name").html());
    $(".mattershowkeyword").html($(obj).find(".keywordsdivs").html());
    $(".mattershowkeyword").find(".keywordsspan").attr("style"," font-size: 14px; color:#9fa0a0;");
    /*  10月注释   他框  */
    $(".matteralertgrey").show();
    $(".matteralertshow").show();
    $("body").attr("style","overflow-y:hidden;");
}
function whitehide(obj){
    $(obj).attr("style","position:absolute; margin-top:0px;");
}
function whiteshow(obj){
    $(obj).attr("style","position:absolute; margin-top:0px; background-color:#ffffff; -moz-opacity:0.3; -khtml-opacity: 0.3; opacity: 0.3;");
}
function get_recommend_matter(key){
    console.log(key)
    $(".matter_left_img").html("");
    $(".matter_middle_img").html("");
    $(".matter_right_img").html("");
    var matteralertleft_height = 0;
    var matteralertmiddle_height = 0;
    var matteralertright_height = 0;

    $.ajax({
        url: '/getData.php?key=recommendList&idKey='+key,//uri+"/index/getinfo/get_recommend_matter",
        data: {
            recomment_title: recomment_title,
            imgdetailid: imgdetailid
        },
        dataType: "json",
        type: 'get',
        timeout: 10000,
        error: function () {
            //alert("服务器超时");
        },
        success: function (data) {
            // console.log(data)
            // return false;
            //alert(data)
            // var json = eval('(' + data + ')');
            var infoData = data;

            var matternums = 1;
            for (i in infoData){
                var str = '';
                str+='<div>';
                str+='<div onmouseover="whitehide(this)" onmouseout="whiteshow(this)" onclick="changeshow(this)" imgdetailid="'+infoData[i]["id"]+'" showgetcodes="'+infoData[i]["getcodes"]+'" alertshowname="'+infoData[i]["title"]+'" showimgfile="'+infoData[i]["imgfile"]+'" style="position:absolute; margin-top:0px; background-color:#ffffff; -moz-opacity:0.3; -khtml-opacity: 0.3; opacity: 0.3;">';
                str+='<img src="/public/'+infoData[i]["img_top"]+'?'+i+'" showtopimgwidth="'+infoData[i]["topimg_width"]+'" showgetcodes="'+infoData[i]["getcodes"]+'" width="90" style="opacity:0;"/>';
                str+='<div class="keywordsdiv" style="height:auto; display:none;">';
                str+='<span style="font-size:18px; color:#9fa0a0; line-height:30px;" class="keywordsspan">';

                var keywordsum = 0;
                if(infoData[i]["major"] != "" && infoData[i]["major"] != null && infoData[i]["major"] != "undefine"){
                    str+='<span style="">'+infoData[i]["major"]+'</span>';
                    keywordsum++;
                }
                if(infoData[i]["project"] != "" && infoData[i]["project"] != null && infoData[i]["project"] != "undefine"){
                    if(keywordsum == 0){
                        str+='<span style="">'+infoData[i]["project"]+'</span>';
                        keywordsum++;
                    }else{
                        str+='<span style="margin-left:5px;">'+infoData[i]["project"]+'</span>';
                    }
                }
                if(infoData[i]["drawing"] != "" && infoData[i]["drawing"] != null && infoData[i]["drawing"] != "undefine"){
                    if(keywordsum == 0){
                        str+='<span style="">'+infoData[i]["drawing"]+'</span>';
                        keywordsum++;
                    }else{
                        str+='<span style="margin-left:5px;">'+infoData[i]["drawing"]+'</span>';
                    }
                }
                if(infoData[i]["theme"] != "" && infoData[i]["theme"] != null && infoData[i]["theme"] != "undefine"){
                    if(keywordsum == 0){
                        str+='<span style="">'+infoData[i]["theme"]+'</span>';
                        keywordsum++;
                    }else{
                        str+='<span style="margin-left:5px;">'+infoData[i]["theme"]+'</span>';
                    }
                }

                str+='</span>';
                str+='</div>';
                str+='</div>';
                str+='<img src="/public/'+infoData[i]["img_top"]+'" showtopimgwidth="'+infoData[i]["topimg_width"]+'" width="88" style="border:1px #f5f5f5 solid;"/>';
                str+='</div>';



                var height = parseInt(100/infoData[i]["topimg_width"]*infoData[i]["topimg_height"]);
                if(matteralertleft_height <= matteralertmiddle_height && matteralertleft_height <= matteralertright_height){
                    $(".matter_left_img").append(str);
                    matteralertleft_height = matteralertleft_height + height;
                    matternums++;
                }else if(matteralertmiddle_height <= matteralertleft_height && matteralertmiddle_height <= matteralertright_height){
                    $(".matter_middle_img").append(str);
                    matteralertmiddle_height = matteralertmiddle_height + height;
                    matternums++;
                }else{
                    $(".matter_right_img").append(str);
                    matteralertright_height = matteralertright_height + height;
                    matternums = 1;
                }
            }

        }
    });
}
function changeshow(obj){
    recomment_title=$(obj).attr("alertshowname");
    imgdetailid=$(obj).attr("imgdetailid");

    $(".usercollect").attr("imgdetailid",imgdetailid);

    if($(obj).attr("showimgfile") == "" || $(obj).attr("showimgfile") == "null" || $(obj).attr("showimgfile") == null || $(obj).attr("showimgfile") == "undefined"){
        $(".usercollect2").hide();
    }else{
        $(".usercollect2").show();
        $(".downhref").attr("href",$(obj).attr("showimgfile"));
    }
    $(".showgetcode").html("提取码："+$(obj).attr("showgetcodes"));
    //alert();

    if($(obj).find("img").attr("showtopimgwidth") < 710){
        $(".matterbig").hide();
        $(".mattersmall").show();
    }else{
        $(".mattersmall").hide();
        $(".matterbig").show();
    }

    $(".matterimga").attr("href",$(obj).find("img").attr("src"));
    $(".mattershowimg").attr("src",$(obj).find("img").attr("src"));

    $(".mattershowtitle").html(recomment_title);
    $(".mattershowkeyword").html($(obj).find(".keywordsdiv").html());
    $(".mattershowkeyword").find(".keywordsspan").attr("style"," font-size: 14px; color:#9fa0a0;");

    $(".matteralertgrey").show();
    $(".matteralertshow").show();
    $("body").attr("style","overflow-y:hidden;");
}


