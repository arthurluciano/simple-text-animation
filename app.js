const word = document.getElementById("word");

let words = ['Front-End', 'Back-end', 'FullStack'];
let colors = ['#c446ff', '#00c4f5', '#00f77b'];
let index = 0;
let count = 0;
let letter = '';
let currentText = '';

function startAnimation() {
    if(count == words.length) {
        count = 0;
        return;
    }
    currentText = words[count];
    
    letter = currentText.slice(0, index++);

    word.innerText = letter;
    word.style.color = colors[count];

    if(currentText.length == letter.length) {
        count++;
        index = 0;
    }

}

setInterval(() => {
    startAnimation();
}, 180);
