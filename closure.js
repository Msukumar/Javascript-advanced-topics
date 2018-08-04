let Books = function(){
    let author = "sukumar";
    this.setAuthor = function(newAuthor) {
        author = newAuthor;
    };

    this.getAuthor = function(){
        return author;
    }
}

let cci = new Books();
console.log(cci.getAuthor());

cci.setAuthor("McDowel");
console.log(cci.getAuthor());
