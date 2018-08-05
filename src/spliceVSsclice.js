const array = [1,2,3,4,5,6,7];

array.splice(2); // returns a new array with removed items

array.splice("startIndex", "how many items should remove", "new text"); // it will effect the original array


array.slice(2,4); // will not effect the original array return the portion of the array

array.slice("from number", "to number");

