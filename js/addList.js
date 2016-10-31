var addTimeLine;
var cal;
function addTL(date){
        addTimeLine = "<div class=\"timeLine conference\">";
        addTimeLine +="<div class=\"timeLineProfile\">";
        addTimeLine +="<div class=\"timeLineProfileImg\">";
        addTimeLine +="<img src=\"img/profile.jpg\" alt=\"\" />";
        addTimeLine +="</div>";
        addTimeLine +="<div class=\"timeLineProfileIndex\">";
        addTimeLine +="<div class=\"timeLineProfileName\">";
        addTimeLine +="이장훈";
        addTimeLine +="</div>";
        addTimeLine +="<div class=\"timeLineProfileDate\">";
        addTimeLine +=$(".viewMonth").html()+"."+date;
        addTimeLine +="</div>";
        addTimeLine +="</div>";
        addTimeLine +="<div class=\"\">";
        addTimeLine +="</div>";
        addTimeLine +="</div>";
        addTimeLine +="<div class=\"timeLineIndex\">";
        addTimeLine +="<div class=\"timeLineContent\">";
        addTimeLine +="<div class=\"contentName\">";
        addTimeLine +="제 92회 정기회식";
        addTimeLine +="</div>";
        addTimeLine +="<div class=\"contentDate\">";
        addTimeLine +="개발팀 -"+$(".viewMonth").html()+date;
        addTimeLine +="</div>";
        addTimeLine +="<div class=\"contentBtn\">";
        addTimeLine +="회의록 작성";
        addTimeLine +="</div>";
        addTimeLine +="</div>";
        addTimeLine +="</div>";
        addTimeLine +="</div>";
}

function resetCal(){
        var a = 2;
        cal = "<tr>"
        cal +="<td></td><td></td><td></td><td></td><td></td><td></td>";
        cal += "<td class=\"date\"><div>1</div></td></tr>";
        for(var i = 1; i <=4; i ++){
            cal += "<tr>";
            for(var k = 1; k<=7; k++){
                
                cal += "<td class=\"date\"><div>";
                cal += a
                cal += "</div></td>";
                
                a++;
            }
            cal += "</tr>";
        }
    
        cal += "<tr>";
        cal += "<td class=\"date\"><div>29</div></td>";
        cal += "<td class=\"date\"><div>30</div></td>";
        cal += "<td class=\"date\"><div>31</div></td></tr>";

}
