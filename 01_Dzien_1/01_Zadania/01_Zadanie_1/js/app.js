//1
function customReduce(array){
    let sum = 0;
    let multiplication = 1;
    for(a of array){
        sum += a;
        multiplication = multiplication * a;
    }
    return console.log("Sum: ",sum, "Multiplication: ",multiplication);
};

customReduce([4, 12, 23, 76, 4]);

//2

const numbers = [4, 12, 23, 76, 4];

Array.prototype.customReduce = function (reducer, init){
    if (!this.length && init === undefined){
        throw new TypeError("not init value and empty arr")
    } 
    let acc = init;
    let index = 0;
    if (init === undefined){
        acc = this[0];
        index = 1;
    }
    for ( ; index < this.length; index++){
        acc = reducer(acc, this[index], index, this);
    }
    return console.log(acc);
}