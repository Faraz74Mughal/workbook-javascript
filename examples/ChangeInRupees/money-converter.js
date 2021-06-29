class MoneyConverter {
	constructor(money = 0) {
		this.money = money;
	}
	convertToRupees() {
		const wallet = {
			'1 Rupee Coin': 0,
			'2 Rupee Coin': 0,
			'5 Rupee Coin': 0,
			'10 Rupee Note': 0,
			'20 Rupee Note': 0,
			'50 Rupee Note': 0,
			'100 Rupee Note': 0,
			'500 Rupee Note': 0,
			'1000 Rupee Note': 0,
			'5000 Rupee Note': 0
		};
		while (this.money != 0) {
			if (this.money >= 5000) {
				wallet['5000 Rupee Note']++;
				this.money = this.money - 5000;
			} else if (this.money >= 1000) {
				wallet['1000 Rupee Note']++;
				this.money = this.money - 1000;
			} else if (this.money >= 500) {
				wallet['500 Rupee Note']++;
				this.money = this.money - 500;
			} else if (this.money >= 100) {
				wallet['100 Rupee Note']++;
				this.money = this.money - 100;
			} else if (this.money >= 50) {
				wallet['50 Rupee Note']++;
				this.money = this.money - 50;
			} else if (this.money >= 20) {
				wallet['20 Rupee Note']++;
				this.money = this.money - 20;
			} else if (this.money >= 10) {
				wallet['10 Rupee Note']++;
				this.money = this.money - 10;
			} else if (this.money >= 5) {
				wallet['5 Rupee Coin']++;
				this.money = this.money - 5;
			} else if (this.money >= 2) {
				wallet['2 Rupee Coin']++;
				this.money = this.money - 2;
			} else {
				wallet['1 Rupee Coin']++;
				this.money = this.money - 1;
			}
		}
		return wallet;
	}
}
