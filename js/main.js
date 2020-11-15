// console.log('Sample JavaScript #3 HW #17');



let counter = (function() {
    let count = 0;

    return function (val) {

        if (val !== undefined) count = val;


       return count++;
    };
}());



console.log(counter()); // 0

console.log(counter()); // 1

console.log(counter(100)); // 100

console.log(counter()); // 101

console.log(counter(500)); // 500

console.log(counter()); // 501

console.log(counter(0)); // 0

console.log(counter()); // 1






let counting = (function () {
    let count = 0;

    return {
        value(num) {
            if ( num !== undefined) count = num;

            return count;
        },
        increment() {
            count++;
        },
        decrement() {
            count--;
        }
    };
}());

console.log(counting.value());

counting.increment();

counting.increment();

counting.increment();

console.log(counting.value()); 

counting.decrement();

counting.decrement();

console.log(counting.value()); 

console.log(counting.value(100)); 

counting.decrement();

console.log(counting.value()); 

console.log(counting.value(200)); 

counting.increment();

console.log(counting.value()); 






let myPrint = (a, b, res) => `${a}^${b}=${res}`;

let myPow = (a, b, callback) => {
    let pow = (x, n) => {
        if (n !== 1) return x *= pow(x, n - 1);  
            return x;
    };
return callback(a, b, pow(a,b));
    };

 console.log(myPow(3, 4, myPrint)); 

console.log(myPow(2, 3, myPrint)); 









function fullInfo() {
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
};

let yearNow = new Date().getFullYear();
let car = {
    name: 'Honda',
    model: 'Accord',
    engine: 2000,
    year: 2008,
    info: fullInfo,
    get used () {
    return this.year !== yearNow ? 'used' : 'new';
    },
    set used (value) {
        if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
};


let car2 = {
    name: 'Honda',
    model: 'Legend',
    engine: 3500,
    year: 2019,
    info: fullInfo,

    get used () {
        return this.car == yearNow ? 'new' : 'used'; // посмотреть запись yearNow - this.car ? 'used' : 'new';
    },
    set used (value) {
        if (value === 'new' && this.year < yearNow) this.year = yearNow;
    }
};

console.log(car.info()); 
car.used = 'new';
console.log(car.info()); 
car.used = 'used';
console.log(car.info());
console.log(car2.info());
car.used = 'used';
console.log(car2.info()); 





let list = [12, 23, 100, 34, 56, 9, 233];

let myMax = (arg) => Math.max.apply(Math, arg);

console.log(myMax(list)); 




 let myMul = function(a, b) {
     return (res = a * b);

 };


let myDouble = myMul.bind(null, 2);
    
console.log(myDouble(3)); 

console.log(myDouble(4)); 

console.log(myDouble(5));


let myTriple = myMul.bind(null, 3);
 
console.log(myTriple(3));

console.log(myTriple(4));

console.log(myTriple(5)); 
 


let someNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
 let myUniq = (arr) => {

    let set = new Set();

    arr.forEach((val) => {

        set.add(val);
    });

    return set;
 };

 console.log(myUniq(someNums));

 