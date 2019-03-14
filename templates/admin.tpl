{include file="header.tpl"}

<link rel="stylesheet" href="public/css/validform.css">
<script src="public/js/Validform_v5.3.2_min.js"></script>

<script src="public/js/admin.js"></script>
<link rel="stylesheet" href="public/css/evaluation.css">

<div>
    <form enctype="multipart/form-data" method="post" class="myform" action="/evaluation.php?key=evaluation" >
        <div class="h60"></div>
        <div class="form-div">
            <div>
                <div class="h20"></div>
                <div class="w530 fl">
                    <div class="register_input_div tl h40">
                        后台管理
                    </div>
                </div>
                <div class="clear"></div>

                <div class="w530 fl">
                    <div class="register_input_div">
                        <div class="input-ide">密码</div>
                        <input type="password" class="register_common_input input-text" name="password" datatype="*" nullmsg="请输入密码！" placeholder="请输入密码" >
                    </div>
                </div>
            <div class="clear h40"></div>
        </div>

        <div>
            <div class="register_input_div">
                <input type="hidden" name="submit" value="password">
                <input type="hidden" name="student_file" value="">
                <button class="input-button" name="student_submit" type="submit">登录</button>

            </div>
            <div class="clear h100"></div>

        </div>

    </form>

</div>

</div>
{include file="foot.tpl"}
