/**
 * Created by iy on 2017/12/12.
 */
/*初始化swiper*/
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    autoplay:false,
    spaceBetween : 50,
    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,//修改swiper的父元素时，自动初始化swiper
    // 如果需要分页器
    fade: {
        crossFade: true
    },

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

});

$('#batiaoBoss').on('click',function () {
    $('.guidePage').hide();
    $('#popup_batiao .swiper-container').show();
});
/*片头部分*/
var frame=0;
var changeTime = 966;
var isOpen = 0;
var popOpen =  $('#popup_open');
var OpenText = $('#open-text');
function changeFrame() {
    frame++;
    popOpen.find('img').attr('src','images/obj_40_'+ frame +'.png');

    if(frame == 2 || frame == 6 || frame==10 || frame ==20){
        popOpen.css('background-color','#000000');
    }else if(frame == 4 || frame ==12 || frame == 8){
        popOpen.css('background-color','#ab0000');
    }
    if (frame==2||frame==3||frame==10||frame==11){
        // clearInterval(c);
        var name=nickName;
        OpenText.html(name);
        OpenText.fadeIn(200);
        // c=setInterval(changeFrame,changeTime);
    }else {
        // console.log('aaa');
        OpenText.hide();
    }
    if(frame>=20&&frame<=25){
        if(!isOpen){
            clearInterval(c);
            var d=setInterval(changeFrame,80);
            $('.open').on('touchstart',function () {


                clearInterval(d);

                popOpen.css('background-color','#CDE2DB');  //原版本片头放完，开始放片尾
                endImgBox.css('height','60rem');
                $('.img-box').hide();
                $('.img-box-end').show();
                MovEnd=setInterval(changeFrameEnd,changeTimeEnd);
                    endImgBox.css('background-image',"url(images/obj_44_"+ frameEnd +'_' + 0 + ".png)");
                text_style_end.html(didText[frameEnd]);
                text_style_end.fadeIn(200);
                setTimeout(function () {
                    text_style_end.fadeOut(200);
                },2600);


            });
            isOpen = 1;
        }
        $('.open').show();
    }

    if (frame==25){
        frame=20;
    }
}

var frameEnd = 0;
var changeTimeEnd = 1500;
var didText = [];
var lastFrame = 0;
if (did){
    changeTimeEnd = 3000;
    didText = ['你在万迷聚乐部<br>曾与<text style="color: #ee1522">'+meetNum+'</text>个万迷<br>相识相知','在过去的时间里，你曾经在万迷聚乐部的线上互动中<br>上传过<text style="color: #ee1522">'+did+'</text>张照片，<br>忠于自我，说的就是你',
        '你共获得了<text style="color: #ee1522">'+myIntegral+'</text>积分<br>你在万迷聚乐部<br>也有一笔小小的财富'
    ];
}else {
    didText = ['<text style="color: #ee1522">'+myAddtime+'</text><br>你找到神秘入口<br>进入了万迷聚乐部','还没有和其他万迷互动过？<br>没关系<br>相信你是个外冷内热的人,<br>以后的日子记得常来！',
        '勇敢秀出自己最重要！<br>Mr.万期待看到最有态度的你','动动手指，获得积分<br>进行抽奖！<br>想要大奖，非常容易！'];
}
function changeFrameEnd() {
    frameEnd++;

    if (frameEnd==9 || frameEnd==3){

        popOpen.css('background-color','#000000');

        endImgBox.removeClass('end_img');
        popOpen.html('<p class="text-style-end" id="open-remind" style="display: none"><text style="font-size: 2.5rem">大电影即将开始</text><br><br>请向下滑动观影</p>');
        $('#open-remind').fadeIn(400);

        clearInterval(MovEnd);

        setTimeout(function () {


            $('#popup_open').bPopup().close();
            PageSound.open = 1;
        },1500);
        return;
    }
    if(did){
        if(typeof(endImg[frameEnd]) != "undefined"){
            endImgBox.css('background-image',"url(/wx/"+ endImg[frameEnd].replace(/-thumb/,'')+")");
        }else{
            endImgBox.css('background-image',"url(images/obj_44_"+ frameEnd +'_' + 1 + ".png)");
        }

        text_style_end.html(didText[frameEnd]);
        text_style_end.fadeIn(200);
        setTimeout(function () {
            text_style_end.fadeOut(200);
        },2600);

    }else{

        endImgBox.css('background-image',"url(images/obj_44_"+ frameEnd +'_' + 0 + ".png)");


        text_style_end.html(didText[Math.floor(frameEnd/2)]);
        if(frameEnd == 2 || frameEnd ==4 || frameEnd==6 || frameEnd==0){
            text_style_end.fadeIn(200);
            setTimeout(function () {
                text_style_end.fadeOut(200);
            },2600);
            lastFrame = Math.floor(didText[frameEnd/2]);
        }

    }

}




$('#submitBtn').on("click",function () {
    var street = $('.locaInput').val();
    if (area1 == '' || area2 == '') {
        alert('请选择完整的区域位置');
        return false;
    }else if(street == ''){
        alert('请填写完整的街道名');
        return false;
    }else {
        $.ajax({
            url: "index.html",
            method: 'post',
            dataType: 'json',
            data:{'location1':area1 ,'location2': area2,'street':street},
            success: function(res) {
                if(res.status == 0){
                    $('#confirm').bPopup({
                        modalClose: false
                    })
                }else{
                    alert('你已经提交过了哦');
                }
            },
            error: function(){
                $('#confirm').bPopup({
                    modalClose: false
                });
                //alert('当前网络状况较差，请检查网络后再试!');
                return false;
            }
        });
    }
});

//对于区域部分的选择
$('#location').bind("click",function(){

    //console.log("1111");
    $('body').css("overflow","hidden");
    $('html').css("overflow","hidden");
    $('#location_hover').bPopup({
        positionStyle:'fixed'
    });
});
$('#container_close').bind("click",function(){

    $('body').css("overflow","scroll");
    $('html').css("overflow","scroll");
    $('#location_hover').bPopup().close();
    if ( area1 == "" || area2 == "") {
        $('#location_info>p').html('所在地区<span style="float: right;">请选择   ></span>');
    } else {
        $('#location_info>p').html(area1 + "-" + area2);
    }
});
var Location_info = new Object();
Location_info['北京市'] = ['东城区','西城区','崇文区','宣武区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','昌平区','大兴区','平谷区','怀柔区','密云县','延庆县'];
Location_info['上海市'] = ['浦东新区','徐汇区','黄浦区','杨浦区','虹口区','闵行区','长宁区','普陀区','宝山区','静安区','闸北区','卢湾区','松江区','嘉定区','南汇区','金山区','青浦区','奉贤区','崇明县'];
Location_info['重庆市'] = ['万州区','涪陵区','渝中区','大渡口区','江北区','沙坪坝区','九龙坡区','南岸区','北碚区','万盛区','双桥区','渝北区','巴南区','长寿县','綦江县','潼南县','铜梁县','大足县','荣昌县','璧山县','梁平县','城口县','丰都县','垫江县','武隆县','忠  县','开  县','云阳县','奉节县','巫山县','巫溪县','黔江土家族苗族自治县','石柱土家族自治县','秀山土家族苗族自治县','酉阳土家族苗族自治县','彭水苗族土家族自治县','江津市','合川市','永川市','南川市'];
Location_info['四川省'] = ['成都市','自贡市','攀枝花市','泸州市','德阳市','绵阳市','广元市','遂宁市','内江市','乐山市','南充市','宜宾市','广安市','达川地区','雅安地区','阿坝藏族羌族自治州','甘孜藏族自治州','凉山彝族自治州','巴中地区','眉山地区','资阳地区'];
Location_info['广东省'] = ['广州市','韶关市','深圳市','珠海市','汕头市','佛山市','江门市','湛江市','茂名市','肇庆市','惠州市','梅州市','汕尾市','河源市','阳江市','清远市','东莞市','中山市','潮州市','揭阳市','云浮市'];
Location_info['陕西省'] = ['西安市','铜川市','宝鸡市','咸阳市','渭南市','延安市','汉中市','安康地区','商洛地区','榆林地区'];
Location_info['广西省'] = ['南宁市','柳州市','桂林市','梧州市','北海市','防城港市','钦州市','贵港市','玉林市','崇左市','来宾市','贺州市','百色市','河池市'];
Location_info['湖北省'] = ['武汉市','黄石市','十堰市','宜昌市','襄樊市','鄂州市','荆门市','孝感市','荆州市','黄冈市','咸宁市','恩施土家族苗族自治州','省直辖行政单位','仙桃市','潜江市','天门市','神农架林区'];
Location_info['云南省'] = ['昆明市','曲靖市','玉溪市','昭通地区','楚雄彝族自治州','红河哈尼族彝族自治州','文山壮族苗族自治州','思茅市','西双版纳傣族自治州','大理白族自治州','保山地区','德宏傣族景颇族自治州','丽江地区','怒江傈僳族自治州','迪庆藏族自治州','临沧地区'];
Location_info['天津市'] = ['和平区','河东区','河西区','南开区','河北区','红桥区','塘沽区','汉沽区','大港区','东丽区','西青区','津南区','北辰区','武清区','宝坻区','宁河县','静海县','蓟  县'];
Location_info['河北省'] = ['石家庄市','唐山市','秦皇岛市','邯郸市','邢台市','保定市','张家口市','承德市','沧州市','廊坊市','衡水市'];
Location_info['山西省'] = ['太原市','大同市','阳泉市','长治市','晋城市','朔州市','忻州市','吕梁市','晋中市','临汾市','运城市'];
Location_info['内蒙古'] = ['呼和浩特市','包头市','乌海市','赤峰市','呼伦贝尔市','兴安盟','通辽市','锡林郭勒盟','乌兰察布盟','伊克昭盟','巴彦淖尔盟','阿拉善盟'];
Location_info['辽宁省'] = ['沈阳市','大连市','鞍山市','抚顺市','本溪市','丹东市','锦州市','营口市','阜新市','辽阳市','盘锦市','铁岭市','朝阳市','葫芦岛市'];
Location_info['吉林省'] = ['长春市','吉林市','四平市','辽源市','通化市','白山市','松原市','白城市','延边朝鲜族自治州'];
Location_info['黑龙江省'] = ['哈尔滨市','齐齐哈尔市','鸡西市','鹤岗市','双鸭山市','大庆市','伊春市','佳木斯市','七台河市','牡丹江市','黑河市','绥化市','大兴安岭地区'];
Location_info['江苏省'] = ['南京市','无锡市','徐州市','常州市','苏州市','南通市','连云港市','淮阴市','盐城市','扬州市','镇江市','泰州市','宿迁市'];
Location_info['浙江省'] = ['杭州市','宁波市','温州市','嘉兴市','湖州市','绍兴市','金华市','衢州市','舟山市','台州市','丽水市'];
Location_info['安徽省'] = ['合肥市','芜湖市','蚌埠市','淮南市','马鞍山市','淮北市','铜陵市','安庆市','黄山市','滁州市','阜阳市','宿州市','六安市','宣城市','巢湖市','池州市'];
Location_info['福建省'] = ['福州市','厦门市','宁德市','莆田市','泉州市','漳州市','龙岩','三明市','南平市'];
Location_info['江西省'] = ['南昌市','景德镇市','萍乡市','九江市','新余市','鹰潭市','赣州市','宜春市','上饶市','吉安市','抚州市'];
Location_info['山东省'] = ['济南市','青岛市','淄博市','枣庄市','东营市','烟台市','潍坊市','济宁市','泰安市','威海市','日照市','莱芜市','临沂市','德州市','聊城市','滨州地区','菏泽地区'];
Location_info['河南省'] = ['郑州市','开封市','洛阳市','平顶山市','安阳市','鹤壁市','新乡市','焦作市','濮阳市','许昌市','漯河市','三门峡市','南阳市','商丘市','信阳市','周口市','驻马店','济源市'];
Location_info['湖南省'] = ['长沙市','株洲市','湘潭市','衡阳市','邵阳市','岳阳市','常德市','张家界市','益阳市','郴州市','永州市','怀化市','娄底地区','湘西土家族苗族自治州'];
Location_info['海南省'] = ['琼海市','儋州市','五指山市','文昌市','万宁市','东方市','定安县','屯昌县','澄迈县','临高县','白沙黎族自治县','昌江黎族自治县','乐东黎族自治县','陵水黎族自治县','保亭黎族苗族自治县','琼中黎族苗族自治县','西南中沙群岛办事处','海口市','三亚市'];
Location_info['贵州省'] = ['贵阳市','六盘水市','遵义市','铜仁地区','黔西南布依族苗族自治州','毕节地区','安顺地区','黔东南苗族侗族自治州','黔南布依族苗族自治州'];
Location_info['西藏'] = ['拉萨市','昌都地区','山南地区','日喀则地区','那曲地区','阿里地区','林芝地区'];
Location_info['甘肃省'] = ['兰州市','嘉峪关市','金昌市','白银市','天水市','酒泉地区','张掖地区','武威地区','定西地区','陇南地区','平凉地区','庆阳地区','临夏回族自治州','甘南藏族自治州'];
Location_info['青海省'] = ['西宁市','海东地区','海北藏族自治州','黄南藏族自治州','海南藏族自治州','果洛藏族自治州','玉树藏族自治州','海西蒙古族藏族自治州'];
Location_info['宁夏'] = ['银川市','石嘴山市','吴忠市','固原地区','中卫市'];
Location_info['新疆'] = ['乌鲁木齐市','克拉玛依市','吐鲁番地区','哈密地区','昌吉回族自治州','博尔塔拉蒙古自治州','巴音郭楞蒙古自治州','阿克苏地区','克孜勒苏柯尔克孜自治州','喀什地区','和田地区','伊犁哈萨克自治州','塔城地区','阿勒泰地区','石河子市','阿拉尔市','图木舒克市','五家渠市'];
//console.log(Location_info);

var area1 = "";
var area2 = "";
for (var i in Location_info) {
    $('#area1_content').append("<div class='area1_list'>" + i + "</div>");
}
$('.area1_list').bind("click",function(){
    //console.log("333");
    var a = $(this).html();
    area1 = a;
    $('#area1_title').html(a);
    $('#area1_title').css('color','#4c4c4c');
    $('#line_select').animate({left:'27vw'});
    $('#area2_title').fadeIn(50);
    $('#area1_content').fadeOut(10);
    $('#area2_content').fadeIn(50);
    for (var j in Location_info[area1]) {
        $('#area2_content').append("<div class='area2_list'>" + Location_info[area1][j] + "</div>");
    }
    $('.area2_list').bind("click",function(){
        var b = $(this).html();
        area2 = b;
        $('#area2_title').html(b);
        $('#area2_title').css('color','#4c4c4c');

        if ( area1 == "" && area2 == "") {
            $('#location_info>p').html("所在地区");
        } else {
            $('#location_info>p').html(area1 + "-" + area2);
            $('#location_hover').bPopup().close();
            //console.log("444");
            $('body').css("overflow","scroll");
            $('html').css("overflow","scroll");

        }
    });
});
$('#area1_title').bind("click",function(){

    area2 = "";
    $('#area2_title').fadeOut(10);
    $('#area2_title').html('请选择');
    $('#area2_title').css('color','#e0002a');
    $('#line_select').animate({left:'3vw'});
    $('#area1_content').fadeIn(50);
    $('#area2_content').children('.area2_list').remove();
    $('#area2_content').fadeOut(10);
});


$('.music').on('click',function () {
    console.log(123);
    if(music==1){
        music = 0;

        PageSound.music[2].pause();
        PageSound.music[PageSound.interval].pause();
        // PageSound.music[0].pause();

        $(this).removeClass('play');

    }else{
        music = 1;

        console.log(PageSound.open);
        if(!PageSound.open) {
            PageSound.music[2].play();
        }
        if(Movie.Pos>=18600) {
            PageSound.music[PageSound.interval].play();
        }
        // PageSound.music[PageSound.interval].play();
        // PageSound.music[0].play();


        $(this).addClass('play');

    }
});


