{include file="header.tpl"}
<link rel="stylesheet" href="public/css/bootstrap.min.css">
<style>
    .table th, .table td {
        text-align: center;
    }
</style>
<div class="h15"></div>
<div class="body">

    <table id="datatables" class="table table-striped table-bordered table-hover" cellspacing="0" width="100%">
        <thead>
            <tr>
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
        <ul>
            {$pageStr}
        </ul>
    </div>
</div>

{include file="foot.tpl"}
