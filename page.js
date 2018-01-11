
var ScreenSize = {'width':640,'height':1138};
var BaseURL = "./images/";

var debug = new PageDebug("right","20%","20","#000000");

debug.close();


var pre_resource = {
    "img":[
        {'name':'loader','src':'loader.png'},
        {'name':'music','src':'music.png'},
        {'name':'music-stop','src':'music-stop.png'},
    ]

};

var page_resource = {
    "img":[
        {'name':'scene','src':'scene.jpg'},
        {'name':'obj_0_0','src':'obj_0_0.png'},
        {'name':'obj_1_0','src':'obj_1_0.png'},
        {'name':'obj_2_0','src':'obj_2_0.png'},
        {'name':'obj_3_0','src':'obj_3_0.png'},
        {'name':'obj_4_0','src':'obj_4_0.png'},
        {'name':'obj_5_0','src':'obj_5_0.png'},
        {'name':'obj_6_0','src':'obj_6_0.png'},
        {'name':'obj_7_0','src':'obj_7_0.png'},
        {'name':'obj_8_0','src':'obj_8_0.png'},
        {'name':'obj_9_0','src':'obj_9_0.png'},
        {'name':'obj_10_0','src':'obj_10_0.png'},
        {'name':'obj_11_0','src':'obj_11_0.png'},
        {'name':'obj_12_0','src':'obj_12_0.png'},
        {'name':'obj_13_0','src':'obj_13_0.png'},
        {'name':'obj_14_0','src':'obj_14_0.png'},
        {'name':'obj_15_0','src':'obj_15_0.png'},
        {'name':'obj_16_0','src':'obj_16_0.png'},
        {'name':'obj_17_0','src':'obj_17_0.png'},
        {'name':'obj_18_0','src':'obj_18_0.png'},
        {'name':'obj_19_0','src':'obj_19_0.png'},
        {'name':'obj_20_0','src':'obj_20_0.png'},
        {'name':'obj_21_0','src':'obj_21_0.png'},
        {'name':'obj_22_0','src':'obj_22_0.png'},
        {'name':'obj_23_0','src':'obj_23_0.png'},
        {'name':'obj_24_0','src':'obj_24_0.png'},
        {'name':'obj_25_0','src':'obj_25_0.png'},
        {'name':'obj_26_0','src':'obj_26_0.png'},
        {'name':'obj_27_0','src':'obj_27_0.png'},
        {'name':'obj_28_0','src':'obj_28_0.png'},
        {'name':'obj_29_0','src':'obj_29_0.png'},
        {'name':'obj_30_0','src':'obj_30_0.png'},
        {'name':'obj_31_0','src':'obj_31_0.png'},
        {'name':'obj_32_0','src':'obj_32_0.png'},
        {'name':'obj_33_0','src':'obj_33_0.png'},
        {'name':'obj_34_0','src':'obj_34_0.png'},
        {'name':'obj_35_0','src':'obj_35_0.png'},
        {'name':'obj_36_0','src':'obj_36_0.png'},
        {'name':'obj_37_0','src':'obj_37_0.png'},
        {'name':'obj_38_0','src':'obj_38_0.png'},
        {'name':'obj_39_0','src':'obj_39_0.png'},
        {'name':'obj_40_0','src':'obj_40_0.png'},
        {'name':'obj_41_0','src':'obj_41_0.png'},
        {'name':'obj_42_0','src':'obj_42_0.png'},
        {'name':'obj_43_0','src':'obj_43_0.png'},
        {'name':'obj_45_0','src':'obj_45_0.png'},
        {'name':'end0','src':'obj_44_0_1.png'},
        {'name':'end1','src':'obj_44_1_1.png'},
        {'name':'end2','src':'obj_44_2_1.png'},
        {'name':'end3','src':'obj_44_3_1.png'},
        {'name':'end4','src':'obj_44_9_0.png'},
        {'name':'end5','src':'obj_44_8_0.png'},
        {'name':'end6','src':'obj_44_7_0.png'},
        {'name':'end7','src':'obj_44_6_0.png'},
        {'name':'end8','src':'obj_44_5_0.png'},
        {'name':'end9','src':'obj_44_4_0.png'},
        {'name':'end11','src':'obj_44_3_0.png'},
        {'name':'end12','src':'obj_44_2_0.png'},
        {'name':'end13','src':'obj_44_1_0.png'},
        {'name':'end14','src':'obj_44_0_0.png'},


    ],
    "group":[

        /*{'prefix':'obj_0_','postfix':'.png','start':0,'end':3},*/
        {'prefix':'obj_3_','postfix':'.png','start':0,'end':3},
        {'prefix':'obj_4_','postfix':'.png','start':0,'end':2},
        {'prefix':'obj_6_','postfix':'.png','start':0,'end':1},
        {'prefix':'obj_8_','postfix':'.png','start':0,'end':4},
        {'prefix':'obj_10_','postfix':'.png','start':0,'end':4},
        {'prefix':'obj_11_','postfix':'.png','start':0,'end':1},
        {'prefix':'obj_12_','postfix':'.png','start':0,'end':1},
        {'prefix':'obj_14_','postfix':'.png','start':0,'end':8},

        {'prefix':'obj_15_','postfix':'.png','start':0,'end':1},
        {'prefix':'obj_17_','postfix':'.png','start':0,'end':1},
        {'prefix':'obj_19_','postfix':'.png','start':0,'end':1},
        {'prefix':'obj_20_','postfix':'.png','start':0,'end':1},
        {'prefix':'obj_21_','postfix':'.png','start':0,'end':2},
        {'prefix':'obj_22_','postfix':'.png','start':0,'end':1},
        {'prefix':'obj_23_','postfix':'.png','start':0,'end':5},
        {'prefix':'obj_24_','postfix':'.png','start':0,'end':7},
        {'prefix':'obj_26_','postfix':'.png','start':0,'end':1},
        {'prefix':'obj_28_','postfix':'.png','start':0,'end':3},
        {'prefix':'obj_29_','postfix':'.png','start':0,'end':1},
        {'prefix':'obj_30_','postfix':'.png','start':0,'end':1},
        {'prefix':'obj_31_','postfix':'.png','start':0,'end':1},
        {'prefix':'obj_32_','postfix':'.png','start':0,'end':9},
        {'prefix':'obj_33_','postfix':'.png','start':0,'end':1},
        {'prefix':'obj_35_','postfix':'.png','start':0,'end':31},
        {'prefix':'obj_36_','postfix':'.png','start':0,'end':2},
        {'prefix':'obj_37_','postfix':'.png','start':0,'end':2},
        {'prefix':'obj_38_','postfix':'.png','start':0,'end':1},
        {'prefix':'obj_40_','postfix':'.png','start':0,'end':26},
        {'prefix':'obj_43_','postfix':'.png','start':0,'end':19}
    ],
    "music":[
        {'name':'sound_0','src':'sound_0.mp3'},
        {'name':'sound_1','src':'sound_1.mp3'},
        {'name':'sound_2','src':'sound_2.mp3'},
        {'name':'sound_3','src':'sound_3.mp3'},
        {'name':'sound_4','src':'sound_4.mp3'},
        {'name':'sound_5','src':'sound_5.mp3'},
        {'name':'sound_6','src':'sound_6.mp3'},
        {'name':'sound_7','src':'sound_7.mp3'},
        {'name':'sound_8','src':'sound_8.mp3'},
        {'name':'sound_9','src':'sound_8.mp3'},
        {'name':'sound_10','src':'sound_8.mp3'},
    ],
    "myImg":[]
};

for(var i =0;i<Math.min(endImg.length,3);i++){
    page_resource['myImg'].push({'name':'mywork'+i,'src':"/wx/"+ endImg[i].replace(/-thumb/,'')});
}


var PageLock = true;

// var ScreenSize = {Width:640,Height:1040};



function page_scroll(e){
    if (PageLock){
        e.preventDefault();
    }
}

var Page_Loader;

$(document).ready(function(){
    document.body.addEventListener('touchmove', function (e){page_scroll(e);}, false);
    //	document.body.addEventListener('touchend', function (e){e.preventDefault();}, false);

    ScreenSize.Width = window.innerWidth;
    ScreenSize.Height = window.innerHeight;




    PageSound.play(0);

    Page_Loader = new PageLoader(BaseURL);
    //Page_Loader.noCache();

    //开场load动画加载处理
    Page_Loader.load(pre_resource,null,function(){
        $("#loader").show();

        //Page_Loader.rate(20);
        Page_Loader.load(page_resource,function(process){
            $("#process").html(process+"%");
        },function(){
            //开场动画结束，电影开始

            $("#loader").fadeOut(500);
            $('#popup_open').bPopup({
                positionStyle:'fixed',
                // transition: 'slideDown',
                transitionClose: 'slideDown',
                modalClose:false,
                opacity: 0
            });
            c=setInterval(changeFrame,changeTime);

            Movie.init();

        });
    });


});




var PageSound = {

    music:null,

    _init:false,


    interval:1,

    openVolume:1, //控制开始的声音

    open:0,
    init:function(){
        debug.write("PageSound.init");
        if (PageSound._init || !music){
            return;
        }
        PageSound._init = true;




        PageSound.music = new Array();
        PageSound.music[0] = document.createElement("audio");
        PageSound.music[1] = document.createElement("audio");
        PageSound.music[2] = document.createElement("audio");
        PageSound.music[2].src = "./sound/sound_0.mp3";
        PageSound.music[2].loop = true;

        // PageSound.music[1].src = "./sound/sound_0.mp3";

        PageSound.music[2].play();
        $('html').one('click',function(){
            if (!music ){
                return;
            }
            PageSound.music[2].play();
            PageSound.music[0].play();
            PageSound.music[1].play();
        });
        wx.ready(function(){
            if (!music ){
                return;
            }
            PageSound.music[2].play();
            PageSound.music[0].play();
            PageSound.music[1].play();
        });
        // PageSound.music[1].play();
        //				PageSound.music.play();
    },
    play:function(id){
        PageSound.init();
        if(id == 0)return;
        if(id == 12 ){id = 2};
        if(id == 8 ){id = 1};
        if(id == 9 ){id = 8};
        if(id == 10 ){id = 2};
        if(id == 13 ){id = 10};

        if(id == 11 ){this.end(); return;};
        PageSound.interval = (PageSound.interval+1)%2;
        // console.log('pause:'+PageSound.interval);
        //PageSound.music[PageSound.interval].pause();
        PageSound.music[PageSound.interval].src = "./sound/sound_"+id+".mp3";

        if (!music)return;



//debug.write("ps.interval:"+PageSound.interval);
//         debug.write("ps.play:"+id);
        PageSound.music[PageSound.interval].play();


    },
    end:function () {
        if( !music){return}
        PageSound.interval = (PageSound.interval+1)%2;

        PageSound.music[0].pause();
        PageSound.music[1].pause();
        PageSound.music[2].pause();

        PageSound.music[PageSound.interval].src = "./sound/sound_"+9+".mp3";
        // PageSound.music[PageSound.interval].loop = true;
        PageSound.music[PageSound.interval].play();
        wx.ready(function(){
            if (!music){
                return;
            }
            PageSound.music[PageSound.interval].play();
        });

        // PageSound.music[3] = document.createElement("audio");
        // PageSound.music[3].src = "./sound/sound_9.mp3";
        // PageSound.music[1].src = "./sound/sound_0.mp3";
        // PageSound.music[].play();
        /*   wx.ready(function(){
         PageSound.music[3].play();
         });*/
    }
};

var Movie = {

    MovieInterval:null,
    MovieFrame:0,
    MovieCanvas:null,
    MovieContext:null,
    ObjCanvas:null,
    ObjContext:null,
    Width:640,
    Height:1138,
    Pos:0,//y轴位置
    Speed:0,
    SceneHeight:24500,

    init:function(){
        console.log('init');
        $("#movie").show();
        Movie.Height = ScreenSize.Height;
        Movie.MovieCanvas = document.getElementById("MovieCanvas");
        Movie.MovieContext = Movie.MovieCanvas.getContext('2d');
        $(Movie.MovieCanvas).attr('height',ScreenSize.Height);

        Movie.ObjCanvas = document.createElement("canvas");
        $(Movie.ObjCanvas).attr('width',Movie.Width).attr("height",Movie.Height);
        Movie.ObjContext = Movie.ObjCanvas.getContext("2d");
        Movie.play();

        document.getElementById("movie").addEventListener("touchstart",touch_start,false);
        document.getElementById("movie").addEventListener("touchmove",touch_move,false);
        document.getElementById("movie").addEventListener("touchend",touch_end,false);
        document.getElementById("movie").addEventListener('click', click, false);

    },

    play:function(){
        Movie.MovieFrame = 0;
        Movie.MovieInterval = setInterval(
            function(){
                if( PageSound.open && PageSound.openVolume>0){
                    PageSound.music[2].volume=PageSound.openVolume;
                    PageSound.openVolume = PageSound.openVolume-0.02;
                }else if(PageSound.open){
                    PageSound.openVolume = 0;
                    PageSound.music[2].pause();
                    // PageSound.open = 0;
                }
                Movie.MovieContext.clearRect(0,0,Movie.Width,Movie.Height); //清空画布
                Movie.MovieContext.drawImage(PageResource['scene'],0,Movie.Pos,Movie.Width,Movie.Height,0,0,Movie.Width,Movie.Height);

                Movie.ObjContext.clearRect(0,0,Movie.Width,Movie.Height);

                var pos = [];
                for(var i=0;i<Objs.length;i++){
                    if (Objs[i].show()){
                        pos = Objs[i].pos();
                        pos[1] = pos[1] - Movie.Pos;
                        // console.log(Objs[i].img+Objs[i].frame());

                        Movie.ObjContext.drawImage(PageResource[Objs[i].img+Objs[i].frame()],pos[0],pos[1]);
                    }
                }
                for(var i=0;i<strings.length;i++){
                    if (strings[i].show()){
                        pos = strings[i].pos();
                        pos[1] = pos[1] - Movie.Pos;
                        //设置字体样式
                        Movie.ObjContext.font = "34px 黑体";
                        //设置字体颜色
                        Movie.ObjContext.fillStyle = "#ffffff";
                        Movie.ObjContext.fillText(strings[i].frame(),pos[0],pos[1]);

                    }
                }

                for(var i=0;i<lines.length;i++){
                    if (lines[i].show()){
                        var moveTo = lines[i].moveTo();
                        moveTo[1] = moveTo[1] - Movie.Pos;
                        var lineTo = lines[i].lineTo();
                        lineTo[1] = lineTo[1] - Movie.Pos;
                        /*                        console.log(moveTo);
                         console.log(lineTo);*/
                        Movie.ObjContext.beginPath();
                        Movie.ObjContext.moveTo(moveTo[0],moveTo[1]);
                        Movie.ObjContext.lineTo(lineTo[0],lineTo[1]);
                        // Movie.ObjContext.fillStyle="#ffffff";
                        Movie.ObjContext.lineWidth=3;
                        Movie.ObjContext.strokeStyle = "#ffffff";
                        Movie.ObjContext.stroke();

                    }
                }

                Movie.MovieContext.drawImage(Movie.ObjCanvas,0,0);

                Movie.MovieFrame++;

                if (Movie.MovieFrame==24){
                    Movie.MovieFrame = 0;
                    debug.write(Movie.Pos);
                }

                if (!touchStart){

                    Movie.Speed = Movie.Speed*0.8;

                }else{

                    Movie.Speed = oldY - newY;
                    oldY = newY;
                }
                Movie.Pos = Movie.Pos +Movie.Speed;
                Movie.Pos = Math.max(Movie.Pos,0);
                Movie.Pos = Math.min(Movie.Pos,Movie.SceneHeight-Movie.Height);




                for (i = 1; i < SoundPoint.length; i++) {
                    if (Movie.Pos<SoundPoint[i][1]  && Movie.Pos>SoundPoint[i][0]  /*&& Movie.Pos>SoundPoint[i]*/) {
                        if (SoundPlay == i)return;
                        SoundPlay = i;
                        // console.log('play:'+i);
                        PageSound.play(i);
                        break;
                    }else{
                        if (SoundPlay == i){
                            // console.log('pause:'+i);
                            SoundPlay = -1;
                            PageSound.music[PageSound.interval].pause();
                        }
                    }
                }

            },40);
    }
}
var SoundPoint = [
    [0,1],//0
    [1800,2400], //海滩拍照1
    [2400,3800],//摩托1 2
    [3800,5300],//小猫 3
    [6000,7600],//离破守 4
    [9500,10500],//八条 5
    [11000,12000],//red 6
    [11000,13000],//火龙 7
    [14500,15000],//老爷爷 8
    [15000,17650],//DJ 9
    [17730,18650],//摩托车车 10
    [18600,23000],//片尾曲 11
    [7600,8500],//气球狗  摩托车车车12
    [100,1000],//片头汽笛 13
]



var SoundPlay = 0;







var newY,oldY;
newY = 0;
oldY = 0;
var touchStart = false;
function touch_start(e){


    if (touchStart) return;
    if(e.touches.length==1){ //只有一个手指
        touchStart = true;

        oldY =  e.touches[0].pageY;
        newY= oldY;
    }
}

function touch_move(e){

    if (!touchStart)return;

    newY = e.touches[0].pageY;



}

function touch_end(e){

    if (!touchStart)return;

    touchStart = false;

}

var clickDelta = 120;
var posX = 0;
var posY = 0;
var popStr = '';
var batiaoOpen = 0;
function click(e) {
    if(Objs[42].show()){
        posX = Objs[42].pos()[0];
        posY = Objs[42].pos()[1] - Movie.Pos;
        popStr = Objs[42].pos()[2];
        if(popStr == 'batiao'){
            $('.guidePage').show();
            $('#popup_batiao .swiper-container').hide();
            if(!batiaoOpen){
                setTimeout(function () {
                    $('.guidePage').hide();
                    $('#popup_batiao .swiper-container').show();
                },4000);
                batiaoOpen = 1;

            }else{
                setTimeout(function () {
                    $('.guidePage').hide();
                    $('#popup_batiao .swiper-container').show();
                },1500);
            }

        }
        if(e.clientX<posX+clickDelta && e.clientX>posX &&
            e.clientY<posY+clickDelta && e.clientY>posY
        ){

            $('#popup_'+ popStr).bPopup({
                positionStyle:'fixed',
                closeClass:'pop_close',
                opacity:0,
                modalClose:true
            });
            PageLock = false;
        }
    }
}

$('.pop_close').on('click',function () {
    PageLock = true;
});






var MovEnd = null;
var Objs = [
    {
        img:'obj_0_',
        show:function(){
            return Movie.Pos>=0 && Movie.Pos<=1200;
        },
        pos:function(){

            x = 0-30*Movie.Pos/100;
            x = Math.max(x,-250);
            y = 620-2.4*Movie.Pos/100;
            y = Math.max(y,600);
            return [x,y];

        },
        frame:function(){
            return 0;
        }
    },//云左 0
    {
        img:'obj_1_',
        show:function(){
            return Movie.Pos>=0 && Movie.Pos<=1200;
        },
        pos:function(){

            return [3,410];
        },
        frame:function(){
            return 0;
        }
    },//自由女神 1
    {
        img:'obj_2_',
        show:function(){
            return Movie.Pos>=0 && Movie.Pos<=1200;
        },
        pos:function(){
            x = 102+30*Movie.Pos/100;
            x = Math.min(x,350);
            y = 788+2*Movie.Pos/100;
            y = Math.min(y,900);
            return [x,y];
        },
        frame:function(){
            return 0;
        }
    },//云右 2
    {
        img:'obj_34_',
        show:function(){
            return Movie.Pos>=0 && Movie.Pos<=1200;
        },
        pos:function(){
            y = -4*(Movie.Pos-26500)/100;
            x = 100*(y-1000)/8;

            x = Math.max(x,-700);
            y = Math.max(y,1000);
            return [x,y];
        },
        frame:function(){
            return 0;

        }
    },//小船 3
    {
        img:'obj_3_',
        initPos:500,
        endPos:1400,
        show:function(){
            return Movie.Pos>=500 && Movie.Pos<=2200;
        },
        pos:function(){
            y = 1*(Movie.Pos+3600)/3;
            x = 2*(y-1430)/1;

            return [x,y];
        },
        frame:function(){
            var nowPos = this.initPos;
            var step = parseInt((this.endPos-this.initPos)/12);
            while (nowPos <= this.endPos) {
                if(nowPos<Movie.Pos && Movie.Pos<nowPos+step){
                    var frame = parseInt(nowPos-this.initPos)/step;
                    // console.log(frame);
                    // console.log(frame);
                    if(frame > 9){
                        return frame-9;
                    }
                    if(frame > 6){
                        return frame-6;
                    }
                    if(frame > 3){
                        return frame-3;
                    }
                    return frame;
                }else if(Movie.Pos < this.initPos){
                    return 0;
                }else if(Movie.Pos > this.endPos){
                    return 3;
                }
                nowPos = nowPos + step;
            }
            //return 0;

        }

    },//篮球人 4
    {
        img:'obj_4_',
        initPos : 750,
        endPos : 840,
        show:function(){
            return Movie.Pos>=750 && Movie.Pos<=1700;
        },
        pos:function(){
            return [113,1342];
        },
        frame:function(){
            var nowPos = this.initPos;
            var step =parseInt((this.endPos-this.initPos)/2);

            // console.log(123);
            while (nowPos <= this.endPos) {
                if(nowPos<Movie.Pos && Movie.Pos<nowPos+step){
                    return parseInt(nowPos-this.initPos)/step;
                }else if(Movie.Pos < this.initPos){
                    return 0;
                }else if(Movie.Pos > this.endPos){
                    return 2;
                }
                nowPos = nowPos + step;
            }
        }
    },// 5
    {
        img:'obj_39_',
        shot:0,
        inPos:0,
        show:function(){
            if(Movie.Pos<3000 && Movie.Pos>1400){
                if (Movie.Pos<2300 && Movie.Pos>1900){
                    if(!this.inPos){
                        this.inPos = 1;
                    }
                }
                if(!this.shot && this.inPos ){
                    if(Movie.MovieFrame == 23){
                        // console.log('shot');
                        this.shot = 1;
                    }
                    return true;
                }else{
                    return false;
                }

            }else{
                this.shot = 0;
                this.inPos = 0;
                return false;
            }
        },

        pos:function(){
            return [0,2151];
        },

        frame:function(){
            return 0
        }
    },//海滩拍照片 6
    {
        img:'obj_5_',
        show:function(){
            return Movie.Pos>=1600 && Movie.Pos<=4300;
        },
        pos:function(){
            return [0,3239];
        },
        frame:function(){
            return 0;
        }
    },//机车房 左侧 7
    {
        img:'obj_6_',
        show:function(){
            return Movie.Pos>=2150 && Movie.Pos<=3850;
        },
        pos:function(){

            x = 2000-2*Movie.Pos/3;
            x = Math.max(-400,x);
            y = 2700+2*Movie.Pos/7;

            y = Math.min(3700,y);
            return [x,y];

        },
        frame:function(){
            if(Math.abs(Movie.Speed)<1){
                return 0;
            }else
            {
                return Math.floor(Movie.MovieFrame/12);

            }


        }
    },//摩托1 8
    {
        img:'obj_7_',
        show:function(){
            return Movie.Pos>=1200 && Movie.Pos<=4300;
        },
        pos:function(){
            return [0,2929];

        },
        frame:function(){
            return 0;
        }
    },// 9
    {
        img:'obj_8_',
        initPos : 3100,
        endPos : 3600,
        f:0,
        show:function(){
            if(this.f!=0){
                return Movie.Pos>=1700 && Movie.Pos<=4500;
            }else{
                return Movie.Pos>=this.initPos && Movie.Pos<=4500;

            }
        },
        pos:function(){

            return [14,3925];

        },
        frame:function(){
            var nowPos = this.initPos;
            var step =parseInt((this.endPos-this.initPos)/4);

            // console.log(123);
            while (nowPos <= this.endPos) {
                if(nowPos<Movie.Pos && Movie.Pos<nowPos+step){
                    if(parseInt(nowPos-this.initPos)/step > this.f){
                        this.f = parseInt(nowPos-this.initPos)/step;
                        return parseInt(nowPos-this.initPos)/step;
                    }else{
                        return this.f;
                    }
                }else if(Movie.Pos < this.initPos){
                    return this.f;
                }else if(Movie.Pos > this.endPos){
                    this.f = 4;
                    return 4;
                }
                nowPos = nowPos + step;
            }
        }
    },//五行字 10
    {
        img:'obj_9_',
        show:function(){
            return Movie.Pos>=2100 && Movie.Pos<=5300;
        },
        pos:function(){
            return [0,3616];
        },
        frame:function(){
            return 0;
        }
    },// 11
    {
        img:'obj_10_',
        show:function(){
            return Movie.Pos>=2600 && Movie.Pos<=5000;

        },
        pos:function(){

            return [224,4752];

        },
        frame:function(){
            return Math.floor(Movie.MovieFrame/5);
        }
    },// 12 小猫
    {
        img:'obj_11_',
        show:function(){
            return Movie.Pos>=3500&&Movie.Pos<=5180;
        },
        pos:function(){
            y=2*(Movie.Pos+5000)/4;
            x=10*(y-4800)/5;
            return[x,y];
            // return [0,4760];

        },
        frame:function(){
            if(Math.abs(Movie.Speed)<1){
                return 0;
            }else
            {
                return Math.floor(Movie.MovieFrame/12);
            }


        }
    }, //摩托2 13
    {
        img:'obj_42_',
        show:function(){
            return Movie.Pos>=3500&&Movie.Pos<=5580;
        },
        pos:function(){
            y=-4*(Movie.Pos-10300)/4;
            x=10*(y-5200)/5;

            return[x,y];
            // return [0,4760];

        },
        frame:function(){
            return 0;
        }
    }, //小蓝车 14
    {
        img:'obj_12_',
        show:function(){
            return Movie.Pos>=5050&& Movie.Pos<=6600;
        },
        pos:function(){
            y=2*(Movie.Pos+6500)/4;
            x=-2*(y-6250)/1;

            return [x,y];

        },
        frame:function(){
            if(Math.abs(Movie.Speed)<1){
                return 0;
            }else
            {
                return Math.floor(Movie.MovieFrame/12);

            }


        }
    }, //摩托3 15
    {
        img:'obj_13_',
        show:function(){
            return Movie.Pos>=2600 &&  Movie.Pos<=6300;
        },
        pos:function(){

            return [0,4796];

        },
        frame:function(){
            return 0;


        }
    }, // 16
    {
        img:'obj_14_',
        initPos : 6300,
        endPos : 6800,
        out:0,
        show:function(){
            return Movie.Pos>=5000 && Movie.Pos<=7800;
        },
        pos:function(){
            return [0,6513];
        },
        frame:function(){
            var nowPos = this.initPos;
            var step =parseInt((this.endPos-this.initPos)/8);

            if(!this.out){
                while (nowPos <= this.endPos) {
                    if(nowPos<Movie.Pos && Movie.Pos<nowPos+step){
                        // console.log( parseInt(nowPos-this.initPos)/step);
                        return parseInt(nowPos-this.initPos)/step;
                    }else if(Movie.Pos < this.initPos){
                        return 0;
                    }else if(Movie.Pos > this.endPos){
                        this.out=1;
                        return 8;
                    }
                    nowPos = nowPos + step;
                }
            }else{
                return 8;
            }
        }
    },//破离守 17
    {
        img:'obj_15_',
        show:function(){
            return Movie.Pos>=6200 && Movie.Pos<=7335;
        },

        pos:function(){
            y=5*(Movie.Pos+2000)/6;
            x=20*(y-7350)/11;

            return [x,y];

        },
        frame:function(){
            if(Math.abs(Movie.Speed)<1){
                return 0;
            }else
            {
                return Math.floor(Movie.MovieFrame/12);

            }


        }
    }, //摩托4 18
    {
        img:'obj_16_',
        show:function(){
            return Movie.Pos>=6150 && Movie.Pos<=8700;
        },

        pos:function(){
            /*	x = 230+30*(Movie.Pos-1800)/200;
             x = Math.min(Math.max(x,230),260);
             y = 2380+20*(Movie.Pos-1800)/200;
             y = Math.min(Math.max(y,2380),2400);
             return [x,y];
             return [270,2400];*/
            return [0,7519];

        },
        /*f:0,*/
        frame:function(){
            /*if (Movie.Speed>0 && this.f==1){
             this.f = 0;
             }
             if (Movie.Speed<0 && this.f==0){
             this.f = 1;
             }
             return this.f;*/
            return 0;

        }
    },// 19
    {
        img:'obj_17_',
        show:function(){
            return Movie.Pos>=7290 && Movie.Pos<=8780;
        },

        pos:function(){
            y=(Movie.Pos+400);
            x=-34*(y-8400)/17;

            return [x,y];

        },
        frame:function(){

            if(Math.abs(Movie.Speed)<1){
                return 0;
            }else
            {
                return Math.floor(Movie.MovieFrame/12);

            }

        }
    },//摩托5 20
    {
        img:'obj_18_',
        show:function(){
            return Movie.Pos>=7445 && Movie.Pos<=9900;
        },

        pos:function(){

            return [0,8593];

        },
        frame:function(){

            return 0;

        }
    },// 21
    {
        img:'obj_19_',
        show:function(){
            return Movie.Pos>=8300 && Movie.Pos <= 9950;
        },

        pos:function(){
            y=4*(Movie.Pos+2600)/5;
            x=2*(y-9350)/1;

            return [x,y];

        },
        frame:function(){
            if(Math.abs(Movie.Speed)<1){
                return 0;
            }else
            {
                return Math.floor(Movie.MovieFrame/12);

            }

        }
    },//摩托6 22
    {
        img:'obj_41_',
        show:function(){
            return Movie.Pos>=8300 && Movie.Pos <= 9950;
        },

        pos:function(){

            y=-4*(Movie.Pos-21700)/5;
            x=2*(y-9850)/1;

            return [x,y];

        },
        frame:function(){
            return 0;
        }
    },//小黄车 23
    {
        img:'obj_20_',
        initPos : 9400,
        endPos : 9500,
        out:0,
        show:function(){
            return Movie.Pos>=8000 && Movie.Pos <= 11000;
        },

        pos:function(){
            return [0,9879];


        },
        frame:function(){

            var nowPos = this.initPos;
            var step =parseInt((this.endPos-this.initPos)/1);

            if(!this.out){
                // console.log(123);
                while (nowPos <= this.endPos) {
                    if(nowPos<Movie.Pos && Movie.Pos<nowPos+step){
                        // console.log( parseInt(nowPos-this.initPos)/step);
                        return parseInt(nowPos-this.initPos)/step;
                    }else if(Movie.Pos < this.initPos){
                        return 0;
                    }else if(Movie.Pos > this.endPos){
                        this.out=1;
                        return 1;
                    }
                    nowPos = nowPos + step;
                }
            }else{
                return 1;
            }

        }
    },// 24 八条酒馆
    {
        img:'obj_21_',
        initPos : 9600,
        endPos : 9900,
        out:0,
        show:function(){
            if(!this.out){
                return Movie.Pos>=this.initPos && Movie.Pos <= 11000;
            }else {
                return Movie.Pos>=8600 && Movie.Pos <= 11000;
            }
        },

        pos:function(){

            return [226,10322];


        },
        frame:function(){

            var nowPos = this.initPos;
            var step =parseInt((this.endPos-this.initPos)/2);

            if(!this.out){
                // console.log(123);
                while (nowPos <= this.endPos) {
                    if(nowPos<Movie.Pos && Movie.Pos<nowPos+step){
                        return parseInt(nowPos-this.initPos)/step;
                    }else if(Movie.Pos < this.initPos){
                        return 0;
                    }else if(Movie.Pos > this.endPos){
                        this.out=1;
                        return 2;
                    }
                    nowPos = nowPos + step;
                }
            }else{
                return 2;
            }

        }
    },// 25
    {
        img:'obj_22_',
        show:function(){
            return Movie.Pos>=9700 && Movie.Pos <=11300;
        },

        pos:function(){
            y=1*(Movie.Pos+11300)/2;
            x=-11*(y-10760)/5;

            return [x,y];

        },
        frame:function(){

            if(Math.abs(Movie.Speed)<1){
                return 0;
            }else
            {
                return Math.floor(Movie.MovieFrame/12);

            }

        }
    },//摩托7 26
    {
        img:'obj_23_',
        shot:0,
        inPos:0,
        show:function(){
            if( Movie.Pos>=10046 && Movie.Pos <=12300){
                return true;
            }else{
                this.shot = 0;
                this.inPos = 0;
                return false;
            }
        },

        pos:function(){
            return [0,11580];

        },
        frame:function(){
            if (Movie.Pos<11350 && Movie.Pos>11100){
                if(!this.inPos){
                    this.inPos = 1;
                }
            }
            if(!this.shot && this.inPos){
                var frame =  Math.floor(Movie.MovieFrame/4.6);
                // console.log(frame);
                if(frame == 5){
                    this.shot=1;
                }
                return frame;
            }else{
                return 0;
            }
        }
    },// 27 redparty
    {
        img:'obj_25_',
        show:function(){
            return Movie.Pos>=11546 && Movie.Pos <=13500;
        },

        pos:function(){
            return [0,12857];

        },
        frame:function(){

            return 0;

        }
    }, //栏杆左 28
    {
        img:'obj_24_',
        initPos:11000,
        endPos:12000,
        show:function(){
            return Movie.Pos>=10000 && Movie.Pos<=13500;

        },

        pos:function(){
            return [0,12271];

        },
        frame:function(){
            var nowPos = this.initPos;
            var step =parseInt((this.endPos-this.initPos)/7);
            while (nowPos <= this.endPos) {
                if(nowPos<Movie.Pos && Movie.Pos<nowPos+step){
                    // console.log( parseInt(nowPos-this.initPos)/step);
                    return parseInt(nowPos-this.initPos)/step;
                }else if(Movie.Pos < this.initPos){
                    return 0;
                }else if(Movie.Pos > this.endPos){
                    if(parseInt(Movie.MovieFrame/4)==0 ||(Movie.MovieFrame/4)==2 ||(Movie.MovieFrame/4)==4 ){
                        return 7;
                    }else {
                        return 6;
                    }
                }
                nowPos = nowPos + step;
            }
            //return 0;

        }
    }, //小火龙 29
    {
        img:'obj_45_',
        show:function(){
            return Movie.Pos>=11546 && Movie.Pos <=13500;
        },

        pos:function(){
            return [0,12857];

        },
        frame:function(){

            return 0;

        }
    }, //栏杆右 30
    {
        img:'obj_26_',
        show:function(){
            return Movie.Pos>=11300 && Movie.Pos<=13550;
        },

        pos:function(){
            y=1*(Movie.Pos+300)/1;
            x=10*(y-13122)/5;

            return [x,y];

        },
        frame:function(){

            if(Math.abs(Movie.Speed)<1){
                return 0;
            }else
            {
                return Math.floor(Movie.MovieFrame/12);

            }

        }
    },//摩托8 31
    {
        img:'obj_27_',
        show:function(){
            return Movie.Pos>=11500 && Movie.Pos<=13845;
        },

        pos:function(){
            p = Math.max(13031,Movie.Pos);
            y=-1*(p-26500)/1;
            x=10*(y-13469)/5;
            return [x,y];

        },
        frame:function(){

            return 0;

        }
    },//小绿车 32
    {
        img:'obj_28_',
        show:function(){
            return Movie.Pos>=11800 && Movie.Pos<=14800;
        },

        pos:function(){

            return [0,13695];




        },
        frame:function(){
            if (Movie.Pos>14545|| Movie.Pos<13289)return 0;
            return Math.floor(Movie.MovieFrame/6);

        }
    },// 33
    {
        img:'obj_29_',
        show:function(){
            return Movie.Pos>=13178 &&Movie.Pos<15000;
        },

        pos:function(){
            y=(Movie.Pos+550);
            x=-11*(y-14500)/5;

            return [x,y];




        },
        frame:function(){

            return 0;

        }
    },// 34
    {
        img:'obj_30_',
        shot:0,
        inPos:0,
        show:function(){
            if (Movie.Pos>=13500 && Movie.Pos<15900){
                return true;
            }else{
                this.shot = 0;
                this.inPos = 0;
                return false;
            }

        },

        pos:function(){
            return [353,15370];
        },

        frame:function(){
            if (Movie.Pos<15000 && Movie.Pos>14700){
                if(!this.inPos){
                    this.inPos = 1;
                }
            }
            if(!this.shot && this.inPos){
                // console.log('shot');
                if(Movie.MovieFrame>14){
                    if(Movie.MovieFrame == 23){
                        this.shot = 1;
                    }
                    return 1;
                }else {
                    return 0 ;
                }
            }else{
                return 0 ;
            }
        }
    },//老爷爷拍照片 35
    {
        img:'obj_31_',
        show:function(){
            return Movie.Pos>=14600 && Movie.Pos<=16272;
        },

        pos:function(){
            y=(Movie.Pos+550);
            x=13*(y-15550)/6;

            return [x,y];
        },
        frame:function(){

            if(Math.abs(Movie.Speed)<1){
                return 0;
            }else
            {
                return Math.floor(Movie.MovieFrame/12);

            }

        }
    },//摩托9 36
    {
        img:'obj_32_',
        show:function(){
            return Movie.Pos>=15000 && Movie.Pos<=18500;

        },

        pos:function(){

            return [0,16106];
        },
        frame:function(){

            return Math.floor(Movie.MovieFrame/2.5);

        }
    },// 37
    {
        img:'obj_33_',
        down:1,
        show:function(){
            if( Movie.Pos>=17120 && Movie.Pos<=18700){
                if(this.down){
                    $('.down').hide();
                    this.down=0;
                }
                return true;
            }else{
                if(!this.down && Movie.Pos<17120){
                    $('.down').show();
                    this.down=1;
                }
                return false  //快结尾了把箭头去掉
            }
        },

        pos:function(){
            y=(Movie.Pos+500);
            x=-13*(y-18400)/6;
            return [x,y];

        },
        frame:function(){
            if(Math.abs(Movie.Speed)<1){
                return 0;
            }else
            {
                return Math.floor(Movie.MovieFrame/12);

            }
        }
    },//摩托10 38
    {
        img:'obj_35_',
        initPos:21500,
        playTime:2.5,
        fCount:0,
        f:0,
        isEnd:0,
        show:function(){
            if(Movie.Pos>=this.initPos){

                document.getElementById("movie").removeEventListener("touchstart",touch_start,false);
                document.getElementById("movie").removeEventListener("touchmove",touch_move,false);
                document.getElementById("movie").removeEventListener("touchend",touch_end,false);
                Movie.Speed=0;
                return true;
            }else {
                return false;
            }

        },
        pos:function(){
            return [0,Movie.Pos];
        },
        frame:function(){
            var playFrame = Math.floor(this.playTime*24/32);
            if(this.fCount==playFrame){
                this.f++;
                this.fCount = 0;
            }else{
                this.fCount++;
            }
            if(this.f>31){
                if(this.f>33 && !this.isEnd){


                    popEnd.bPopup({
                        positionStyle:'fixed',
                        modalClose:false,
                        opacity: 0
                    });
                    this.isEnd = 1;
                }

                return 31;
            }
            return this.f;
        }
    },//大摩托 39
    {
        img:'obj_36_',
        initPos : 17900,
        endPos : 17950,
        f:0,
        show:function(){
            if(this.f!=0){
                return Movie.Pos>=17400 && Movie.Pos<=19500;
            }else{
                return Movie.Pos>=this.initPos && Movie.Pos<=19500;

            }
        },
        pos:function(){
            return [0,18653];
        },
        frame:function(){
            var nowPos = this.initPos;
            var step =parseInt((this.endPos-this.initPos)/2);

            // console.log(123);
            while (nowPos <= this.endPos) {
                if(nowPos<Movie.Pos && Movie.Pos<nowPos+step){
                    if(parseInt(nowPos-this.initPos)/step > this.f){
                        this.f = parseInt(nowPos-this.initPos)/step;
                        return parseInt(nowPos-this.initPos)/step;
                    }else{
                        return this.f;
                    }
                }else if(Movie.Pos < this.initPos){
                    return this.f;
                }else if(Movie.Pos > this.endPos){
                    this.f = 2;
                    return 2;
                }
                nowPos = nowPos + step;
            }
        }
    },//2018 40
    {
        img:'obj_37_',
        initPos : 18090,
        endPos : 18150,
        f:0,
        show:function(){
            /*if(this.f!=0){
                return Movie.Pos>=17700 && Movie.Pos<=19500;
            }else{
                return Movie.Pos>=this.initPos && Movie.Pos<=19500;

            }*/
            return false;
        },
        pos:function(){
            return [205,18797];
        },
        frame:function(){
            var nowPos = this.initPos;
            var step =parseInt((this.endPos-this.initPos)/2);

            // console.log(123);
            while (nowPos <= this.endPos) {
                if(nowPos<Movie.Pos && Movie.Pos<nowPos+step){
                    if(parseInt(nowPos-this.initPos)/step > this.f){
                        this.f = parseInt(nowPos-this.initPos)/step;
                        return parseInt(nowPos-this.initPos)/step;
                    }else{
                        return this.f;
                    }
                }else if(Movie.Pos < this.initPos){
                    return this.f;
                }else if(Movie.Pos > this.endPos){
                    this.f = 2;
                    return 2;
                }
                nowPos = nowPos + step;
            }
        }
    },//你做主 41
    {
        img:'obj_38_',
        show:function(){
            if(Movie.Pos>=6000&&Movie.Pos<=7600){
                return true;
            }
            else if(Movie.Pos>=9100&&Movie.Pos<=10600){
                return true;
            }
            else if(Movie.Pos>=10601&&Movie.Pos<=11700){
                return true;
            }
            else if(Movie.Pos>=11701&&Movie.Pos<=12880){
                return true;
            }
            else if(Movie.Pos>=12881&&Movie.Pos<=14298){
                return true;
            }
            else if(Movie.Pos>=14299&&Movie.Pos<=15478){
                return true;
            }
            else if(Movie.Pos>=15479&&Movie.Pos<=17640){
                return true;
            }
            return false;

        },
        pos:function(){
            if(Movie.Pos>=6000&&Movie.Pos<=7600){
                return [446,7340,'sandai'];
            }else if(Movie.Pos>=9100&&Movie.Pos<=10600){
                return [90,10498,'batiao'];
            }else if(Movie.Pos>=10601&&Movie.Pos<=11700){
                return [190,11900,'redparty'];
            }else if(Movie.Pos>=11701&&Movie.Pos<=12880){
                return [441,12580,'gene'];
            }else if(Movie.Pos>=12881&&Movie.Pos<=14298){
                return [297,14228,'fashion'];
            }else if(Movie.Pos>=14299&&Movie.Pos<=15478){
                return [145,15390,'form'];
            }else if(Movie.Pos>=15479&&Movie.Pos<=17640){
                return [280,16940,'real'];
            }  return [280,16940,'real'];

        },
        frame:function(){
            if( Movie.MovieFrame/6 >= 2){
                // console.log(Math.floor((Movie.MovieFrame)/4)-3);
                // console.log(Math.floor((Movie.MovieFrame)/4)-3);
                return (Math.floor((Movie.MovieFrame)/6)-2);
            }
            return (Math.floor((Movie.MovieFrame)/6));

        }
    },// 42
    {
        img:'obj_43_',
        initPos:19200,
        playTime:3,
        fCount:0,
        f:0,
        // isEnd:0,
        show:function(){
            return Movie.Pos>=19000 && Movie.Pos<=23000;
        },
        pos:function(){
            return [0,20100];
        },
        frame:function(){
            if(this.fCount==Math.floor(this.playTime*24/19)){
                this.f++;
                this.fCount = 0;
            }else{
                this.fCount++;
            }
            if(this.f>19){
                this.f = 17;
                return 17;
            }
            return this.f;
        }
    },//箭头43


];

var strings = [
    {
        string:'嘿，'+nickName,
        begin:840,
        end:900,
        show:function(){
            return this.begin<Movie.Pos && Movie.Pos<1700;
        },
        pos:function(){
            return [145,1395];  //[x,y]
        },
        frame:function(){
            var length = this.string.length;
            var step = parseInt((this.end-this.begin)/length);
            var strBegin = this.begin;
            var strEnd = this.begin+step;
            while (strEnd < this.end ){
                if(Movie.Pos>strBegin && Movie.Pos < strEnd){
                    return this.string.substr(0,parseInt((strEnd-this.begin)/step));
                }
                strBegin = strBegin + step;
                strEnd = strEnd + step;
            }
            return this.string.substr(0,this.string.length);
        }
    },
    {
        string:'你来啦！',
        begin:900,
        end:930,
        show:function(){
            return this.begin<Movie.Pos && Movie.Pos<1700;
        },
        pos:function(){
            return [145,1456];  //[x,y]
        },
        frame:function(){
            var length = this.string.length;
            var step = parseInt((this.end-this.begin)/length);
            var strBegin = this.begin;
            var strEnd = this.begin+step;
            while (strEnd < this.end ){
                if(Movie.Pos>strBegin && Movie.Pos < strEnd){
                    return this.string.substr(0,parseInt((strEnd-this.begin)/step));
                }
                strBegin = strBegin + step;
                strEnd = strEnd + step;
            }
            return this.string;
        }
    },//篮球场
    {
        string:nickName,
        begin:6800,
        end:6850,
        show:function(){
            return Movie.Pos>5400 && Movie.Pos<7800;
        },
        pos:function(){
            return [145,7154];  //[x,y]
        },
        frame:function(){
            if(!strings[3].out){
                if(Movie.Pos > this.begin) {

                    var length = this.string.length;
                    var step = parseInt((this.end - this.begin) / length);
                    var strBegin = this.begin;
                    var strEnd = this.begin + step;
                    while (strEnd < this.end) {
                        if (Movie.Pos > strBegin && Movie.Pos < strEnd) {
                            return this.string.substr(0, parseInt((strEnd - this.begin) / step));
                        }
                        strBegin = strBegin + step;
                        strEnd = strEnd + step;
                    }
                    return this.string;
                }else{
                    return '';
                }
            }else{
                return this.string;
            }
        }
    },
    {
        string:'到我的纹身店看看',
        begin:6850,
        end:6900,
        out:0,
        show:function(){
            return Movie.Pos>5400 && Movie.Pos<7800;
        },
        pos:function(){
            return [145,7218];  //[x,y]
        },
        frame:function(){
            if(!this.out) {
                if(Movie.Pos > this.begin){
                    var length = this.string.length;
                    var step = parseInt((this.end - this.begin) / length);
                    var strBegin = this.begin;
                    var strEnd = this.begin + step;
                    while (strEnd < this.end) {
                        if (Movie.Pos > strBegin && Movie.Pos < strEnd) {
                            return this.string.substr(0, parseInt((strEnd - this.begin) / step));
                        }
                        strBegin = strBegin + step;
                        strEnd = strEnd + step;
                    }
                    this.out = 1;
                    return this.string;
                }else{
                    return '';
                }

            }else{
                return this.string;
            }
        }
    },//破离守
    {
        string:'YO!'+nickName,
        begin:9910,
        end:10000,
        show:function(){
            return Movie.Pos>9200 && Movie.Pos<11000;
        },
        pos:function(){
            return [250,10380];  //[x,y]
        },
        frame:function(){
            if(!strings[5].out){
                if(Movie.Pos > this.begin) {

                    var length = this.string.length;
                    var step = parseInt((this.end - this.begin) / length);
                    var strBegin = this.begin;
                    var strEnd = this.begin + step;
                    while (strEnd < this.end) {
                        if (Movie.Pos > strBegin && Movie.Pos < strEnd) {
                            return this.string.substr(0, parseInt((strEnd - this.begin) / step));
                        }
                        strBegin = strBegin + step;
                        strEnd = strEnd + step;
                    }
                    return this.string;
                }else{
                    return '';
                }
            }else{
                return this.string;
            }
        }
    },
    {
        string:'好久不见！进来坐坐！',
        begin:10001,
        end:10100,
        out:0,
        show:function(){
            return Movie.Pos>9200 && Movie.Pos<11000;
        },
        pos:function(){
            return [250,10450];  //[x,y]
        },
        frame:function(){
            if(!this.out) {
                if(Movie.Pos > this.begin){
                    var length = this.string.length;
                    var step = parseInt((this.end - this.begin) / length);
                    var strBegin = this.begin;
                    var strEnd = this.begin + step;
                    while (strEnd < this.end) {
                        if (Movie.Pos > strBegin && Movie.Pos < strEnd) {
                            return this.string.substr(0, parseInt((strEnd - this.begin) / step));
                        }
                        strBegin = strBegin + step;
                        strEnd = strEnd + step;
                    }
                    this.out = 1;
                    return this.string;
                }else{
                    return '';
                }

            }else{
                return this.string;
            }
        }
    }//八条酒馆

];

var lines = [
    {
        length:strings[0].string.length,
        fontSize:37,
        begin:840,
        end:900,
        x:145,
        y:1410,
        max:Math.min(14*(6+charLong),300),
        show:function(){
            return this.begin<Movie.Pos && Movie.Pos<1700;
        },
        moveTo:function(){
            return [this.x,this.y];  //[x,y]
        },
        lineTo:function(){
            var length = this.length;
            var step = parseInt((this.end-this.begin)/length);
            var fontSize = this.fontSize;
            var lineBegin = this.begin;
            var lineEnd = this.begin + step;
            while (lineEnd < this.end ){
                if(Movie.Pos>lineBegin && Movie.Pos < lineEnd){
                    return [Math.min(this.x+fontSize*((lineEnd-this.begin)/step),this.x+this.max),this.y];
                }
                lineBegin = lineBegin + step;
                lineEnd = lineEnd + step;
            }
            return[this.x+this.max,this.y];
        }
    }, //'嘿，JYJ'下的横线
    {
        length:strings[2].string.length,
        fontSize:37,
        begin:6800,
        end:6850,
        x:145,
        y:7169,
        max:Math.min(14*(charLong),300),
        show:function(){
            return 5400<Movie.Pos && Movie.Pos<7800;
        },
        moveTo:function(){
            return [this.x,this.y];  //[x,y]
        },
        lineTo:function() {
            if (!strings[3].out) {
                if(Movie.Pos > this.begin) {
                    var length = this.length;
                    var step = parseInt((this.end - this.begin) / length);
                    var fontSize = this.fontSize;
                    var lineBegin = this.begin;
                    var lineEnd = this.begin + step;
                    while (lineEnd < this.end) {
                        if (Movie.Pos > lineBegin && Movie.Pos < lineEnd) {
                            return [Math.min(this.x + fontSize * ((lineEnd - this.begin) / step), this.x + this.max), this.y];
                        }
                        lineBegin = lineBegin + step;
                        lineEnd = lineEnd + step;
                    }
                    return [this.x + this.max, this.y];
                }else{
                    return [this.x, this.y];
                }
            }else{
                // console.log(123);

                return [this.x + this.max, this.y];
            }
        }
    }, //'破离守'下的横线
    {
        length:strings[4].string.length,
        fontSize:37,
        begin:9910,
        end:10000,
        x:250,
        y:10400,
        max:Math.min(14*(3+charLong),300),
        show:function(){
            return Movie.Pos>9200 && Movie.Pos<11000;
        },
        moveTo:function(){
            return [this.x,this.y];  //[x,y]
        },
        lineTo:function() {
            if (!strings[5].out) {
                if(Movie.Pos > this.begin) {
                    var length = this.length;
                    var step = parseInt((this.end - this.begin) / length);
                    var fontSize = this.fontSize;
                    var lineBegin = this.begin;
                    var lineEnd = this.begin + step;
                    while (lineEnd < this.end) {
                        if (Movie.Pos > lineBegin && Movie.Pos < lineEnd) {
                            return [Math.min(this.x + fontSize * ((lineEnd - this.begin) / step), this.x + this.max), this.y];
                        }
                        lineBegin = lineBegin + step;
                        lineEnd = lineEnd + step;
                    }
                    return [this.x + this.max, this.y];
                }else{
                    return [this.x, this.y];
                }
            }else{
                // console.log(123);

                return [this.x + this.max, this.y];
            }
        }
    } //'八条酒馆// '下的横线
];

var FinalOpen = false;

/*function buttonLog(button) {
    $.ajax({
        type:"get",
        url:"http://wanmiclub.lovemojito.com/wx/index.php?s=/Home/membernew/exMovieButton",
        dataType:'JSON',
        // async:false,
        data:{'openid':openid,'button':button},
        success:function (data) {
        },
        error:function (data) {
            console.log('error');
        }
    })
}*/
