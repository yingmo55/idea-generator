const idea = document.getElementById('card-text');
const ideaButton = document.getElementById('ideaGenerator');
const ideaHeader = document.getElementById('ideaHeader');
const doNotShowBtn = document.getElementById('doNotShow');

const ideaLogs = {
    0: 'make a random idea generator',
    1: 'make a calculator',
    2: 'make a photography website with slide shows',
    3: 'Make a landing page',
    4: 'Make a to-do list app',

}

const doNotShow = [];
let lastNum;
function randomIdea(){
    if (doNotShow.length === ideaLogs.length) {
        return 'Actually, I am out of ideas. Do you have an idea to show?'
    }
    let randomNum = Math.floor(Math.random() * Object.keys(ideaLogs).length)
    while (lastNum === randomNum) {
        randomNum = Math.floor(Math.random() * Object.keys(ideaLogs).length);
    }
    // console.log(`random number: ${randomNum}, last number: ${lastNum}`);
    lastNum = randomNum;
    return ideaLogs[randomNum];

}

ideaButton.onclick = () => {
    ideaHeader.innerHTML = 'How about...';
    idea.innerHTML = randomIdea();
    doNotShowBtn.style.display = 'inline-block';
}