class Printer {
	constructor() {}
	static setStyle() {
		this.style = `background-color:${this.b};color:${this.c};font-size:${this
			.s};font-family:Comic Sans MS;font-weight:bold;`;
	}
	static bg(c = 'transparent') {
		this.b = c;
		return this;
	}
	static color(c = 'black') {
		this.c = c;
		return this;
	}
	static size(s = 12) {
		this.s = s + 'px';
		return this;
	}
	static set(text) {
		Printer.setStyle();
		this.myTextWithStyles.push(`%c${text}`);
		this.myTextWithStyles.push(this.style);
		return this;
	}
	static print() {
		console.log(...this.myTextWithStyles);
		this.clear();
	}
	static clear() {
		this.myTextWithStyles = [];
		this.c = 'black';
		this.b = 'transparent';
		this.s = '12px';
		this.style = `background-color:transparent;color:black;font-size:20px;font-family:Comic Sans MS;font-weight:bold;`;
		return this;
	}
}
