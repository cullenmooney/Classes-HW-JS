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

// # 6.)
class Person {
	constructor(name) {
		this.name = name;
		this.age = 0;
		this.weight = 0;
		this.mood = 0;
		this.pets = [];
		this.bankAccount = 0;
	}
	getName() {
		this.name;
	}
	getAge() {
		this.age;
	}
	getWeight() {
		this.weight;
	}
	greet (otherPerson) {
		console.log('hi ' + otherPerson)
	}
	eat () {
		this.weight += 1;
		this.mood += 1;
	}
	exercise () {
		this.weight -=1;
	}
	ageing () {
		this.age +=1;
		this.weight +=1;
		this.mood -=1;
		this.bankAccount +=10;

	}
	buyPet(pet) {
		this.pets.push(pet);
		this.mood += 10;
		this.bankAccount - pet.getPrice();
	}
}

// #7.)
const jill = new Person('jill');
jill.getName();
jill.getAge();
jill.getWeight();
jill.greet('cullen');
jill.eat();
jill.exercise();
jill.ageing();
jill.buyPet(sprinkles);
jill;














	}
}
