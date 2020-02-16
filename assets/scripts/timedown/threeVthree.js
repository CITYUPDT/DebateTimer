// ----- 2018表演赛3v3的计时 ----- //


define(function(require,exports,module){
     var $ = require('jquery');//引入jquery
     require('onepage')($);
     // require('boot')($);//共享给jquery
     require('timer')($);//共享给jquery
     require('jplay')($);//共享给jquery
     require('jstorage')($);//共享给jquery
     // require('transit')($);//共享给jquery
     // require('ferroSilder')($);//共享给jquery
     // 
     $("#jquery_jplayer_1").jPlayer({ready: function () {  //30秒铃声
         $(this).jPlayer("setMedia", {
            volume: 100,
          wav:"assets/res/l30s.mp3"
         });
        },
        swfPath: "assets/res/",
        supplied: "wav,mp3"
     });

     $("#jquery_jplayer_2").jPlayer({ready: function () {  //时间到铃声
         $(this).jPlayer("setMedia", {
          volume :100,
          wav:"assets/res/l1s.mp3"
         });
        },
        swfPath: "assets/res/",
        supplied: "wav,mp3"
     });

     $("#jquery_jplayer_3").jPlayer({ready: function () {
         $(this).jPlayer("setMedia", {
            volume: 100,
          wav:"assets/res/ht.mp3"
         });
        },
        swfPath: "assets/res/",
        supplied: "wav,mp3"
     });

    $("#play1").click(function(){
        $("#jquery_jplayer_1").jPlayer( "play" );
     });
     $("#play2").click(function(){
        $("#jquery_jplayer_2").jPlayer( "play" );
     });

     $("#play3").click(function(){
        $("#jquery_jplayer_3").jPlayer( "play" );
     });
     $("#play4").click(function(){
        $("#jquery_jplayer_3").jPlayer( "play" );
     });
     $("#btn1").click(function(){
        $("#play1").click();
     });
     $("#btn2").click(function(){
        $("#play2").click();
     });
     $("#btn3").click(function(){
        $("#play3").click();
     });
     $("#btn4").click(function(){
        $("#play4").click();
     });

     $('.main').onepage_scroll({
        sectionContainer: ".container-fluid",
        easing: "ease-in",
        loop: false
        // direction: "horizontal"
     });


    //以下是计时时间

    $("#timedown1").custimer({  //正一陈词
        time_length:210,
        begin_btn_id:"beginBtn1",
        stop_btn_id:"stopBtn1",
        reset_btn_id: 'resetBtn1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown1_1").custimer({  //反一质正一
        time_length:90,
        begin_btn_id:"beginBtn1_1",
        stop_btn_id:"stopBtn1_1",
        reset_btn_id: 'resetBtn1_1',
        voice_type: 0,
        time_ding_dang: [0,0]
    });

    $("#tw1").custimer({
        time_length:15,
        begin_btn_id:"twbeginBtn1",
        stop_btn_id:"twstopBtn1",
        reset_btn_id: 'twresetBtn1',
        voice_type: 1,
        time_ding_dang: [0]
    });
    $("#hd1").custimer({
        time_length:20,
        begin_btn_id:"hdbeginBtn1",
        stop_btn_id:"hdstopBtn1",
        reset_btn_id: 'hdresetBtn1',
        voice_type: 2,
        time_ding_dang: [0]
    });

    var flag2=2;
    $("#twbeginBtn1").on('click',function()
    {
            flag2 =1;
    });
    $("#hdbeginBtn1").on('click',function()
    {
            flag2 =0;
    });
    $("#flag2Btn").on('click',function(){
        $("#twresetBtn1").click();
        $("#hdresetBtn1").click();
        if(flag2 == 1){
            $("#twstopBtn1").click();
            $("#hdbeginBtn1").click();
        }else if(flag2 == 0){
            $("#hdstopBtn1").click();
            $("#twbeginBtn1").click();
        }else{
            $("#beginBtn1_1").click();
            $("#twbeginBtn1").click();
        }
    });
    $("#flag2StopBtn").on('click',function(){
        $("#stopBtn1_1").click();
        $("#hdstopBtn1").click();
        $("#twstopBtn1").click();
        flag2=2;
    });

    

    $("#timedown2").custimer({  //反一陈词
        time_length:210,
        begin_btn_id:"beginBtn2",
        stop_btn_id:"stopBtn2",
        reset_btn_id: 'resetBtn2',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown2_1").custimer({  //正一质反一
        time_length:90,
        begin_btn_id:"beginBtn2_1",
        stop_btn_id:"stopBtn2_1",
        reset_btn_id: 'resetBtn2_1',
        voice_type: 0,
        time_ding_dang: [0]
    });

    $("#tw2").custimer({
        time_length:15,
        begin_btn_id:"twbeginBtn2",
        stop_btn_id:"twstopBtn2",
        reset_btn_id: 'twresetBtn2',
        voice_type: 1,
        time_ding_dang: [0]
    });
    $("#hd2").custimer({
        time_length:20,
        begin_btn_id:"hdbeginBtn2",
        stop_btn_id:"hdstopBtn2",
        reset_btn_id: 'hdresetBtn2',
        voice_type: 2,
        time_ding_dang: [0]
    });

 

    var flag5=2;
    $("#twbeginBtn4").on('click',function()
    {
            flag5 =1;
    });
    $("#hdbeginBtn4").on('click',function()
    {
            flag5 =0;
    });
    $("#flag5Btn").on('click',function(){
        $("#twresetBtn4").click();
        $("#hdresetBtn4").click();
        if(flag5 == 1){
            $("#twstopBtn4").click();
            $("#hdbeginBtn4").click();
        }else if(flag5 == 0){
            $("#hdstopBtn4").click();
            $("#twbeginBtn4").click();
        }else{
            $("#beginBtn4_1").click();
            $("#twbeginBtn4").click();
        }
    });
    $("#flag5StopBtn").on('click',function(){
        $("#stopBtn4_1").click();
        $("#hdstopBtn4").click();
        $("#twstopBtn4").click();
        flag5=2;
    });

    $("#timedown5").custimer({  //正二质询
        time_length:180,
        begin_btn_id:"beginBtn5",
        stop_btn_id:"stopBtn5",
        reset_btn_id: 'resetBtn5',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown5_1").custimer({  //反二质询
        time_length:180,
        begin_btn_id:"beginBtn5_1",
        stop_btn_id:"stopBtn5_1",
        reset_btn_id: 'resetBtn5_1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown5_3").custimer({  //正三小结
        time_length:90,
        begin_btn_id:"beginBtn5_3",
        stop_btn_id:"stopBtn5_3",
        reset_btn_id: 'resetBtn5_3',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown5_4").custimer({  //反三小结
        time_length:90,
        begin_btn_id:"beginBtn5_4",
        stop_btn_id:"stopBtn5_4",
        reset_btn_id: 'resetBtn5_4',
        voice_type: 0,
        time_ding_dang: [30,0]
    });


    //自由辩计时，Btn6正方先开始，Btn6_1反方
    var flag6=2;
    $("#beginBtn6").on('click',function()
    {
            flag6=1;
    });
    $("#beginBtn6_1").on('click',function()
    {
            flag6=0;
    });
    $("#doubleBtn").on('click',function(){
        if(flag6 == 1){
            $("#stopBtn6").click();
            $("#beginBtn6_1").click();
        }else if(flag6 == 0){
            $("#stopBtn6_1").click();
            $("#beginBtn6").click();
        }else{  //flag6=2
            $("#beginBtn6_1").click();  //这一行决定哪方先开始，在这里Btn6_1反方先开始
        }
    });

    $("#doubleStopBtn").on('click',function(){
        $("#stopBtn6").click();
        $("#stopBtn6_1").click();
        flag6=2;
    });

    $("#timedown6").custimer({
        time_length:240,
        begin_btn_id:"beginBtn6",
        stop_btn_id:"stopBtn6",
        reset_btn_id: 'resetBtn6',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown6_1").custimer({
        time_length:240,
        begin_btn_id:"beginBtn6_1",
        stop_btn_id:"stopBtn6_1",
        reset_btn_id: 'resetBtn6_1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown7").custimer({  //结辩
        time_length:210,
        begin_btn_id:"beginBtn7",
        stop_btn_id:"stopBtn7",
        reset_btn_id: 'resetBtn7',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown7_1").custimer({  //结辩
        time_length:210,
        begin_btn_id:"beginBtn7_1",
        stop_btn_id:"stopBtn7_1",
        reset_btn_id: 'resetBtn7_1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });
     



     var matrix = [
        [
            {full:0},{full:1,moveDirection:'yx'},{full:0}
        ],
        [
            {full:1},{full:1,first:true},{full:1}
        ],
        [
            {full:0},{full:1,moveDirection:'yx'},{full:0}
        ]
    ];


        
});

