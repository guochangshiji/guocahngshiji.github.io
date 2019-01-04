/**
 * Created by Administrator on 2017/6/22.
 */
$(function(){
    var province = $("#province"),
        city = $("#city"),
        district = $("#district");
    //省市区--三级联动
    $.each(provinceJson, function(k, p) {
        var option = "<option value='" + p.id + "'>" + p.province + "</option>";
        province.append(option);
    });
    province.change(function() {
        var select_value = $(this).val();
        city.empty();
        city.append("<option value=''>--市--</option>");
        district.empty();
        district.append("<option value=''>--区/县--</option>");
        $.each(cityJson, function(k, p) {
            // 直辖市处理.|| p.parent == select_value，直辖市为当前自己
            if (p.id == select_value || p.parent == select_value) {
                var option = "<option value='" + p.id + "'>" + p.city + "</option>";
                city.append(option);
            }
        });
    });
    city.change(function(){
        var select_value = $(this).val();
        district.empty();
        district.append("<option value=''>--区/县--</option>");
        $.each(countyJson, function(k, p) {
            if (p.parent == select_value) {
                var option = "<option value='" + p.id + "'>" + p.county + "</option>";
                district.append(option);
            }
        });
    });
    //end--省市区--三级联动

    //发送短信
    $("#send_identify_a").on('click', function(){
        var tel = $("#tel").val();
        //检查用户名是否为手机号
        if(tel.length == 0){
            alert('请填写手机号！');
            return false;
        }
        var mobileValid = /^1[0-9]{10}$/;
        if(!mobileValid.test(tel)){
            alert('请输入正确的手机号！');
            return false;
        }
        var time = 59;   //60
        var timer = setInterval(function(){
            $("#send_identify_b").html(time + "秒后再次发送");
            if(time == 0){
                $("#send_identify_a").html("再次发送");
                $("#send_identify_a").css('display', 'inline-block');
                $("#send_identify_b").css('display', 'none');
                $("#send_identify_b").html('60秒后再次发送');
                clearTimeout(timer);
            }
            time--;
        }, 1000);
        $("#send_identify_a").css('display', 'none');
        $("#send_identify_b").css('display', 'inline-block');
        var data = {
            account_id : tel,
            is_check_account: 1
        };
        data = JSON.stringify(data);   //json对象转json字符串
        var url = 'https://www.easydaifu.com/biz-svr/txCtrl?txcode=sms001';
        console.log(data);
        $.ajax({
            type: 'POST',
            contentType: "application/json;charset=UTF-8",
            dataType : 'json',
            url: url,
            data: data,
            asycn: false,
            success: function(e){
                var msg = e.msg;
                console.log(e);
                //msg说明；result结果;
                alert(msg);
            },
            error: function(e){
                var msg = e.responseJSON.tips.message;
                alert(msg);
            }
        })
    });

    $("#submitBtn").on('click', function(){
        var user_name = $('#user_name').val(),
            tel = $('#tel').val(),
            shop = $('#shop').val(),
            address = $('#address').val(),
            code = $('#inputCode').val();
        if(user_name == ''){
            alert('请填写您的姓名');
            return false;
        }
        if(tel == ''){
            alert('请填写您的手机号');
            return false;
        }
        if(shop == ''){
            alert('请填写您的店铺名称');
            return false;
        }
        var management = $("#management").get(0);
        var management_text = management[management.selectedIndex].text;
        if(management_text == '您的经营类目'){
            alert('请填写您的经营类目');
            return false;
        }
        if(code == ''){
            alert('请填写验证码');
            return false;
        }
        //设置local--现居住省市
        var province = $("#province").get(0);
        var province_text = province[province.selectedIndex].text;
        var city = $("#city").get(0);
        var city_text = city[city.selectedIndex].text;
        var district = $("#district").get(0);
        var district_text = district[district.selectedIndex].text;
        if(province_text == '--省--' || city_text == '--市--' || district_text == '--区/县--'){
            alert('请填写现居住省市');
            return false;
        }else{
            var areas = '';
            if(address == ''){
                alert('请填写您的详细地址');
                return false;
            }
            if(province_text == city_text){
                areas = province_text + ' ' + district_text + '' + address;
            }else{
                areas = province_text + ' ' + city_text + ' ' + district_text + '' + address;
            }
        }
        var data = {
            legal_person_name : user_name,
            mobile: tel,
            business_name: shop,
            business_category: management_text,
            business_addr: areas,
            code: code
        };
        console.log(data);
        data = JSON.stringify(data);   //json对象转json字符串
        var url = 'https://www.easydaifu.com/biz-svr/txCtrl?txcode=aut003';
        $.ajax({
            type: 'POST',
            contentType: "application/json;charset=UTF-8",
            dataType : 'json',
            url: url,
            data: data,
            asycn: false,
            success: function(e){
                var msg = e.msg;
                //msg说明；result结果；
                alert(msg);
            }
        })
    });
});