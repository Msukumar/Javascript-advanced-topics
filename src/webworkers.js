// multi thread operations
if(window.Worker) {
    const myWorker = new Worker("pathof the file"); // worker.js
    const mes = {
        "addThis": {
            "num1": 1,
            "num2": 2
        }
    };

    myWorker.postMessage(message);

    myWorker.onmessage = (e) => {
        console.log(e.data.result);
    };
}


// worker.js
// ----------------------

this.onmessage = function(e) {
    if(e.data.addThis !== undefined) {
        this.postMessage({
            "result": e.data.addThis.num1 + e.data.addThis.num2
        });
    }
};
