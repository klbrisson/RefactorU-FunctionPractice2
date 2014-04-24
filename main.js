// 1. Write a function called 'getName' which takes a single object argument
// and returns the value of the 'name' property of the given object.
var getName = function(obj) {
	if('name' in obj) {
		return obj.name;
	}
	else {
		return "Name does not exist";
	}
};

// 2. Write a function called 'totalLetters' which takes an array of
// strings and returns the total number of letters in all strings.
var totalLetters = function(arr) {
	var allItems = arr.join('').toLowerCase();
	var newString = '';
	for (var i=0; i<allItems.length; i++) {
		if (allItems.charCodeAt(i) > 96 && allItems.charCodeAt(i) < 123) {
			newString = newString + allItems.charAt(i);
		}
	}
	return newString.length;
};

// 3. Write a function called 'keyValue' which takes two arguments and
// returns an object with a key of the first argument and the value of the second argument.
var keyValue = function(key, value) {
	var Obj = function() {
		this[key] = value;
	};
	return new Obj;
};


// 4. Write a function called 'negativeIndex' which takes an array and
// a negative number, and returns the value from the array at the given
// negative index, as if the array was circular, i.e. arr.length+num.
var negativeIndex = function(arr, num) {
	if (num >= 0 && num < arr.length) {
		return arr[num];
	}
	else if (num < 0 && -num <= arr.length) {
		return arr[arr.length + num];
	}
	else if (num === undefined) {
		return arr;
	}
	else {
		throw new Error("Not in range");
	}
};


// 5. Write a function called 'removeM' which takes a single string argument and
// removes all 'm' characters from the string. The function should return the new string.
var removeM = function(str) {
	var newStr = '';
	var strArr = str.toLowerCase().split('');

	for (var i=0; i < strArr.length; i++) {
		if (strArr[i] !== 'm') {
			newStr += strArr[i];
		}
	};
	return newStr;
};


// 6. Write a function called 'printObject' which takes a single object argument and
// console.log's each key-value pair in the format key is value on separate lines.
var printObject = function(obj) {
	var str = '';
	for(key in obj) {
		str += key + ' is ' + obj[key] + '\n';
	}
	console.log(str);
};


// 7. Write a function called 'vowels' which takes a string and returns
// an array of all the vowels in the string, including duplicates.
var vowels = function(str) {
	var strArr = str.toLowerCase().split('');
	function checkIfVowel (letter) {
		if (letter === 'a' ||
			letter === 'e' ||
			letter === 'i' ||
			letter === 'o' ||
			letter === 'u') {
			return true;
		}
	}
	return strArr.filter(checkIfVowel);
};


// 8. Write a function called 'twins' which takes an array and returns
// true if every pair of items in the array is the same.
var twins = function(arr) {
	var twin = true;
	for (var i=0; i<arr.length; i+=2) {
		if (arr[i] !== arr[i+1]) {
			twin = false;
		}
	}
	return twin;
};


// 9. Write a function called 'or' which takes an array of booleans and returns true if any one
// of them is true. Given an empty array, return false. If you find an item that is true,
// the function should return true immediately and not continue checking further values.
var or = function(arr) {
	for (var i=0; i<arr.length; i++) {
		if (arr[i] === true) {
			return true;
		}
	} 
	return false;
};


// 10. Write a function called 'unique' which takes an array of strings,
// and returns a new array consisting of the unique values (no duplicates).
var unique = function(arr) {
	var newArr = [];
	for (var i=0; i<arr.length; i++) {
		for (var j=0; j<newArr.length; j++) {
			if (arr[i] !== newArr[j]) {
				newArr.push(arr[i]);
			}
		}
	}
	return newArr;
};












