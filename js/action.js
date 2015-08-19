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

function windowOpen(event, url){
	event.preventDefault();
	window.open(url);
	return false;
}

$('#a_lang').click(function(event) {
	//alert('a');
	toggleLang();
});
