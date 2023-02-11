describe('Object Enhancements exercise solution tests', () => {
	it('returns an object on createInstructor(firstName, lastName)', () => {
		expect(createInstructor('Colt', 'Steele')).toEqual({
			firstName: 'Colt',
			lastName: 'Steele',
		});
	});

	it('returns an object where one of the key name is computed from the argument passed on makeInstructor(firstName, favoriteNumber)', () => {
		expect(makeInstructor('Colt', 81)).toEqual({
			firstName: 'Colt',
			81: 'That is my favorite!',
		});
	});

	it('returns expected result from instructor object', () => {
		expect(instructor.firstName).toBe('Colt');
		expect(instructor.sayHi()).toBe('Hi!');
		expect(instructor.sayBye()).toBe('Colt says bye!');
	});

	it('returns an object on createAnimal(species, verb, noise)', () => {
		const dog = createAnimal('Dog', 'bark', 'Whoof!');
		expect(dog.species).toBe('Dog');
		expect(dog.bark()).toBe('Whoof!');
	});
});
