

describe("getName",function() {
	it("should return the value of a key 'name' in an object", function() {
		expect(getName({ name: 'Luisa', age: 25 })).toBe('Luisa');
	});
	it("should say if key 'name' does not exist", function() {
		expect(getName({ person: 'Luisa', age: 25 })).toBe('Name does not exist');
	});
});


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


describe("keyValue", function() {
	it("should create an object with a key of the first arguement and value of the second", function() {
		expect(keyValue('city', 'Denver')).toEqual({city: "Denver"});
	});
});


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
// describe("printObject", function() {
// 	it("should console log each key-value pair of an object in the format 'key is value' on separate lines", function() {

// 	});
// });
















