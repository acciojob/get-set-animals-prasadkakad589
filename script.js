//complete this code
class Animal {
	constructor(let species){
		this.species=species;
	}
	makeSound(){
		console.log(`The ${species} makes a sound`);
	}
	get specie(){
		return this.species;
	}
}

class Dog extends Animal {
	woof(){
		console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
