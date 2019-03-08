
var timenums;
var choosenum=1;
var ischooses=1;
var timer;
$(function(){
    $('.myform').Validform({
        btnSubmit:'.input-button',
        ajaxPost:true,
        postonce:true,
        callback:function (data) {
            console.log(data)
        },
    });

    $(".closecodelogindiv").click(function(){
        $(".logindivcodegrey").hide();
        $(".logindivcheckcode").hide();
    })

    var moblie = "";
    $(".register_send_code").click(function(){
        if($("[name='student_tel']").val() != ""){
            moblie = $("[name='student_tel']").val();
        }else{
            alert("请输入手机号");
            return;
        }
        choosenum=1;
        $(".logindivcodegrey").show();
        $(".logindivcheckcode").show();

    })



    $(".register_send_codess").click(function(){
        var moblie = $("#pwdtel").val();
        if(moblie == ""){
            alert("请输入手机号");
            return;
        }
        $.ajax({
            url: jsonurl+"/login/sendcodemessage",
            data: {
                moblie:moblie
            },
            dataType: "text",
            type: 'POST',
            timeout: 10000,
            error: function () {
                alert("服务器超时");
            },
            success: function (data) {
                timenums = 60;


                var k = 1;
                var json = eval('(' + data + ')');

                if(json["code"] == "1"){
                    $(".register_send_code_spanss").html("重新发送("+timenums+")");
                    if(ischooses == 1){
                        timer=window.setInterval("changetime()",1000);
                    }
                    alert("验证码发送成功");
                }else{
                    alert(json["errmsg"]);
                }
            }
        });
    })

    $("#file_post").change(function(){
        var str = $("#file_post").val();
        $("#filetext").html(str.substring(12));
    });


    $("[name='checkcode']").click(function(){


        var messagecode = $("#messagecode").val();

        $.ajax({
            url: uri+"/index/login/sendcodemessagechange",
            data: {
                moblie:moblie,
                messagecode:messagecode
            },
            dataType: "text",
            type: 'POST',
            timeout: 10000,
            error: function () {
                alert("服务器超时");
            },
            success: function (data) {
                timenum = 60;


                var k = 1;
                var json = eval('(' + data + ')');

                if(json["code"] == "1"){
                    if(choosenum == 1){
                        $(".stu_register_send_code_span").html("重新发送("+timenum+")");
                    }else{
                        $(".teacher_register_send_code_span").html("重新发送("+timenum+")");
                    }
                    if(ischoose == 1){
                        timer=window.setInterval("changetime()",1000);
                    }
                    $("#messagecode").val("")
                    $("#showmessagecode").attr("src","/captcha");
                    $(".logindivcodegrey").hide();
                    $(".logindivcheckcode").hide();
                    alert("验证码发送成功");
                }else{
                    alert(json["errmsg"]);

                    $("#showmessagecode").attr("src","/captcha");

                }
            }
        });
    })

});
function useinputfile(){
    $("#file_post").click();
}
