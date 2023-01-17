const frame = document.querySelector('.frame');
const bgs = frame.querySelectorAll('.bg');
const lines = frame.querySelectorAll('.line');
const num = 10;

insertDivs(0.05);
insertLine();

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
