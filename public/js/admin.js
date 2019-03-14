
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
            console.log(data,data.status,data.messages)
            if(data.status==500){
                showError(data.messages)
            }
            showError(data.messages);
            setTimeout(function(){
                window.location.reload();
            }, 2000);
        },
    });

});
function useinputfile(){
    $("#file_post").click();
}