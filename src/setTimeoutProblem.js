const displayTest1 = () => {
    for(let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i); // will o/p 10 for 10 times
        }, 1000);
    }
};


const displayTest2 = () => {
    for(let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i); // will o/p  0 t0 9
        }, i, 1000);
    }
};

displayTest1();
displayTest2();
