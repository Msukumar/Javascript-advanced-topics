function add(x) {
    var _add(y) {
        return add(x+y);
    }

    _add.valueOf = function(){
        return x;
    }

    return _add;
}

console.log(add(2)(3)(5)); // f 10


/* Still finding the best solution for this 

add(2)(3)(5) == 10  // true
add(2)(3)(5) === 10  // false

*/