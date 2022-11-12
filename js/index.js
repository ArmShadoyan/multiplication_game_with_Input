"use strict";

const questionBlock = document.querySelector(".questionBlock");
const pointBlock = document.querySelector(".pointBlock");
const input = document.querySelector("#answer_input");
const nextButton = document.querySelector(".next");
const answButton = document.querySelector(".answ");
const startOver = document.querySelector(".startOver");

const userInput = document.querySelector(".user");
const computerInput = document.querySelector(".computer");



let m = 10;
let n = 5;
function math () {
	questionBlock.innerHTML = `
	<div class = "nums">
	<h2 class = "x">${(Math.ceil(Math.random()*m)) }</h2>
	*
	<h2 class = "y">${(Math.ceil(Math.random()*m))}</h2>
	</div>
	`;

let x = document.querySelector(".x").textContent
let y = document.querySelector(".y").textContent;
let count = x * y
return count
}
let count = math();
console.log(count);


answButton.addEventListener("click",() => {
	if(count == input.value){
		count = math();
		n = 5;
		userInput.value = Number(userInput.value) + n;
	}else if (computerInput.value <= 50 && userInput.value <= 50){
		count = math();
		n = 5;
		computerInput.value = Number(computerInput.value) + n;
	}
	input.value = "";
			console.log(computerInput.value);
			console.log(userInput.value);
			if(userInput.value >= 30  && userInput.value < 40){
				m = 100;
			}else if (userInput.value >= 40  && userInput.value < 50){
				m = 1000;
			}
	
				if(userInput.value >= 50){
					questionBlock.innerHTML=`YOU WIN`
				}else if(computerInput.value >= 50){
					questionBlock.innerHTML = `GAME OVER`;
					n = 0;
				}
	});


nextButton.addEventListener("click",() => {
	math();
	count = math();
	computerInput.value = Number(computerInput.value) + n;
	if(userInput.value >= 50){
		questionBlock.innerHTML=`YOU WIN`
	}else if(computerInput.value >= 50){
		questionBlock.innerHTML = `GAME OVER`;
		n = 0;
	}
});

startOver.addEventListener("click", () => {
	computerInput.value = 1;
	userInput.value = 1;
	if(computerInput.value <= 50 && userInput.value <= 50){
		n = 5;
	}
	m= 10;
	math();
});


