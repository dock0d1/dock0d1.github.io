function loaded() {
    setInterval(loop, 500)
}
document.addEventListener ? document.addEventListener("DOMContentLoaded", function () {
    loaded()
}) : document.attachEvent && document.attachEvent("onreadystatechange", function () {
    loaded()
});
var x = 0,
    titleText = ["d", "do|", "doc", "dock|", "dock0", "dock0d", "dock0d1."];

function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length]
}
