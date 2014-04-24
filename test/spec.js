
// #1. getName
describe("getName",function() {
	it("should return the value of a key 'name' in an object", function() {
		expect(getName({ name: 'Luisa', age: 25 })).toBe('Luisa');
	});
	it("should say if key 'name' does not exist", function() {
		expect(getName({ person: 'Luisa', age: 25 })).toBe('Name does not exist');
	});
});

// #2. totalLetters
describe("totalLetters", function() {
	it("should return the total number of all letters in an array of strings", function() {
		expect(totalLetters(['javascript', 'is', 'awesome'])).toBe(19);
		expect(totalLetters(['what', 'happened', 'to', 'my', 'function'])).toBe(24);
	});
	it("should not count numbers, white space, or punctuation", function() {
		expect(totalLetters(['javascript9', '1is', 'awe324some'])).toBe(19);
		expect(totalLetters(['what 123', 'happened!!!', ':t123o?', '   324 : my', '  func\ntion 12'])).toBe(24);
	});

});

// #3. keyValue
describe("keyValue", function() {
	it("should create an object with a key of the first arguement and value of the second", function() {
		expect(keyValue('city', 'Denver')).toEqual({city: "Denver"});
	});
});

// #4. negativeIndex
describe("negativeIndex", function() {
	it("should take an array and a negative number, and return the value from the array at the given negative index", function() {
		expect(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2)).toBe('d');
	});
	it("should return the item at the index as normal if the number is positive", function() {
		expect(negativeIndex(['a', 'b', 'c', 'd', 'e'], 2)).toBe('c');
	});
	it("should return the whole array if no number is given", function() {
		expect(negativeIndex(['a', 'b', 'c', 'd', 'e'])).toEqual(['a', 'b', 'c', 'd', 'e']);
	});
	it("should throw an error if the number is greater than the length", function() {
		expect(function(){negativeIndex(['a', 'b', 'c', 'd', 'e'], 10)}).toThrow(new Error("Not in range"));
	});
});

// #5. removeM
describe("removeM", function() {
	it("should remove all 'm' characters in a string, uppercase and lowercase", function() {
		expect(removeM('family')).toBe('faily');
		expect(removeM('Memory')).toBe('eory')
	});
	it("should return an empty string if all characters are 'm'", function() {
		expect(removeM('MMMMM')).toBe('');
		expect(removeM('mmmmm')).toBe('');
	});
	it("should preserve whitespace in the string, even if all other characters are 'm'", function() {
		expect(removeM('m M m M ')).toBe('    ');
	});
});

// FUNCTION PRINTOBJECT COMPLETE, NEED TO FINISH SPEC
// #8. printObject
// describe("printObject", function() {
// 	it("should console log each key-value pair of an object in the format 'key is value' on separate lines", function() {
// 	});
// });

// #7. vowels
describe("vowels", function() {
	it("should return an array of all vowels in a given string", function() {
		expect(vowels('alabama')).toEqual(['a', 'a', 'a', 'a']);
		expect(vowels('What lets in youth?')).toEqual(['a', 'e', 'i', 'o', 'u']);
	});
	it("should return an empty array if there are no vowels in the string", function() {
		expect(vowels('ghjkl')).toEqual([]);
		expect(vowels('')).toEqual([]);
	});
});


// #8. twins
describe("twins", function() {
	it("should return true if every pair of items in the given array is the same", function() {
		expect(twins(['a', 'a', 'b', 'b', 'c', 'c'])).toBe(true);
		expect(twins(['a', 'a', 'b', 'z'])).toBe(false);
		expect(twins(['a', 'a', 'b'])).toBe(false);
		expect(twins(['a', 'a', 'b', undefined])).toBe(false);
	});
});









