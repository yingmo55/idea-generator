const idea = document.getElementById('card-text');
const ideaButton = document.getElementById('ideaGenerator');
const ideaHeader = document.getElementById('ideaHeader');

const ideaLogs = {
    0: 'make a random idea generator',
    1: 'make a calculator',
    2: 'make a photography website with slide shows'
}


function randomIdea(){
    let randomNum = Math.floor(Math.random() * 2)
    return ideaLogs[randomNum];
}

ideaButton.onclick = () => {
    ideaHeader.innerHTML = 'How about...';
    idea.innerHTML = randomIdea();
}