/**
 *Creat by 惠普 on 2019/1/18.
 */
(function () {
    //动态添加每日精选的active标签
    //选中效果
    var tops = document.querySelector('.left_share ul .active_li_top');
    var buttons = document.querySelector('.left_share ul .active_li_button');
    tops.onclick = function () {
        this.classList.add('active');
        this.classList.remove('buuu');
        if (this.nextElementSibling.classList.contains('active'))
            this.nextElementSibling.classList.remove('active');
        this.nextElementSibling.classList.add('buuu')

    };



    buttons.onclick = function () {
        this.classList.add('active');
        this.classList.remove('buuu');
        if (this.previousElementSibling.classList.contains('active'))
            this.previousElementSibling.classList.remove('active');
        this.previousElementSibling.classList.add('buuu')
    };
    //滚动条
    var btn = document.querySelector('#btn');
    var btnheight=document.documentElement.clientHeight || document.body.clientHeight;
    window.onscroll=function () {
        var btntop = document.documentElement.scrollTop || document.body.scrollTop;
        if (btntop>=btnheight/2){
            btn.style.display='block'
        }else{
            btn.style.display='none'
        }
    };

    btn.onclick = function () {
        document.documentElement.scrollTop = document.body.scrollTop = -30;
    };
    //固定标签
    // function guding() {
    //     var app=document.querySelector('.app');
    //     var height=document.documentElement.scrollTop;
    //     if (height>1000) {
    //         app.style.display=''
    //     }
    // };
    // guding()
})();