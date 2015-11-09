$(document).ready(function(){

});

$('#btn_github').click(function(event) {
	return windowOpen(event, "https://github.com/hongkailiu");
});

$('#btn_qzone').click(function(event) {
	return windowOpen(event, "http://23276998.qzone.qq.com");
});

$('#btn_weibo').click(function(event) {
	return windowOpen(event, "http://weibo.com/hongkai80");
});

$('#btn_wechat').click(function(event) {
	return windowOpen(event, "i/wechat-hongkailiu.png");
});

$('#btn_linkedin').click(function(event) {
	return windowOpen(event, "http://ca.linkedin.com/pub/hongkai-liu/52/728/b39");
});

$('#btn_facebook').click(function(event) {
	return windowOpen(event, "https://www.facebook.com/people/Hongkai-Liu/100008524840843");
});

$('#btn_twitter').click(function(event) {
	return windowOpen(event, "https://twitter.com/hongkailiu");
});

$('#a_000webhost').click(function(event) {
	return windowOpen(event, "http://www.000webhost.com/");
});

var img_mtl = '<div id ="image"><img src = "i/mtl.jpg" style="width:230px;" /></div>';
$('#s_mtl').popover({
            trigger: "hover",
            html: true,
            content: img_mtl,
            placement:'bottom'
});

var img_bj = '<div id ="image"><img src = "i/bj.jpg" style="width:230px;" /></div>';
$('#s_bj').popover({
            trigger: "hover",
            html: true,
            content: img_bj,
            placement:'bottom'
});

var img_dd = '<div id ="image"><img src = "i/dd.jpg" style="width:230px;" /></div>';
$('#s_dd').popover({
            trigger: "hover",
            html: true,
            content: img_dd,
            placement:'bottom'
});

var img_as = '<div id ="image"><img src = "i/as.jpg" style="width:230px;" /></div>';
$('#s_as').popover({
            trigger: "hover",
            html: true,
            content: img_as,
            placement:'bottom'
});

function windowOpen(event, url){
	event.preventDefault();
	window.open(url);
	return false;
}

$('#a_lang').click(function(event) {
	//alert('a');
	toggleLang();
});
