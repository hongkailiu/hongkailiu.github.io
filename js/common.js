/*
新窗口打开连接，以符合xhtml1.1的规定
在xhtml1.1中，target已经不让使用
 */
window.onload = function() {
	var links = document.getElementsByTagName('a');
	for ( var i = 0; i < links.length; i++) {
		if (links[i].className == 'new-window') {
			links[i].onclick = function() {
				window.open(this.href);
				return false;
			};
		}
	}
};