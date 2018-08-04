function $(selector) {
    const self = {};

    self.selector = selector;
    self.element = [];

    self.element = [...document.querySelectorAll(selector)];

    self.html = () => (self.element[0] || {}).innerHTML;

    self.attr = (attrName, value) => {
        if(value) {
            self.element.forEach((el) => {
                el.setAttribute(attrName, value);
            });
        } else {
            return (self.element[0] || {}).getAttribue(attrName);
        }
        return self;
    };

    self.on = (type, callback) => {
        self.element.forEach((el) => {
            el.addEventListener(type, callback);
        });
    };

    return self;
}
