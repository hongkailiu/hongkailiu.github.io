$(document).ready(function(){
	//changeLang('en');
    //changeLang('zh');
    toggleLang();
});

var count=0;

function toggleLang(lang) {
    if (count % 2 === 0) { 
        changeLang('en');
    } else { 
        changeLang('zh');
    }
    count++;
}

function changeLang(lang) {
    jQuery.i18n.properties({
		name:'strings',
		path:'js/i18n/',
		mode:'map',
		language: lang, 
        callback: function() {// 加载成功后设置显示内容
            // alert(jQuery.i18n.prop("test"));
            // init
            initUi(lang);
            }
        });
}

function initUi(lang) {
    //alert(jQuery.i18n.prop("test"));
    document.title = jQuery.i18n.prop('title');
    $("#h1_homepage").text(jQuery.i18n.prop('h1_homepage'));
    $("#a_home").text(jQuery.i18n.prop('a_home'));
    $("#a_contact").text(jQuery.i18n.prop('a_contact'));
    $("#h2_you_know").text(jQuery.i18n.prop('h2_you_know'));
    $("#s_mtl").text(jQuery.i18n.prop('s_mtl'));
    $("#s_bj").text(jQuery.i18n.prop('s_bj'));
    $("#s_dd").text(jQuery.i18n.prop('s_dd'));
    $("#s_as").text(jQuery.i18n.prop('s_as'));
    $("#d_jp").text(jQuery.i18n.prop('d_jp'));
    $("#a_resume").text(jQuery.i18n.prop('a_resume'));
    $("#a_pub").text(jQuery.i18n.prop('a_pub'));
    $("#h2_w_t_f_m").text(jQuery.i18n.prop('h2_w_t_f_m'));
    $("#h2_m").text(jQuery.i18n.prop('h2_m'));
    $("#btn_qzone").text(jQuery.i18n.prop('btn_qzone'));
    $("#btn_weibo").text(jQuery.i18n.prop('btn_weibo'));
    $("#btn_wechat").text(jQuery.i18n.prop('btn_wechat'));
    $("#btn_linkedin").text(jQuery.i18n.prop('btn_linkedin'));
    $("#btn_twitter").text(jQuery.i18n.prop('btn_twitter'));
    $("#btn_facebook").text(jQuery.i18n.prop('btn_facebook'));
    $("#btn_github").text(jQuery.i18n.prop('btn_github'));
    setupImgLang(lang);
}

function setupImgLang(lang) {
    if (lang=='zh') {
        $("#img_lang").attr("src","i/uk-icon.png").attr("alt","english");
    } else {
        $("#img_lang").attr("src","i/china-icon.png").attr("alt","chinese");
    }
    
}