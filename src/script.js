const phrases = [
    "The sun was bright this morning. I went outside for a short walk. The street was quiet and calm. A small dog ran past me. It felt like a good start to the day. Learning new skills takes time. Some days feel slow and difficult. Other days everything works well. Practice makes things easier over time. Progress often comes step by step.",
    "A train arrived late at the station. The computer screen glowed in the dark room. Lines of code filled the editor. A small bug caused big problems. After some testing the issue appeared. The fix was simple in the end. Rain started falling in the afternoon. The wind moved the trees slowly. Cars passed through wet streets. Lights reflected on the road. The city looked peaceful at night."
    ]
let phraseIndex = (Math.floor(Math.random()*phrases.length));

let textContainer = document.querySelector(".maintext__container");


phrases[phraseIndex].split("").forEach((char) => {
    const spanChar = document.createElement("span");
    spanChar.classList.add("char");
    spanChar.innerText = char;
    textContainer.appendChild(spanChar);
})

const textArea = document.querySelector(".maintext");
const span = document.querySelectorAll(".char");
let i = 0
let counter = 0
textArea.addEventListener('keydown', (e) => {
    counter++
    if (counter === 1) {
        timer()
    }
    if (e.key.length > 1) return;

    if (e.key === phrases[phraseIndex][i]) {
        span[i].classList.add("correct");
        span[i].classList.add("dash");
        if (i > 0) {
            span[i-1].classList.remove("dash");
        }
    } else {
        span[i].classList.add("wrong");
        span[i].classList.add("dash");
        if (i > 0) {
            span[i-1].classList.remove("dash");
        }
    }

    i++
})


function timer(){
    var sec = 59;
    var timer = setInterval(function(){
        if (sec > 9) {
            document.getElementById("time").innerHTML="00:"+sec;
            sec--;
        } else {
            document.getElementById("time").innerHTML="00:0"+sec;
            sec--;
        }
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}