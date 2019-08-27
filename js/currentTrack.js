!function(){
    function a(a,b){var c=document.createElement("script");
c.type="text/javascript",c.readyState?c.onreadystatechange=function(){"loaded"!=c.readyState&&"complete"!=c.readyState||(c.onreadystatechange=null,b())}:c.onload=function(){b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)}function b(){d()}
function c(a){jQuery.ajax({url:"https://www.radioking.com/widgets/api/v1/radio/"+a+"/track/current",timeout:1e4,success:function(a){
    html='<table style="color:white">',html+="<tbody>";
var b=a,c="https://www.radioking.com/widgets/images/cover.png";
b.cover&&(c=b.cover),html+="<tr>",
// html+='<td><img width="40" height="40" src="'+c+'" alt="" /></td>',
// html+='<td style="color:white">'+b.title+"</td>",
// html+="<td style='color:white'>"+b.artist+"</td>",
// e.itunes_affiliate_id&&b.buy_link&&(html+='<td><a target="_blank" href="'+b.buy_link+'"><img width="25" src="https://www.radioking.com/widgets/images/shopping.png" /></a></td>'),
html+="</tr>",html+="</tbody>",html+="</table>",jQuery(".rk_widget_currenttrack").html(html)},dataType:"json"})}
function d(){if(jQuery("head").append('<link rel="stylesheet" type="text/css" href="https://www.radioking.com/widgets/styles/currenttrack.css">'),jQuery(".rk_widget_currenttrack").length){var a=jQuery(".rk_widget_currenttrack").attr("id");
a=a.substring(23),jQuery.ajax({url:"https://www.radioking.com/widgets/api/v1/radio/"+a,timeout:1e4,success:function(b){e=b,c(a),window.setInterval(function(){c(a)},2e4)},dataType:"json"})}}var e=void 0;
window.jQuery?b():a(window.location.protocol+"//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",b)}();