function sum(x) {
    const add = y => isNaN(y) ? x : sum(x + y);
    return add;
}

console.log(sum(2)(3)(5)()); // 10

module.exports = sum;
