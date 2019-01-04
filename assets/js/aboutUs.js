/**
 * Created by Administrator on 2017/6/22.
 */
$(function () {
    console.log('aboutUs');

    //左侧菜单栏切换
    var menu = $("#menu");
    var artical = $("#artical");

    menu.on("click", '.menu_child', function(){
        $(this).siblings().removeClass('menu_child_click');
        $(this).addClass('menu_child_click');
        var index = $(this).index() - 1;
        artical.children('div').each(function(i){
            if(i == index){
                $(this).css('display', 'block');
                $(this).siblings().css('display', 'none');
            }
        });
    });

    //招聘职位展开与隐藏
    var jobBoxDown = $(".job_box_img_down");
    var jobBoxUp = $(".job_box_img_up");

    jobBoxDown.on('click', function(){
        $(this).css('display', 'none');
        $(this).siblings().css('display', 'block');
        $(this).parent().parent().children('.job_box_right').children('.job_box_right_text').show(500);
    });

    jobBoxUp.on('click', function(){
        $(this).css('display', 'none');
        $(this).siblings().css('display', 'block');
        $(this).parent().parent().children('.job_box_right').children('.job_box_right_text').hide(500);
    });

});