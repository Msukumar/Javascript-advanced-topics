const nums = [1,2,3,3];
// one line answers


console.log(new Set(num)); // return set of entries
console.log([...new Set(nums)]);


const a = [1,2,5,2,1,1,8];
const a_length = a.length;
let b = [];
// 1) brutforce approach

for(let i = 0; i < a_length; i++) {
    if(b.indexOf(a[i]) === -1) {
        b.push(a[i]);
    }
}

console.log(b); // it should have unique values it close to o(n2);

// 2)
let _temp;

a.sort();
for(let i = 0; i < a_length; i++) {
    if(a[i] !== _temp) {
        b.push(a[i]);
        _temp = a[i];
    }
}

console.log(b); // it should have unique values it close to o(n);
// 3)

obj = {};
for(const i of a) { // i is the value not index
    obj[i] = true;
}
let b = Object.keys(obj);
