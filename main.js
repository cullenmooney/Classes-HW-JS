// Cullen Mooney Classes HW

// #1.)

class Pet {
	constructor(name) {
		this.name = name;
		this.owner = '';
	}
	setOwner(nameIt) {
		this.owner = nameIt;
	}
};
const bobby = new Pet('bobby')
bobby;

// #2.)
class Dog extends Pet {
	constructor(name, price) {
		super(name)
		this.price = price;
	}
	bark() {
		console.log('bark');
	}
	chaseTail() {
		console.log('oh boy oh boy oh boy')
	}
	getPrice (price) {
		return this.price;
	}
};

// #3.)
const sparky = new Dog('sparky', 500)
sparky.getPrice();

// #4.)
class Cat extends Pet {
	constructor(name, price) {
		super(name)
		this.price = price;
	}
	purr () {
		console.log('purrr');
	}
	clean () {
		console.log('cleaning');
	}
	getPrice (price) {
		return this.price;
	}
};

// #5.)
const sprinkles = new Cat('sprinkles', 300);
sprinkles.getPrice();



