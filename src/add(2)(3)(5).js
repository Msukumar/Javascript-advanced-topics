function sum(x) {
    const add = y => isNaN(y) ? x : sum(x + y);

    add.valueOf = () => x;

    return add;
}

console.log(sum(2)(3)(5)()); // 10

module.exports = sum;
