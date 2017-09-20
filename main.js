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
}
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
}

// #3.)
const sparky = new Dog('sparky', 500)
sparky.getPrice();



