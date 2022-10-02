const PAPER = "paper", SCISSORS = "scissors", STONE = "stone";
const WINNER_CLASS = "winner", LOSER_CLASS = "loser", HIDE_CLASS = "hide";
const DEFAULT_IMAGE = "./images/question-mark.jpg";

const images = [
    {
        id: PAPER,
        url: "./images/paper.jpg",
    },
    {
        id: SCISSORS,
        url: "./images/scissors.jpg",
    },
    {
        id: STONE,
        url: "./images/stone.jpg",
    }
]

// -1  => left is stronger
// 0 => They are equal
// 1 => right is stronger
const getStronger = (type_left, type_right) => {
    if (type_left === type_right) {
        return 0;
    } else if(type_left === PAPER && type_right === SCISSORS) {
        return 1
    } else if(type_left === SCISSORS && type_right === PAPER) {
        return -1;
    } else if (type_left === PAPER && type_right === STONE) {
       return -1;
    } else if(type_left === STONE && type_right === PAPER){
        return 1;
    } else if(type_left === SCISSORS && type_right === STONE){
        return 1;   
    } else if(type_left === STONE && type_right === SCISSORS){
        return -1; 
    }
    else {
        throw "WRONG type used"
    }

}

const generateImage = () => images[Math.floor(Math.random()*images.length)];
// const leftImage = 

const vsbutton = document.querySelector("#vsbutton");
const leftSide = document.querySelector("#left-side");
const rightSide = document.querySelector("#right-side");
const leftSideImage = leftSide.querySelector("img");
const rightSideImage = rightSide.querySelector("img");
const resetButton = document.querySelector("#resetbtn");

vsbutton.onclick = (e) => {
    e.preventDefault();

    const leftImage = generateImage();
    const rightImage = generateImage();
    
    let value = getStronger(leftImage.id, rightImage.id);
    leftSideImage.src = leftImage.url;
    rightSideImage.src = rightImage.url;
    if(value === -1) {
        leftSide.classList.add(WINNER_CLASS);
        rightSide.classList.add(LOSER_CLASS);
    } else if (value === 1) {
        leftSide.classList.add(LOSER_CLASS);
        rightSide.classList.add(WINNER_CLASS);
    } else {
        //
    }
    resetButton.classList.remove(HIDE_CLASS);
    vsbutton.classList.add(HIDE_CLASS);
}


resetButton.onclick = (e) => {
    e.preventDefault();
    leftSideImage.src =  rightSideImage.src = DEFAULT_IMAGE;
    leftSide.classList.remove(WINNER_CLASS);
    rightSide.classList.remove(LOSER_CLASS);
    leftSide.classList.remove(LOSER_CLASS);
    rightSide.classList.remove(WINNER_CLASS);
    resetButton.classList.add(HIDE_CLASS)
    vsbutton.classList.remove(HIDE_CLASS)
}






// const rightImage = images[Math.floor(Math.random()*images.length)];
