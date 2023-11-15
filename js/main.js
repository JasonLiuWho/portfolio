// References to DOM Elements
const backBtn = document.querySelector("#back-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const paper1 = document.querySelector("#page1");
const paper2 = document.querySelector("#page2");
const paper3 = document.querySelector("#page3");
const paper4 = document.querySelector("#page4");
const paper5 = document.querySelector("#page5");

backBtn.addEventListener("click", goBackPage);
nextBtn.addEventListener("click", goNextPage);

let currentLocation = 1;
let numOfPapaer = 5; 
let maxLocation = numOfPapaer + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    backBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX (180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning){
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }

    backBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1: 
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5: 
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                closeBook();
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goBackPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2: 
                closeBook();
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 5; 
                break; 
            case 3: 
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4; 
                break; 
            case 4: 
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3; 
                break; 
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                break;
            case 6:
                openBook();
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
}