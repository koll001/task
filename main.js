function calculateNum() {
	let fizzNum = document.querySelector('#inputNum');
	let buzzNum = document.querySelector('#inputNum2');
	let output = document.querySelector('#outputNum');
	let outputNum = document.createElement('p');

	if (fizzNum.value === '' || buzzNum.value === '') {
		output.innerHTML = '入力してください';
		return;
	}
	if (
		fizzNum.value.match(/^[a-zA-Zぁ-んァ-ヶー一-龠]+$/) ||
		buzzNum.value.match(/^[a-zA-Zぁ-んァ-ヶー一-龠]+$/)
	) {
		output.innerHTML = '整数で入力してください';
		return;
	}
	if (
		fizzNum.value.match(/[!"#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]+$/) ||
		buzzNum.value.match(/[!"#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]+$/)
	) {
		output.innerHTML = '記号ではなく整数で入力してください';
		return;
	}
	if (
		fizzNum.value.match(/^-?[0-9]+\.[0-9]+$/) ||
		buzzNum.value.match(/^-?[0-9]+\.[0-9]+$/)
	) {
		output.innerHTML = '少数ではなく整数で入力してください';
		return;
	}

	output.innerHTML = '';
	for (let i = 1; i < 100; i++) {
		output.appendChild(outputNum);
		if (i % fizzNum.value === 0 && i % buzzNum.value === 0) {
			outputNum.innerHTML += `FizzBuzz ${i}<br>`;
		} else if (i % fizzNum.value === 0) {
			outputNum.innerHTML += `Fizz ${i}<br>`;
		} else if (i % buzzNum.value === 0) {
			outputNum.innerHTML += `Buzz ${i}<br>`;
		}
	}
}
