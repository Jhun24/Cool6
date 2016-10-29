$(function(){
    
    
    $(".date").droppable({
		
		tolerance: "intersect", //50% 이상 겹치면 Drop 되게 한다 
	    accept: ".addBtn", //addBtn라는 class를 가진것만 인식 

		drop:function(event, ui){
			$(this).append($(ui.draggable.clone()));
            console.log($(this).text());
            addTL($(this).text());
            $(".article").append(addTimeLine);
		}
	});
    
    $(".addBtn").draggable({
		revert:"invalid", //drop하는 곳이 아니면 제자리로 돌아가게하는 속성 
		appendTo:"body",//설정한 곳의 마지막 부분에 쌓아준다   
		helper: 'clone', // 복사 
		//revertDuration:0, : 사용시 드레그 되돌아가는 에니메이션 없이 바로 귀환 
		opacity:0.8, //클릭시 박스 투명도 지정
        cursor:"pointer" //cursor pointer로 변경
	});
    
    $(".monthBtn").click(function addMonth(){
        
    });
    
    
});