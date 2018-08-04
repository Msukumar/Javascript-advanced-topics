function add(x){
    function _add(y){
        if(typeof y !== "undefined"){
        		x = x+y;
            return _add;
        }else {
            return x;
        }
    }
    _add.valueOf = function(){return _add()};
    return _add;
}
console.log(add(5)(50)(45));
