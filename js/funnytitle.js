var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '网站崩溃啦！';
        clearTimeout(titleTime);
    } else {
        document.title = '好耶！(๑•̀ㅂ•́)و✧';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
