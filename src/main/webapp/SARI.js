/*页面载入时*/
var get_text;


$(document).ready(function(){
  $.ajax({
    url:"worm",
    type:"post",
    async:true,
    headers: {
      "Content-type": "application/json"},
    success:function(data){
    	console.log(data);
    	console.log(JSON.parse(data));
      get_text=JSON.parse(data);
      $("#virus_main_get")[0].innerHTML=get_text.statisticsList.note2+"<br><br>"+
      get_text.statisticsList.note3+"<br><br>"+get_text.statisticsList.remark1
      +"<br><br>"+get_text.statisticsList.remark2+"<br><br>确诊病例：<span>"+get_text.statisticsList.confirmedCount
      +"</span>例<br><br>疑似病例：<span>"+get_text.statisticsList.suspectedCount+"</span>例<br><br>死亡人数：<span>"+
      get_text.statisticsList.deadCount
      +"</span>例<br><br>治愈人数：<span>"+get_text.statisticsList.curedCount+"</span>例";
      console.log(get_text);
    },
    contentType:"json",
    error:function(error){
      console.log(error);
    }
  })
});
//窗口跳转
function win_open() {
  document.getElementById("shade").style.display="block";
}
function win_off() {
  document.getElementById("shade").style.display="none";
}
/*点击病毒概况跳转*/
$("#virus_main").click(function(){
  $("#virus_main_box")[0].style.display="block";
  $("#distribute_img_box")[0].style.display="none";
  $("#trend_img_box")[0].style.display="none";
  $("#province_case_box")[0].style.display="none";
  $("#nation_case_box")[0].style.display="none";  
  $("#news_content_box")[0].style.display="none";
  $('.nav_list').removeClass('open');
});
/*点击分布图跳转*/
$("#distribute_img").click(function(){
  $("#distribute_img_content")[0].src=get_text.statisticsList.imgUrl;
  $("#virus_main_box")[0].style.display="none";
  $("#distribute_img_box")[0].style.display="block";
  $("#trend_img_box")[0].style.display="none";
  $("#province_case_box")[0].style.display="none";
  $("#nation_case_box")[0].style.display="none";
  $("#news_content_box")[0].style.display="none";
  $('.nav_list').removeClass('open');
})
/*趋势图跳转*/
$("#trend_img").click(function(){
  $("#trend_img_content")[0].src=get_text.statisticsList.dailyPic.split(",")[0];
  $("#virus_main_box")[0].style.display="none";
  $("#distribute_img_box")[0].style.display="none";
  $("#trend_img_box")[0].style.display="block";
  $("#province_case_box")[0].style.display="none";
  $("#nation_case_box")[0].style.display="none";
  $("#news_content_box")[0].style.display="none";
  $('.nav_list').removeClass('open');
})
/*点击各省疫情跳转*/
$("#province_case").click(function(){
  var show_list="<table border='0' class='showtable' cellpadding='10' cellspacing='10'>";
  show_list+="<tr><th class='btbg1 font-center'>地区</th><th class='btbg2 font-center'>确诊</th><th class='btbg3 font-center'>死亡"+
  "</th><th class='btbg4 font-center'>治愈</th><th class='btbg5 font-center'>操作</th></tr>"
  for(var i=0;i<get_text.provinceList.length;i++){
    show_list+="<tr><td class='font-center'>"+get_text.provinceList[i].provinceName+"</td><td class='font-center'>"+get_text.provinceList[i].confirmedCount
    +"</td><td class='font-center'>"+get_text.provinceList[i].deadCount+"</td><td class='font-center'>"+get_text.provinceList[i].curedCount+"</td>"
    +"<td class='font-center'><input type='button' class='table_btn' value='查看各市' onclick=virus_city("+"'"+i+"'"+")></td></tr>";
  }
  show_list+="</table>";
  $("#province_list")[0].innerHTML=show_list;
  $("#virus_main_box")[0].style.display="none";
  $("#distribute_img_box")[0].style.display="none";
  $("#trend_img_box")[0].style.display="none";
  $("#province_case_box")[0].style.display="block";
  $("#nation_case_box")[0].style.display="none";
  $("#news_content_box")[0].style.display="none";
  $('.nav_list').removeClass('open');
})

function virus_city(x) {
  var show_list="<table border='0' class='showtable' cellpadding='10' cellspacing='10'>";
  show_list+="<tr><th class='btbg1 font-center'>地区</th><th class='btbg2 font-center'>确诊</th><th class='btbg3 font-center'>死亡"+
  "</th><th class='btbg4 font-center'>治愈</th></tr>"
  for(var j=0;j<get_text.provinceList[x].cities.length;j++){
    show_list+="<tr><td class='font-center'>"+get_text.provinceList[x].cities[j].cityName+"</td><td class='font-center'>"+get_text.provinceList[x].cities[j].confirmedCount
    +"</td><td class='font-center'>"+get_text.provinceList[x].cities[j].deadCount+"</td><td class='font-center'>"+get_text.provinceList[x].cities[j].curedCount+"</td><tr>";
  }
  show_list+="</table>";
  $("#children_content")[0].innerHTML=show_list;
  win_open();
}
/*点击各国疫情跳转*/
$("#nation_case").click(function(){
  var show_list="<table border='0' class='showtable' cellpadding='10' cellspacing='10'>";
  show_list+="<tr><th class='btbg1 font-center'>地区</th><th class='btbg2 font-center'>确诊</th><th class='btbg3 font-center'>死亡"+
  "</th><th class='btbg4 font-center'>治愈</th></tr>";
  for(var i=0;i<get_text.countryList.length;i++){
    show_list+="<tr><td class='font-center'>"+get_text.countryList[i].provinceName+"</td><td class='font-center'>"+get_text.countryList[i].confirmedCount+
    "</td><td class='font-center'>"+get_text.countryList[i].deadCount+"</td><td class='font-center'>"+get_text.countryList[i].curedCount+"</td></tr>";
  }
  show_list+="</table>";
  $("#nation_list")[0].innerHTML=show_list;
  $("#virus_main_box")[0].style.display="none";
  $("#distribute_img_box")[0].style.display="none";
  $("#trend_img_box")[0].style.display="none";
  $("#province_case_box")[0].style.display="none";
  $("#nation_case_box")[0].style.display="block";
  $("#news_content_box")[0].style.display="none";
  $('.nav_list').removeClass('open');
})
/*点击查看新闻内容*/
$("#news_content").click(function(){
  var show_list="<table border='0' class='showtable' cellpadding='10' cellspacing='10'>";
  show_list+="<tr><th class='btbg1 font-center'>来源</th><th class='btbg2 font-center'>范围</th><th class='btbg3 font-center'>时间"+
  "</th><th class='btbg4 font-center'>标题</th><th class='btbg5'>操作</th></tr>";
  for(var i=0;i<get_text.newsList.length;i++){
    show_list+="<tr><td class='font-center'>"+get_text.newsList[i].infoSource+"</td><td class='font-center'>"+((get_text.newsList[i].provinceName==null)?"无":get_text.newsList[i].provinceName)
    +"</td><td class='font-center'>"+get_text.newsList[i].pubDateStr+"</td><td class='font-center'>"+get_text.newsList[i].title+"</td><td class='font-center'>"
    +"<input type='button' class='table_btn' value='查看详细' onclick=get_news("+"'"+i+"'"+")></td></tr>";
  }
  show_list+="</table>";
  $("#news_list")[0].innerHTML=show_list;
  $("#virus_main_box")[0].style.display="none";
  $("#distribute_img_box")[0].style.display="none";
  $("#trend_img_box")[0].style.display="none";
  $("#province_case_box")[0].style.display="none";
  $("#nation_case_box")[0].style.display="none";
  $("#news_content_box")[0].style.display="block";
  $('.nav_list').removeClass('open');
})
function get_news(x){
  $("#children_content")[0].innerHTML="<div class='middle'><h2>概括</h2><br>"+get_text.newsList[x].summary+"<br><br><a href='' id='news_source' target='blank'>点击查看更多</a></div>";
  $("#news_source")[0].href=get_text.newsList[x].sourceUrl;
  win_open();
}
/*点击关于页*/
$("#about").click(function(){
  $("#children_content")[0].innerHTML="<div class='about_box'><p>大家好，我们是来自华工BBT技术部的</p><br><h1>!!!!</h1><br><br>"+
  "<img src='profession.jpeg' id='profession_img'>"
  +"<br><br><br><br><br>ps:本站是基于爬取丁香医生新型肺炎动态网页所得网站</div>";
  win_open();
  $('.nav_list').removeClass('open');
})
/*弹出导航条*/
$(document).click(function(){
  $('.nav_list').removeClass('open');
})
$(".menu").click(function(){
  $('.nav_list').toggleClass('open');
})
$('.menu,.nav_list').click(function(e){e.stopPropagation();
})