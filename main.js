import ideaLogs from "./ideas.js";

const idea = document.getElementById('card-text');
const ideaButton = document.getElementById('ideaGenerator');
const ideaHeader = document.getElementById('ideaHeader');
const doNotShowBtn = document.getElementById('doNotShow');

const doNotShow = [];
let lastNum;
let outOfIdea = false;

function randomIdea(){
    if (doNotShow.length === Object.keys(ideaLogs).length) {
        outOfIdea = true;
        ideaButton.innerHTML = "Out of Idea";
        ideaButton.style.pointerEvents = 'none';
        doNotShowBtn.style.display = 'none';
        return 'Actually, I am out of ideas. Maybe try looking up "frontend portfolio projects"?'
    }
    let randomNum = Math.floor(Math.random() * Object.keys(ideaLogs).length)
    while (lastNum === randomNum && doNotShow.includes(randomNum)) {
        randomNum = Math.floor(Math.random() * Object.keys(ideaLogs).length);
    }
    while (doNotShow.includes(randomNum)) {
        randomNum = Math.floor(Math.random() * Object.keys(ideaLogs).length);
    }
    // console.log(`random number: ${randomNum}, last number: ${lastNum}`);
    lastNum = randomNum;
    return ideaLogs[randomNum];

}

function showRandomlyGenerated() {
    if(outOfIdea){ 
        idea.innerHTML = "Come back later for more ideas";
    } else {
        ideaHeader.innerHTML = 'How about...';
        idea.innerHTML = randomIdea();
         }
}

ideaButton.onclick = () => {
    doNotShowBtn.style.display = 'inline-block';
    showRandomlyGenerated();
}

doNotShowBtn.onclick = () => {
    let removeValue = Object.keys(ideaLogs).find(key => ideaLogs[key] === idea.innerHTML);
    doNotShow.push(parseFloat(removeValue));
    showRandomlyGenerated()
}