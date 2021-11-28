// configuration
var quote = "Heyyyyy, I wish you all the joy and happiness on this very special day, made this all for you, hope you'll like it."
var birthdaywishee = "Happy Birthday, Yashi!"
var birthdaywisher = "- Swarnim"

if (quote.length > 50) {
    document.getElementById('quote').innerHTML = "“Heyyyyy, I wish you all the joy and happiness on this very special day, made this all for you, hope you'll like it.”"
} else {
    document.getElementById('quote').innerHTML = "“" + quote + "”"
}
document.getElementById('birthdaywishee').innerHTML = birthdaywishee
document.getElementById('birthdaywisher').innerHTML = birthdaywisher


// audio toggle
var audio = document.getElementById("myAudio");

function toggleAudio() {
    if (audio.paused && audio.currentTime >= 0) {
        audio.currentTime = 0;
        audio.play();
    } else {
        audio.pause();
    }
}
toggleAudio();
// moving title
var start = 1000;
var speed = 250;

function getParams(startAttr, speedAttr) {
    var params = window.document.getElementsByTagName('script');

    for (var i = 0; i < params.length; i++) {
        if (params[i].src.indexOf('title-scroll.js') !== -1) {
            if (params[i].getAttribute(startAttr) !== null && params[i].getAttribute(startAttr) !== "") {
                start = params[i].getAttribute(startAttr);
            }

            if (params[i].getAttribute(speedAttr) !== null && params[i].getAttribute(speedAttr) !== "") {
                speed = params[i].getAttribute(speedAttr);
            }

            return;
        }
    }
}

window.onload = function (e) {
    getParams('data-start', 'data-speed');
    var title_ref = window.document.getElementsByTagName('title')[0];
    var title = birthdaywishee;
    var i = 0;

    setTimeout(function () {
        setInterval(function () {
            title_ref.text = title.substr(i, title.length) + " " + title.substr(0, i);
            i++;

            if (i === title.length) {
                i = 0;
            }
        }, speed);
    }, start);
}