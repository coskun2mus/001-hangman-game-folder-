
const wordElemenet=document.getElementById('word');
const figureParts=document.querySelectorAll('.figure-part');
const popup=document.getElementById('popup-container');
const playAgainBtn = document.getElementById('play-button');
const playAgain=document.getElementById('play-button');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');

const words = ['ask','application', 'programming', 'interface', 'wizard','apple', 'banana'];

function random_word(){

    let randomIndex=Math.floor(Math.random()*words.length);
    return words[randomIndex];
}
let word=random_word();
var foundLetters=[];
var wrongLetters=[];
var errors=0;
function displayWord(){
    var displayLetters="";
    for (let i=0;i<word.length;i++){
        var letter=word[i];
        
displayLetters+=`
<span class="letter">
${foundLetters.includes(letter) ? letter : ""}
</span>
`
    }
    wordElemenet.innerHTML=displayLetters;
}
displayWord();

function endGame(message){
console.log(message);
}

window.addEventListener('keydown', e=>{
    if (e.keyCode>=65&&e.keyCode<=90){
        const pushedLetters=e.key.toLowerCase()
        if(word.includes(pushedLetters)){
            foundLetters.push(pushedLetters);
            
displayWord();
        }else{
            if (!wrongLetters.includes(pushedLetters)){
                errors++;
                wrongLetters.push(pushedLetters);
            }
            
            for (let i=0;i<errors;i++){
figureParts[i].style.display="block";
            }
        }
    }
    if (wrongLetters.length==6){
endGame("You lost the game");
finalMessage.innerText="You Lost the game";
finalMessageRevealWord.innerText="The correct word is: "+word;
popup.style.display='flex';
    }
    const innerWord=wordElemenet.innerText.replace(/[\n]/g,'');
    if (innerWord.length==word.length){
        endGame("You Won the game");
        popup.innerText="You Won the game";
popup.style.display='flex';
    }
})

playAgainBtn.addEventListener('click', () => {

	//  Empty arrays
	foundLetters.splice(0);
	wrongLetters.splice(0);

	word = random_word();

	displayWord();

	popup.style.display = 'none';
    for (let i=0;i<errors;i++){
        figureParts[i].style.display="none";
                    }
                    errors=0;
});