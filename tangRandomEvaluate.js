<a href="
javascript:(function () {
    for (var i = 1; i <= 10; i++) {
        var j = Math.floor(Math.random() * 4);
        document.getElementById("option_" + i + "_" + j).checked = true;
    }
})()">随机评教</a>