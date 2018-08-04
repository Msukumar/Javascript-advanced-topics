function sum(x) {
    function add(y) {
        if(typeof y === "number") {
            x += y;
            return add;
        }
        return x;
    }
    add.valueOf = () => add();
    return add;
}

console.log(sum(5)(50)(45));
