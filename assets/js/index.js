/**
 * Created by Administrator on 2017/6/19.
 */
$(function () {
    var constextList = $("#context_list");
    constextList.on("mouseover", 'a', function(){
        $(this).find(".context_list_title").addClass('selector_color');
        $(this).find(".context_list_line_one").addClass('selector_border');
        $(this).find(".context_list_line_two").addClass('selector_line');
    });
    constextList.on("mouseout", 'a', function(){
        $(this).find(".context_list_title").removeClass('selector_color');
        $(this).find(".context_list_line_one").removeClass('selector_border');
        $(this).find(".context_list_line_two").removeClass('selector_line');
    });
});