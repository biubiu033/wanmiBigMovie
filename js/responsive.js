(function(win) {
    var timeout,
        doc = win.document, 
        html = doc.documentElement;
    function setFontSize() {
        var htmlWidth = html.getBoundingClientRect().width;
        var ratio = htmlWidth / 640;
        if(htmlWidth < 640) {
            win.rem = ratio * 1.5;
        } else {
            win.rem = 1.5;
        }
        win.responseRatio = ratio;
        html.style.fontSize = win.rem + "rem";
    }
    win.addEventListener("resize", function() {
        clearTimeout(timeout), timeout = setTimeout(setFontSize, 300);
    }, false);
    setFontSize();
})(window);