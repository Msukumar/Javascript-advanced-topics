function $(selector){
    var self = {};
    self.selector = selector;
    self.element = document.querySelector(selector);
    self.html = function(){
        return self.element;
    }
    self.attr = function(attrName, value){
        if(value){
            self.element.setAttribute(attrName, value);
        } else {
            return self.element.getAttribue(attrName);
        }
        return self;
    }

    self.on = function(type, callback){
        self.element['on' + type ] = callback;
    }

    return self;
}