/**
 * Created by Administrator on 2017/6/22.
 */
$(function () {
    console.log("helpCenter");
    //左侧菜单栏切换
    var articleTBox = $("#article_title_box");
    var articleCBox = $("#article_content_box");
    articleTBox.on("mouseover", 'span', function(){
        $(this).parent().addClass('article_title_selector');
    });
    articleTBox.on("mouseout", 'span', function(){
        //移除默认选择
        $(this).parent().removeClass('article_title_selector');
    });
    articleTBox.on("click", 'span', function(){
        $(this).parent().siblings().removeClass('article_title_selector');
        $(this).parent().siblings().removeClass('article_title_click');     //移除其他标签点击效果
        $(this).parent().addClass('article_title_click');
        var index = $(this).parent().index() - 1;
        articleCBox.children('div').each(function(i){
            if(i == index){
                $(this).css('display', 'block');
                $(this).siblings().css('display', 'none');
            }
        });
    });
    //右侧菜单栏切换
    var questionBox= $(".article_content_question_box");
    questionBox.on("click", function(){
        var i = $(this).attr('index');
        if( i == 0 ){
            //展示
            //箭头变化
            $(this).find('.question_down_img').hide();
            $(this).find('.question_up_img').show();
            //展示答案
            $(this).parent().find('.article_content_answer_box').show(400);
            $(this).attr('index', '1');
        }else{
            //隐藏
            //箭头变化
            $(this).find('.question_down_img').show();
            $(this).find('.question_up_img').hide();
            //隐藏答案
            $(this).parent().find('.article_content_answer_box').hide(400);
            $(this).attr('index', '0');
        }
    })
});