/**
 * Created by Administrator on 2017/6/19.
 */
$(function () {
    console.log(2);
    // //标题栏效果
    // $("#header_menu").on("click", "div", function(){
    //     // var index = $(this).index();
    //     // var info = $(this).html();
    //     $(this).addClass("header_menu_selector");
    // });
    //页脚图标的弹出层
    $("#logo_sina").hover(function(){
        $("#sina_qrcode").show();
    },function(){
        $("#sina_qrcode").hide();
    });

    $("#logo_qq").hover(function(){
        $("#qq_qrcode").show();
    },function(){
        $("#qq_qrcode").hide();
    });

    $("#logo_wechat").hover(function(){
        $("#wechat_qrcode").show();
    },function(){
        $("#wechat_qrcode").hide();
    });
    //页脚图标的弹出层--end
    //页脚跳转
    var helpCenter = $("#helpCenter");
    var merchantsSettled = $("#merchantsSettled");
    var aboutUs = $("#aboutUs");
    var recruit = $("#recruit");
    var product = $("#product");

    helpCenter.on('click', function(){
        var html = 'https://www.easydaifu.com/www/views/helpCenter.html';
        window.open(html, '_block');
    });
    merchantsSettled.on('click', function(){
        var html = 'https://www.easydaifu.com/www/views/merchantsSettled.html';
        window.open(html, '_block');
    });
    aboutUs.on('click', function(){
        var html = 'https://www.easydaifu.com/www/views/aboutUs.html';
        window.open(html, '_block');
    });
    recruit.on('click', function(){
        var html = 'https://www.easydaifu.com/www/views/aboutUs.html';
        window.open(html, '_block');
    });
    product.on('click', function(){
        var html = 'https://www.easydaifu.com/www/views/product.html';
        window.open(html, '_block');
    });
});