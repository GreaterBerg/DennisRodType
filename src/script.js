const phrases = [
    "the sun was bright this morning. I went outside for a short walk. The street was quiet and calm. A small dog ran past me. It felt like a good start to the day.",
    "learning new skills takes time. Some days feel slow and difficult. Other days everything works well. Practice makes things easier over time. Progress often comes step by step.",
    "a train arrived late at the station. People waited with their bags. Someone was reading a book quietly. The loudspeaker announced the platform number. Everyone started moving at once.",
    "the computer screen glowed in the dark room. Lines of code filled the editor. A small bug caused big problems. After some testing the issue appeared. The fix was simple in the end.",
    "rain started falling in the afternoon. The wind moved the trees slowly. Cars passed through wet streets. Lights reflected on the road. The city looked peaceful at night."
    ]
let phraseIndex = (Math.ceil(Math.random()*phrases.length) - 1);

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
textArea.addEventListener('keydown', (e) => {
    if (e.key.length > 1) return;

    if (e.key === phrases[phraseIndex][i]) {
        span[i].classList.add("correct");
    } else {
        span[i].classList.add("wrong");
    }

    i++
})