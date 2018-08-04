let Car = function(name){
    this.name = name;
}

Car.prototype.getName = function(){
    return this.name;
}


let nissan = new Car("Nissan");
nissan.getName();
