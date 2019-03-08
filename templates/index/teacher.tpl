<div class="h85"></div>
<div class="home-color">

    <div class="h45"></div>
    <div class="home-title">
        <span>入驻师资</span>
        <div class="h5"></div>
    </div>
    <div class="home-title-subheading">
        <div class="h3"></div>
        <span>Supervisors</span>
    </div>
    <div class="h15"></div>
    <div class="home-desc"><span>亦师亦友，他们来自你想去的远方</span></div>
    <div class="h40"></div>

    <div class="home-div indexteachershowdivs">
    </div>
    <div class=" clear h45"></div>
    <div class="teacher-menus">
        <div class="changeteacher fl change-t-sapn">
            <span>换一批</span>
        </div>

        <div class="changeteacher fr" onclick="window.location.href='/list.php?key=teacher'">
            <span class="teacher-more">MORE+</span>
        </div>
    </div>

</div>

<script>

    function getschool(){
        $.ajax({
            url: uri+"/index/getinfo/get_teacher",
            data: {
            },
            dataType: "text",
            type: 'post',
            timeout: 10000,
            error: function () {
            },
            success: function (data) {
                var k = 1;
                var json = eval('(' + data + ')');

                var infoData=json["data"];
                var str = '';
                for (i in infoData) {
                    str += '<a href="/teacher.php?key=teacher&id='+infoData[i]["id"]+'">';
                    if(k%4 == 1){
                        str += '<div class="teacher-div">';
                    }else{
                        str += '<div class="teacher-div" style="margin-left: 38px;">';
                    }
                    str += '<div><div style="background:url('+uri+'/public/downimg/'+infoData[i]["teacher_homeimg"]+') center center; width:262px; height:262px; background-size:cover;"></div></div><div class="teacher-desc"><div class="h20"></div><div class="teacher-name"><span>'+infoData[i]['english_name']+'</span><span class="teacher-area">'+infoData[i]['graduate_country']+'</span></div><div class="h15"></div><div class="teacher-tag">'+infoData[i]['profression']+'</div><div class="h5"></div><div class="teacher-tag">'+infoData[i]['finish_school']+'</div></div></div></a>';

                    if(k%4==0 && k%8!=0){
                        str+='<div class=" clear h40"></div>';
                    }

                    k++;
                }
                $(".indexteachershowdivs").html(str)
            }
        });
    }
    $(function(){
        getschool();

        $(".change-t-sapn").click(function(){
            getschool();
        })

    })

</script>
