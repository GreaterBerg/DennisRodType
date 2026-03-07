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
let i = 0;
let counter = 0;

let wordCounter = 0;

let correctCounter = 0;
let wrongCounter = 0;
textArea.addEventListener('keydown', (e) => {
    counter++
    if (counter === 1) {
        timer()
    }
    if (e.key !== "Backspace" && e.key.length > 1) return;

    if (e.key !== "Backspace" && e.key === phrases[phraseIndex][i]) {
        span[i].classList.add("correct", "dash");

        if (i > 0) {
            span[i-1].classList.remove("dash");
        }
        i++
        wordCounter++
        correctCounter++
    } else if (e.key != "Backspace" && e.key != phrases[phraseIndex][i]) {
        span[i].classList.add("wrong","dash");

        if (i > 0) {
            span[i-1].classList.remove("dash");
        }
        i++
        wordCounter++
        wrongCounter++
    }

    if (i > 1 && e.key === "Backspace") {
        span[i-1].classList.remove("wrong","correct","dash");
        span[i-2].classList.add("dash");
        i--
    } else if (i <= 1 && e.key === "Backspace") {
        span[i-1].classList.remove("wrong","correct","dash");
        i--
    }
})


function timer(){
    let sec = 30;
    let timer = setInterval(function(){
        if (sec > 9) {
            document.getElementById("time").innerHTML="00:"+sec;
            sec--;
        } else {
            document.getElementById("time").innerHTML="00:0"+sec;
            sec--;
        }
        if (sec < 0) {
            clearInterval(timer);
            wpmValue.innerText = wpm()
            accuracyValue.innerText = accuracy()
            textArea.setAttribute("disabled","")
        }
    }, 1000);
}


let wpmValue = document.getElementById("wpm");
let wpm  = () => {
    return Math.floor(wordCounter / 2.5)
}

let accuracyValue = document.getElementById("accuracy");
let accuracy = () => {
    return Math.floor(100 - (( wrongCounter*100 ) / correctCounter));
}