let credits = 1000;
let playerBet = 0;

const slotPics1 = ['cherry', 'plum', 'orange', 'lemon', 'bar', 'bell', 'melon', 'banana', 'seven', 'cherry'];
const slotPics2 = ['cherry', 'seven', 'banana', 'melon', 'bell', 'bar', 'lemon', 'orange', 'plum', 'cherry'];
const slotPics3 = ['cherry', 'lemon', 'melon', 'plum', 'bar', 'banana', 'orange', 'bell', 'seven', 'cherry'];

let slot1 = slotPics1[0];
let slot1index = 0
let slot2 = slotPics2[1];
let slot2index = 1
let slot3 = slotPics3[2];
let slot3index = 2

window.addEventListener('DOMContentLoaded', (e) => {
	const creditsDisplay = document.getElementById('credits');
	const slot1display = document.getElementById('slot1');
	const slot2display = document.getElementById('slot2');
	const slot3display = document.getElementById('slot3');
	const message = document.getElementById('message');
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
		bet = parseInt(bet)
		if (credits <= 0) {
			message.innerText = "You've run out of credits! Go sell your house to play more!"
			console.log(`You've run out of credits! Go sell your house to play more!`);
			return;
		}

		if (bet === 0) {
			message.innerText = "Place a bet!"
			console.log(`Place a bet!`)
			return;
		}

		if (bet < 0) {
			message.innerText = "You cannot cheat us. The house always wins."
			console.log(`You cannot cheat us. The house always wins.`);
			return;
		}

		credits = credits - bet;

		const slot1move = Math.ceil(Math.random() * 30) + 120;
		const slot2move = Math.ceil(Math.random() * 30) + 60;
		const slot3move = Math.ceil(Math.random() * 30) + 60;

		let setTime = 0;

		const slot1temp = [];
		const slot2temp = [];
		const slot3temp = [];

		message.innerText = "Spinning..."

		for (let i = 0; i < slot1move; i++) {
			if (slotPics1[slot1index + 1]) {
				slot1temp.push(slotPics1[slot1index + 1]);
				slot1 = slotPics1[slot1index + 1]
				slot1index++;
			} else {
				slot1temp.push(slotPics1[0]);
				slot1 = slotPics1[0]
				slot1index = 0;
			}
			if (slotPics2[slot2index + 1]) {
				slot2temp.push(slotPics2[slot2index + 1]);
				slot2index++;
			} else {
				slot2temp.push(slotPics2[0]);
				slot2index = 0;
			}
			if (slotPics3[slot3index + 1]) {
				slot3temp.push(slotPics3[slot3index + 1]);
				slot3index++;
			} else {
				slot3temp.push(slotPics3[0]);
				slot3index = 0;
			}
		}

		for (let i = 0; i < slot2move; i++) {
			if (slotPics2[slot2index + 1]) {
				slot2temp.push(slotPics2[slot2index + 1]);
				slot2 = slotPics2[slot2index + 1]
				slot2index++;
			} else {
				slot2temp.push(slotPics2[0]);
				slot2 = slotPics2[0]
				slot2index = 0;
			}
			if (slotPics3[slot3index + 1]) {
				slot3temp.push(slotPics3[slot3index + 1]);
				slot3index++;
			} else {
				slot3temp.push(slotPics3[0]);
				slot3index = 0;
			}
		}

		for (let i = 0; i < slot3move; i++) {
			if (slotPics3[slot3index + 1]) {
				slot3temp.push(slotPics3[slot3index + 1]);
				slot3 = slotPics3[slot3index + 1]
				slot3index++;
			} else {
				slot3temp.push(slotPics3[0]);
				slot3 = slotPics3[0]
				slot3index = 0;
			}
		}

		for (let i = 0; i < slot1move; i++) {
			setTimeout(() => {
				slot1display.innerText = `${slot1temp[0]}`;
				slot2display.innerText = `${slot2temp[0]}`;
				slot3display.innerText = `${slot3temp[0]}`;
				slot1temp.shift();
				slot2temp.shift();
				slot3temp.shift();
			}, setTime)
			setTime += 17;
		}

		for (let i = 0; i < slot2move; i++) {
			setTimeout(() => {
				slot2display.innerText = `${slot2temp[0]}`;
				slot3display.innerText = `${slot3temp[0]}`;
				slot2temp.shift();
				slot3temp.shift();
			}, setTime)
			setTime += 17;
		}

		for (let i = 0; i < slot3move; i++) {
			setTimeout(() => {
				slot3display.innerText = `${slot3temp[0]}`;
				slot3temp.shift();
			}, setTime)
			setTime += 17;
		}

		// const slot1place = Math.floor(Math.random() * slotsLength);
		// const slot2place = Math.floor(Math.random() * slotsLength);
		// const slot3place = Math.floor(Math.random() * slotsLength);

		// slot1 = slotPics1[slot1place];
		// slot2 = slotPics2[slot2place];
		// slot3 = slotPics3[slot3place];

		// console.log(`--- ${slotPics1[slot1place]} --- ${slotPics2[slot2place]} --- ${slotPics3[slot3place]} ---`);

		if (slot1 !== slot2 || slot2 !== slot3) {
			setTimeout(() => {
				message.innerText = `Try again!`
			}, setTime)
		}

		if (slot1 === slot2 && slot2 === slot3) {
			if (slot1 === 'cherry') {
				message.innerText = `You win ${bet * 5} credits!`
				console.log(`You win ${bet * 5} credits!`);
				credits = credits + bet * 5;
			} else if (slot1 === 'plum') {
				message.innerText = `You win ${bet * 20} credits!`
				console.log(`You win ${bet * 20} credits!`);
				credits = credits + bet * 20;
			} else if (slot1 === 'orange') {
				message.innerText = `You win ${bet * 30} credits!`
				console.log(`You win ${bet * 30} credits!`);
				credits = credits + bet * 30;
			} else if (slot1 === 'lemon') {
				message.innerText = `You win ${bet * 33} credits!`
				console.log(`You win ${bet * 33} credits!`);
				credits = credits + bet * 33;
			} else if (slot1 === 'bell') {
				message.innerText = `You win ${bet * 40} credits!`
				console.log(`You win ${bet * 40} credits!`);
				credits = credits + bet * 40;
			} else if (slot1 === 'bar') {
				message.innerText = `You win ${bet * 50} credits!`
				console.log(`You win ${bet * 50} credits!`);
				credits = credits + bet * 50;
			} else if (slot1 === 'melon') {
				message.innerText = `You win ${bet * 55} credits!`
				console.log(`You win ${bet * 55} credits!`);
				credits = credits + bet * 55;
			} else if (slot1 === 'banana') {
				message.innerText = `You win ${bet * 66} credits!`
				console.log(`You win ${bet * 66} credits!`);
				credits = credits + bet * 66;
			} else if (slot1 === 'seven') {
				message.innerText = `You win ${bet * 77} credits!`
				console.log(`You win ${bet * 77} credits!`);
				credits = credits + bet * 77;
			}
		}

		creditsDisplay.innerText = credits;
		slot1display.innerText = slot1;
		slot2display.innerText = slot2;
		slot3display.innerText = slot3;

		return credits;
	}
});
