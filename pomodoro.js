import music from "./music.js";
const displayTime = document.querySelector('.time h1');
const startBtn = document.querySelector('.start button');
const resetBtn = document.querySelector('.reset button');
const dropdown = document.querySelector('.dropdown');

let time = 25 * 60;
let timerInterval;

function dropDownToggle() {
	if (dropdown.classList.contains('active')) {
		dropdown.classList.remove('active');
	} else {
		dropdown.classList.add('active');
	}
	
}
function displayUpdate() {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	displayTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function start() {
	if (timerInterval) {
		clearInterval(timerInterval);
	}

	timerInterval = setInterval(() => {
		time--;
		displayUpdate();

		if (time <= 0) {
			clearInterval(timerInterval);
			music.play();
		}
	}, 1000);
}

function reset() {
	clearInterval(timerInterval);
	time = 25 * 60;
	displayUpdate();
}

startBtn.addEventListener('click', start);
resetBtn.addEventListener('click', reset);
dropdown.addEventListener('click', dropDownToggle);