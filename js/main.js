const frame = document.querySelector('.frame');
const bgs = frame.querySelectorAll('.bg');
const lines = frame.querySelectorAll('.line');
const btns = document.querySelectorAll('.btns span');
const boxs = frame.querySelectorAll('article');
const num = 10;
const changeDelay = 500;

insertDivs(0.05);
insertLine();

setTimeout(() => boxs[0].classList.add('on'), changeDelay);

btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		for (const el of btns) el.classList.remove('on');
		for (const el of boxs) el.classList.remove('on');

		btns[idx].classList.add('on');
		setTimeout(() => boxs[idx].classList.add('on'), changeDelay);
	});
});

function insertDivs(interval) {
	bgs.forEach((bg) => {
		let tags = '';
		for (let i = 0; i < num; i++) {
			tags += `<div style='transition-delay: ${interval * i}s; clip-path: polygon(${(100 / num) * i}% 0%, ${(100 / num) * (i + 1)}% 0%, ${(100 / num) * (i + 1)}% 100%, ${
				(100 / num) * i
			}% 100%)'></div>`;
		}
		bg.innerHTML = tags;
	});
}

function insertLine() {
	lines.forEach((line) => {
		let tags = '';
		for (let i = 0; i < num; i++) tags += `<div style='width: ${100 / num}%; left: ${(100 / num) * i}%'></div>`;
		line.innerHTML = tags;
	});
}
