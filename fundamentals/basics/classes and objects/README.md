# Javascript - Fundamentals - Basics

## Classes and Objects

```javascript
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

// Object Instance
let myCar = new Car("Ford", 2014);

// Check object Instance
if( myCar instanceof Car ) {
  console.log("Okay!")
}
```

**Inheritance**

```javascript
class A {
    constructor(name) {
        this.name = name
    }
    get Name() {
        return this.name;
    }
    set Name(x) {
        this.name = x;
    }
    static hello() {
        return "Hello!!";
    }
}
class B extends A {
    constructor(name,age) {
        super(name);
        this.age = age;
    }
    get Age() {
        return this.age;
    }
    set Age(x) {
        this.age = x;
    }
}
```

**Filling Traits of One Class to Another**

```javascript
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

console.log( rabbit.eats );
console.log( rabbit.jumps );
```
