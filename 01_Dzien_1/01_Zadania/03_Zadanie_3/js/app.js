const randomize = (param1, param2, callback) => {
    randomValue = randomize(param1, param2);
    callback(randomValue);
};

const callbackFn = (someValue) => {console.log(someValue);};

randomize(1,30,callbackFn);