function sum(x) {
    const add = y => sum(x + y);
    add.valueOf = () => x;
    return add;
}

console.log(sum(2)(3)(5)); // f 10
console.log(sum(2)(3)(5).valueOf()); // 10

module.exports = sum;
