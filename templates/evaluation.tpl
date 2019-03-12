{include file="header.tpl"}

<link rel="stylesheet" href="public/css/Validform.css">
<script src="public/js/Validform_v5.3.2_min.js"></script>

<script src="public/js/evaluation.js"></script>
<link rel="stylesheet" href="public/css/evaluation.css">

<div>
    <form enctype="multipart/form-data" method="post" class="myform" action="/evaluation.php?key=evaluation" >
        <div class="h60"></div>
        <div class="form-div">
            <div>
                <div class="h20"></div>
                <div class="w530 fl">
                    <div class="register_input_div tl h40">
                        基础信息
                    </div>
                </div>
                <div class="clear"></div>

                <div class="w530 fl">
                    <div class="register_input_div">
                        <div class="input-ide">姓名</div>
                        <input type="text" class="register_common_input input-text" name="student_name" datatype="*" nullmsg="请输入真实姓名！" placeholder="请输入真实姓名" >
                    </div>
                </div>
                <div class="w530 fr">
                    <div class="register_input_div">
                        <div class="input-ide">学校</div>
                        <input type="text" class="register_common_input input-text" name="student_school" datatype="*" nullmsg="请输入毕业学校/就读学校" placeholder="毕业学校/就读学校">
                    </div>
                </div>

                <div class="h25"></div>

                <div class="clear h20"></div>
                <div class="w530 fl">
                    <div class="register_input_div">
                        <div class="input-ide">专业</div>
                        <input type="text" class="register_common_input input-text" name="student_major" datatype="*" nullmsg="请输入所学专业" placeholder="专业">
                    </div>

                </div>
                <div class="w530 fr">
                    <div class="register_input_div">
                        <div class="input-ide">平均成绩</div>
                        <input type="text" class="register_common_input input-text" name="student_gpa" datatype="*" nullmsg="请输入GPA/平均成绩" placeholder="GPA/平均成绩">
                    </div>

                </div>

                <div class="clear h20"></div>

                <div class="w530 fl">
                    <div class="register_input_div">
                        <div class="input-ide">语言成绩</div>
                        <input type="text" class="register_common_input input-text" name="student_langscore" datatype="*" nullmsg="请输入语言成绩" placeholder="语言成绩">
                    </div>
                </div>

                <div class="w530 fr">

                    <div class="register_input_div">
                        <div class="input-ide">微信号</div>
                        <input type="text" class="register_common_input input-text" name="student_weixin" placeholder="微信号">
                    </div>
                </div>

                <div class="clear h20"></div>

                <div class="w530 fl">
                    <div class="register_input_div">
                        <div class="input-ide">手机号</div>
                        <input type="text" class="register_common_input input-text" name="student_tel" datatype="m" nullmsg="请输入手机号" placeholder="手机号">
                    </div>
                </div>

                <div class="w530 fr">
                    <div class="register_input_div">
                        <div class="input-ide">邮箱</div>
                        <input type="text" class="register_common_input input-text" name="student_email" datatype="e" nullmsg="请输入邮箱" placeholder="邮箱  (接收评估报告)">
                    </div>
                </div>

                <div class="clear h20"></div>
                <div class="w530 fl">

                    <div class="register_input_div">
                        <div class="input-ide">验证码</div>
                        <input type="text" class="register_code_input" style="width:108px; float:left;" name="student_code" datatype="*" nullnsg="请输入验证码" placeholder="验证码">
                        <div class="register_send_code input-code" showtype="stucode">
                            <span class="teacher_register_send_code_span">获取验证码</span>
                        </div>
                    </div>
                </div>

                <div class="w530 fr">
                    <div class="register_input_div file-div">
                        <input type="file" id="file_post" class="register_common_input" placeholder="">

                        <div class="register_common_input input-file" onclick="useinputfile();">

                            <div class="input-ide file-color">作品上传</div>
                            <div id="filetext">大小不超20M</div>
                        </div>
                        <div class="clear h2"></div>
                    </div>
                </div>

                <div class="clear h20"></div>

                <div class="w530 fl">
                    <div class="register_input_div"">
                        <div class="input-ide">软件</div>
                        <input type="text" class="register_common_input input-text" name="student_software" nullmsg="请输入软件技能" placeholder="软件技能">
                    </div>
                </div>
                <div class="clear h40"></div>
            </div>


            <div style="border-top:1px #d5d5d5 solid;">
                <div class="h20"></div>
                <div class="w530 fl">
                    <div class="register_input_div tl h40">
                        申请信息
                    </div>
                </div>
                <div class="clear"></div>


                <div class="w530 fl">
                    <div class="register_input_div">
                        <div class="input-ide">申请国家</div>
                        <input type="text" class="register_common_input input-text" name="student_country" placeholder="申请国家">
                    </div>
                </div>
                <div class="w530 fr">
                    <div class="register_input_div">
                        <div class="input-ide">目标学校</div>
                        <input type="text" class="register_common_input input-text" name="student_applyschool" placeholder="目标学校">
                    </div>
                </div>

                <div class="clear h20"></div>

                <div class="w530 fl">
                    <div class="register_input_div">
                        <div class="input-ide">申请专业</div>
                        <input type="text" class="register_common_input input-text" name="student_applymajor" placeholder="申请专业">
                    </div>
                </div>
                <div class="w530 fr">
                    <div class="register_input_div">
                        <div class="input-ide">申请类别</div>
                        <input type="text" class="register_common_input input-text" name="student_applytype" placeholder="申请类别">
                    </div>
                </div>

                <div class="clear h20"></div>

                <div class="w530 fl">
                    <div class="register_input_div">
                        <div class="input-ide">入学时间</div>
                        <input type="text" plugin="datepicker" class="register_common_input input-text" name="student_time" placeholder="计划入学时间">
                    </div>
                </div>


                <div class="clear h80"></div>
            </div>

            <div>
                <div class="register_input_div">
                    <input type="hidden" name="submit" value="yes">
                    <input type="hidden" name="student_file" value="">
                    <button class="input-button" name="student_submit" type="submit">提交</button>

                </div>
                <div class="clear h100"></div>

            </div>

        </div>

    </form>

</div>
<div class="logindivgreyss" style="display:none; width: 100%; height:100%; position:fixed; z-index:200; top:0; left:0px; background-color: #000000;-moz-opacity:0.6; -khtml-opacity: 0.6; opacity: 0.6; "></div>
<div class="logindivshowss" style="display:none; width:100%; height:100%; position:fixed; z-index:200; top:0; left:0px;">
    <div class="login_divss" style="background-color:#ffffff; width:250px; height:100px; margin-top: 25%;">
        <div style="height:30px;"></div>
        <div style="background:url('publiv/images/jindu.gif') center center; background-size:cover; height:15px; width:128px; margin: auto;">

        </div>

        <div style="height:15px;"></div>
        <div style="font-size:14px; color:#787878;">文件上传中...</div>
    </div>
</div>

<div class="logindivcodegrey"></div>
<div class="logindivcheckcode">
    <div class="login_div">
        <div class="closecodelogindiv">x</div>
        <div class="h35"></div>
        <img src="/captcha.php" alt="captcha" id="showmessagecode" onclick="this.src=this.src+'?'+Math.random()"/>

        <div class="h20"></div>
        <div style="text-align:left; width:260px; margin:auto;">输入验证码：<input type="text" id="messagecode" name="messagecode" style=""/></div>

        <div class="h20"></div>
        <button class="code-button" name="checkcode" type="submit">确认</button>

    </div>
</div>


</BODY>
</HTML>
