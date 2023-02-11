// exercise solutions

// same keys and values ES2015 version
const createInstructor = (firstName, lastName) => ({
	firstName,
	lastName,
});

// computed property names ES2015 version
const makeInstructor = (firstName, favoriteNumber) => ({
	firstName,
	[favoriteNumber]: 'That is my favorite!',
});

// object methods ES2015 version
const instructor = {
	firstName: 'Colt',
	sayHi() {
		return 'Hi!';
	},
	sayBye() {
		return this.firstName + ' says bye!';
	},
};

// createAnimal function
const createAnimal = (species, verb, noise) => ({
	species,
	[verb]() {
		return noise;
	},
});
