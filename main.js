import ideaLogs from "./ideas";

const idea = document.getElementById('card-text');
const ideaButton = document.getElementById('ideaGenerator');
const ideaHeader = document.getElementById('ideaHeader');
const doNotShowBtn = document.getElementById('doNotShow');

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