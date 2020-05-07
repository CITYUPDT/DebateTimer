// ----- 奥瑞冈3v3的计时 ----- //


define(function(require,exports,module){
    var $ = require('jquery');//引入jquery
    require('onepage')($);
     // require('boot')($);//共享给jquery
    require('timer')($);//共享给jquery
    require('jplay')($);//共享给jquery
    require('jstorage')($);//共享给jquery
     // require('transit')($);//共享给jquery
     // require('ferroSilder')($);//共享给jquery

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

    /* 正方一辩发言 */
    $("#timedown1").custimer({  
        time_length:210,
        begin_btn_id:"beginBtn1",
        stop_btn_id:"stopBtn1",
        reset_btn_id: 'resetBtn1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });
    /* 正方一辩发言 结束 */

    /* 反方二辩向正方一辩提问，
    Btn1_1反方先开始，Btn1_2正方 */
    var flag1 = 2;
    $("#beginBtn1_1").on('click',function()
    {
        flag1 = 1;
    });
    $("#beginBtn1_2").on('click',function()
    {
        flag1 = 0;
    });
    $("#doubleBtn").on('click',function() {
        if(flag1 == 1){
            $("#stopBtn1_1").click();
            $("#beginBtn1_2").click();
        }else if(flag1 == 0){
            $("#stopBtn1_2").click();
            $("#beginBtn1_1").click();
        }else{  // flag1 = 2
            $("#beginBtn1_2").click();  //这一行决定哪方先开始，在这里Btn1_2反方先开始
        }
    });

    $("#doubleStopBtn").on('click',function(){
        $("#stopBtn1_1").click();
        $("#stopBtn1_2").click();
        flag=2;
    });

    $("#timedown1_1").custimer({
        time_length:140,
        begin_btn_id:"beginBtn1_1",
        stop_btn_id:"stopBtn1_1",
        reset_btn_id: 'resetBtn1_1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown1_2").custimer({
        time_length:100,
        begin_btn_id:"beginBtn1_2",
        stop_btn_id:"stopBtn1_2",
        reset_btn_id: 'resetBtn1_2',
        voice_type: 0,
        time_ding_dang: [30,0]
    });
    /* 反方二辩向正方一辩提问 结束 */

    /* 反方一辩发言 */
    $("#timedown2").custimer({
        time_length:210,
        begin_btn_id:"beginBtn2",
        stop_btn_id:"stopBtn2",
        reset_btn_id: 'resetBtn2',
        voice_type: 0,
        time_ding_dang: [30,0]
    });
    /* 反方一辩发言 结束 */

    /* 正方二辩向反方一辩提问，
    Btn2_1反方先开始，Btn2_2正方 */
    var flag2 = 2;
    $("#beginBtn2_1").on('click',function()
    {
        flag2 = 1;
    });
    $("#beginBtn2_2").on('click',function()
    {
        flag1 = 0;
    });
    $("#doubleBtn").on('click',function() {
        if(flag2 == 1){
            $("#stopBtn2_1").click();
            $("#beginBtn2_2").click();
        }else if(flag2 == 0){
            $("#stopBtn2_2").click();
            $("#beginBtn2_1").click();
        }else{  // flag2 = 2
            $("#beginBtn2_2").click();  //这一行决定哪方先开始，在这里Btn2_2反方先开始
        }
    });

    $("#doubleStopBtn").on('click',function(){
        $("#stopBtn2_1").click();
        $("#stopBtn2_2").click();
        flag=2;
    });

    $("#timedown2_1").custimer({
        time_length:140,
        begin_btn_id:"beginBtn2_1",
        stop_btn_id:"stopBtn2_1",
        reset_btn_id: 'resetBtn2_1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });

    $("#timedown2_2").custimer({
        time_length:100,
        begin_btn_id:"beginBtn2_2",
        stop_btn_id:"stopBtn2_2",
        reset_btn_id: 'resetBtn2_2',
        voice_type: 0,
        time_ding_dang: [30,0]
    });
    /* 正方二辩向反方一辩提问 结束 */

    /* 反方任意辩手盘问小结 */
    $("#timedown3_1").custimer({
        time_length:210,
        begin_btn_id:"beginBtn3_1",
        stop_btn_id:"stopBtn3_1",
        reset_btn_id: 'resetBtn3_1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });
    /* 反方任意辩手盘问小结 结束 */

    /* 正方任意辩手盘问小结 */
    $("#timedown3_2").custimer({
        time_length:210,
        begin_btn_id:"beginBtn3_2",
        stop_btn_id:"stopBtn3_2",
        reset_btn_id: 'resetBtn3_2',
        voice_type: 0,
        time_ding_dang: [30,0]
    });
    /* 正方任意辩手盘问小结 结束 */

    /* 正方一辩质询反方两位辩手 */
    $("#timedown4_1").custimer({
        time_length:180,
        begin_btn_id:"beginBtn4_1",
        stop_btn_id:"stopBtn4_1",
        reset_btn_id: 'resetBtn4_1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });
    /* 正方一辩质询反方两位辩手 结束 */

    /* 反方一辩质询正方两位辩手 */
    $("#timedown4_2").custimer({
        time_length:180,
        begin_btn_id:"beginBtn4_2",
        stop_btn_id:"stopBtn4_2",
        reset_btn_id: 'resetBtn4_2',
        voice_type: 0,
        time_ding_dang: [30,0]
    });
    /* 反方一辩质询正方两位辩手 结束 */

    /* 正方二辩总结陈词 */
    $("#timedown5_1").custimer({
        time_length:240,
        begin_btn_id:"beginBtn5_1",
        stop_btn_id:"stopBtn5_1",
        reset_btn_id: 'resetBtn5_1',
        voice_type: 0,
        time_ding_dang: [30,0]
    });
    /* 正方二辩总结陈词 结束 */

    /* 反方二辩总结陈词 */
    $("#timedown5_2").custimer({
        time_length:240,
        begin_btn_id:"beginBtn5_2",
        stop_btn_id:"stopBtn5_2",
        reset_btn_id: 'resetBtn5_2',
        voice_type: 0,
        time_ding_dang: [30,0]
    });
    /* 反方二辩总结陈词 结束 */

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

