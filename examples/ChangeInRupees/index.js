// import Printer from './printer';

const Run = () => {
	let moneyInNumbers = Number(prompt(`Type the Amount of money you have in you'r Pocket`));
	Printer.clear().color('gold').size(16).set(`Money in Numbers: ${moneyInNumbers}`).print();
	let Money = new MoneyConverter(moneyInNumbers);
	let myWallet = Money.convertToRupees();
	if (myWallet['1 Rupee Coin'] != 0) {
		Printer.clear().color('green').size(14).set(`1 Rupee Coins`).print();
		Printer.clear().color('green').size(18).set(`🪙`.repeat(myWallet['1 Rupee Coin'])).print();
	}
	if (myWallet['2 Rupee Coin'] != 0) {
		Printer.clear().color('green').size(14).set(`2 Rupee Coins`).print();
		Printer.clear().color('green').size(18).set(`🪙`.repeat(myWallet['2 Rupee Coin'])).print();
	}
	if (myWallet['5 Rupee Coin'] != 0) {
		Printer.clear().color('green').size(14).set(`5 Rupee Coins`).print();
		Printer.clear().color('green').size(18).set(`🪙`.repeat(myWallet['5 Rupee Coin'])).print();
	}
	if (myWallet['10 Rupee Note'] != 0) {
		Printer.clear().color('green').size(14).set(`10 Rupee Notes`).print();
		Printer.clear().color('green').size(18).set(`💰`.repeat(myWallet['10 Rupee Note'])).print();
	}
	if (myWallet['20 Rupee Note'] != 0) {
		Printer.clear().color('green').size(14).set(`20 Rupee Notes`).print();
		Printer.clear().color('green').size(18).set(`💰`.repeat(myWallet['20 Rupee Note'])).print();
	}
	if (myWallet['50 Rupee Note'] != 0) {
		Printer.clear().color('green').size(14).set(`50 Rupee Notes`).print();
		Printer.clear().color('green').size(18).set(`💰`.repeat(myWallet['50 Rupee Note'])).print();
	}
	if (myWallet['100 Rupee Note'] != 0) {
		Printer.clear().color('green').size(14).set(`100 Rupee Notes`).print();
		Printer.clear().color('green').size(18).set(`💰`.repeat(myWallet['100 Rupee Note'])).print();
	}
	if (myWallet['500 Rupee Note'] != 0) {
		Printer.clear().color('green').size(14).set(`500 Rupee Notes`).print();
		Printer.clear().color('green').size(18).set(`💰`.repeat(myWallet['500 Rupee Note'])).print();
	}
	if (myWallet['1000 Rupee Note'] != 0) {
		Printer.clear().color('green').size(14).set(`1000 Rupee Notes`).print();
		Printer.clear().color('green').size(18).set(`💰`.repeat(myWallet['1000 Rupee Note'])).print();
	}
	if (myWallet['5000 Rupee Note'] != 0) {
		Printer.clear().color('green').size(14).set(`5000 Rupee Notes`).print();
		Printer.clear().color('green').size(18).set(`💰`.repeat(myWallet['5000 Rupee Note'])).print();
	}
};

const LoadScript = (initial = 0, scripts = [], cb = null) => {
	let myScript = document.createElement('script');
	myScript.setAttribute('src', scripts[initial]);
	document.body.appendChild(myScript);
	myScript.onload = () => {
		// console.log('Loaded: ', scripts[initial]);
		if (initial + 1 == scripts.length) {
			if (cb != null) cb();
		} else {
			LoadScript(initial + 1, scripts, cb);
		}
	};
};

const Launch = () => {
	LoadScript(0, [ './printer.js', './money-converter.js' ], Run);
};

window.onload = Launch;
