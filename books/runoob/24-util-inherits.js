// Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承；
// 在原型中定义的属性不会被console.log 作 为对象的属性输出。如果我们去掉 objSub.sayHello(); 这行的注释，将会看到报错。

var util = require('util'); 
function Base() { 
    this.name = 'base'; 
    this.base = 1991; 
    this.sayHello = function() { 
        console.log('Hello ' + this.name); 
    }; 
} 
Base.prototype.showName = function() { 
    console.log(this.name);
}; 
function Sub() { 
    this.name = 'sub'; 
} 
util.inherits(Sub, Base); 
var objBase = new Base(); 
objBase.showName();     // base
objBase.sayHello();     // Hello base
console.log(objBase);   // Base { name: 'base', base: 1991, sayHello: [Function] }
var objSub = new Sub(); 
objSub.showName();      // sub
//objSub.sayHello(); 
console.log(objSub);    // Sub { name: 'sub' }
