const displayTime = document.querySelector('.time h1')
const startBtn = document.querySelector('.start button')
const resetBtn = document.querySelector('.reset button')
const dropdown = document.querySelector('.dropdown')
const musicBtn = document.querySelector('.play-btn')
const rangeMusic = document.querySelector('.range-music input')

let time = 25 * 60
let timerInterval

const audio = new Audio(
	'assets/music/Ghostrifter-Official-Purple-Dream(chosic.com).mp3'
)

rangeMusic.addEventListener('input', () => {
	if (audio) {
		audio.volume = rangeMusic.value / 100
	}
})

function dropDownToggle() {
	if (dropdown.classList.contains('active')) {
		dropdown.classList.remove('active')
	} else {
		dropdown.classList.add('active')
	}
}
function displayUpdate() {
	const minutes = Math.floor(time / 60)
	const seconds = time % 60

	displayTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

function start() {
	if (timerInterval) {
		clearInterval(timerInterval)
	}

	timerInterval = setInterval(() => {
		time--
		displayUpdate()

		if (time <= 0) {
			clearInterval(timerInterval)
			music.play()
		}
	}, 1000)
}

function reset() {
	clearInterval(timerInterval)
	time = 25 * 60
	displayUpdate()
}

startBtn.addEventListener('click', start)
resetBtn.addEventListener('click', reset)
dropdown.addEventListener('click', dropDownToggle)
musicBtn.addEventListener('click', () => {
	if (audio.paused) {
		audio.play()
	} else {
		audio.pause()
	}
})
