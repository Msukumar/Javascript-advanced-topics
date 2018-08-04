const Books = function() {
    let author = "sukumar";

    this.setAuthor = (newAuthor) => {
        author = newAuthor;
    };

    this.getAuthor = () => author;
};

const cci = new Books();

console.log(cci.getAuthor());

cci.setAuthor("McDowel");
console.log(cci.getAuthor());
