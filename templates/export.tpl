{include file="header.tpl"}
<link rel="stylesheet" href="public/css/bootstrap.min.css">
<link rel="stylesheet" href="public/css/validform.css">
<script src="public/js/Validform_v5.3.2_min.js"></script>
<style>
    .table th, .table td {
        text-align: center;
    }
</style>
<script>
    $(function () {

        $('.table').Validform({ });
        $('.download').click(function () {
            var chkValue =[];//定义一个数组
            $('input[name="checkbox"]:checked').each(function(){
                chkValue.push($(this).attr('data'));
            });
            if(chkValue.length == false){
                showError('请选择要删除的数据');
                return false;
            }
            var data = { };
            data.delect = 'Yes'
            data.ids = chkValue
//            console.log(data)
            $.post('/evaluation.php?key=evaluation&delect=Yes',data,function (result) {
                var data = JSON.parse(result)
                console.log(data,data.status,data.messages)
                if(data.status==500){
                    showError(data.messages)
                }
                showError(data.messages);
                setTimeout(function(){
                    window.location.reload();
                }, 2000);
            });
        });
    });
</script>
<div class="h15"></div>
<div class="body" style="width: 90%;">

    <div class="pagination pagination-right">
       <ul>
           <li><a href="javascript:void(0);" class="download">删除选中项</a></li>
           <li><a href="/evaluation.php?key=evaluation&export=Yes&download=Yes&page={$smarty.get.page}">导出当前页</a></li>
       </ul>
    </div>
    <table id="datatables" class="table table-striped table-bordered table-hover" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th></th>
                <th>编号</th>
                <th>申请时间</th>
                <th>姓名</th>
                <th>学校</th>
                <th>专业</th>
                <th>平均成绩</th>
                <th>语言成绩</th>
                <th>微信号</th>
                <th>手机号</th>
                <th>邮箱</th>
                <th>作品</th>
                <th>软件</th>
                <th>申请国家</th>
                <th>目标学校</th>
                <th>申请专业</th>
                <th>申请类别</th>
                <th>入学时间</th>
            </tr>
        </thead>

        <tbody>
        {if $data}
            {foreach $data as $evaluation}
            <tr>
                <th><input type="checkbox" name="checkbox" data="{$evaluation['id']}"></th>
                <td>{$evaluation['id']}</td>
                <td>{$evaluation['created']}</td>
                <td>{$evaluation['student_name']}</td>
                <td>{$evaluation['student_school']}</td>
                <td>{$evaluation['student_major']}</td>
                <td>{$evaluation['student_gpa']}</td>
                <td>{$evaluation['student_langscore']}</td>
                <td>{$evaluation['student_weixin']}</td>
                <td>{$evaluation['student_tel']}</td>
                <td>{$evaluation['student_email']}</td>
                <td>{$evaluation['student_file']}</td>
                <td>{$evaluation['student_software']}</td>
                <td>{$evaluation['student_country']}</td>
                <td>{$evaluation['student_applyschool']}</td>
                <td>{$evaluation['student_applymajor']}</td>
                <td>{$evaluation['student_applytype']}</td>
                <td>{$evaluation['student_time']}</td>
            </tr>
            {/foreach}
        {else}
            <tr><td colspan="15">暂无申请信息</td></tr>
        {/if}
        </tbody>
    </table>
    <div class="pagination pagination-right">
            {$pageStr}
    </div>
</div>

{include file="foot.tpl"}
