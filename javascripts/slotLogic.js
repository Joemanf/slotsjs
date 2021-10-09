let credits = 1000;
let playerBet = 0;
let slot1 = 'cherry';
let slot2 = 'cherry';
let slot3 = 'cherry';

const slotPics1 = ['cherry', 'plum', 'orange', 'lemon', 'bar', 'bell', 'melon', 'banana', 'seven', 'cherry'];
const slotPics2 = ['cherry', 'seven', 'banana', 'melon', 'bell', 'bar', 'lemon', 'orange', 'plum', 'cherry'];
const slotPics3 = ['cherry', 'lemon', 'melon', 'plum', 'bar', 'banana', 'orange', 'bell', 'seven', 'cherry'];

window.addEventListener('DOMContentLoaded', (e) => {
	const creditsDisplay = document.getElementById('credits');
	const slot1display = document.getElementById('slot1');
	const slot2display = document.getElementById('slot2');
	const slot3display = document.getElementById('slot3');
	const creditInput = document.getElementById('creditInput');
	const clickSpin = document.getElementById('spin');

	creditsDisplay.innerText = credits;
	slot1display.innerText = slot1;
	slot2display.innerText = slot2;
	slot3display.innerText = slot3;

	creditInput.addEventListener('input', (e) => {
		playerBet = e.target.value;
	});

	clickSpin.addEventListener('click', (e) => {
		spin(playerBet);
	});

	function spin(bet) {
		if (credits <= 0) {
			console.log(`You've run out of credits! Go sell your house to play more!`);
			return;
		}

		credits = credits - bet;

		const slotsLength = slotPics1.length;

		const slot1place = Math.floor(Math.random() * slotsLength);
		const slot2place = Math.floor(Math.random() * slotsLength);
		const slot3place = Math.floor(Math.random() * slotsLength);

		slot1 = slotPics1[slot1place];
		slot2 = slotPics2[slot2place];
		slot3 = slotPics3[slot3place];

		// console.log(`--- ${slotPics1[slot1place]} --- ${slotPics2[slot2place]} --- ${slotPics3[slot3place]} ---`);

		if (slot1 === slot2 && slot2 === slot3) {
			if (slot1 === 'cherry') {
				console.log(`You win ${bet} credits!`);
				credits = credits + bet;
			} else if (slot1 === 'plum') {
				console.log(`You win ${bet * 2} credits!`);
				credits = credits + bet * 2;
			} else if (slot1 === 'orange') {
				console.log(`You win ${bet * 3} credits!`);
				credits = credits + bet * 3;
			} else if (slot1 === 'lemon') {
				console.log(`You win ${bet * 3} credits!`);
				credits = credits + bet * 3;
			} else if (slot1 === 'bell') {
				console.log(`You win ${bet * 4} credits!`);
				credits = credits + bet * 4;
			} else if (slot1 === 'bar') {
				console.log(`You win ${bet * 5} credits!`);
				credits = credits + bet * 5;
			} else if (slot1 === 'melon') {
				console.log(`You win ${bet * 5} credits!`);
				credits = credits + bet * 5;
			} else if (slot1 === 'banana') {
				console.log(`You win ${bet * 6} credits!`);
				credits = credits + bet * 6;
			} else if (slot1 === 'seven') {
				console.log(`You win ${bet * 7} credits!`);
				credits = credits + bet * 7;
			}
		}

		creditsDisplay.innerText = credits;
		slot1display.innerText = slot1;
		slot2display.innerText = slot2;
		slot3display.innerText = slot3;

		return credits;
	}
});
