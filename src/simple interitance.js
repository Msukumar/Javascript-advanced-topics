const Car = function(name) {
    this.name = name;
};

Car.prototype.getName = function() {
    return this.name;
};


const nissan = new Car("Nissan");

nissan.getName();
