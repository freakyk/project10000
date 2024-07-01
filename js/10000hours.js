$(function(){
    
    // 1만시간 계산
    $("#sec1 button[type='submit'].how").click(function(){
        let val_job = $("#sec1 .job").val();
        let val_num = $("#sec1 .num").val();
        let ch_num = Number(val_num);
        let dv_num = 10000 / ch_num;
        let up_num = Math.ceil(dv_num);

        if(val_job == ""){
            alert("어떤 전문가가 되고싶으신가요?")
        }else if(ch_num == 0){
            alert("훈련시간을 입력해주세요!")
        }else{
            $("#sec2 .a_job").text(val_job);
            $("#sec2 .a_num").text(up_num);
        }
    });

    $("#sec2 .buttonWrap .btn + .btn").click(function(){
        alert("공유 서비스 준비 중 :)")
    });

});


