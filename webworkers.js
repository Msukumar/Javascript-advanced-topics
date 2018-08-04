//multi thread operations
if(window.Worker){
    var myWorker = new Worker("pathof the file"); //worker.js
    var mes = {
        addThis : {
            num1 : 1,
            num2: 2
        }
    };

    myWorker.postMessage(message);

    myWorker.onmessage = function(e){
        console.log(e.data.result);
    }
}


//Worker.js
//----------------------

this.onmessage = function(e){
    if(e.data.addThis !== undefined){
        this.postMessage({
            result : e.data.addThis.num1 + e.data.addThis.num2
        })
    }
}