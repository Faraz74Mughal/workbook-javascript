# Javascript - Fundamentals

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

const task = () => {
  // Some Code Here
}

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

Object.assign(rabbit.prototype, task);

console.log( rabbit.eats );
console.log( rabbit.jumps );
```

**Check if Property is Own or Inherted**

```javascript
let animal = {
  eats: true
};

const task = () => {
  // Some Code Here
}

let rabbit = {
  jumps: true,
  __proto__: animal
};

Object.assign(rabbit.prototype, task);

for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    alert(`Our: ${prop}`);
  } else {
    alert(`Inherited: ${prop}`);
  }
}
```

**Access Modifiers**

```javascript
class CoffeeMachine {
  
  // Private
  #name = null;

  // Protected
  _age = null

  // Public
  description = null

  // Constructor
  constructor(name=null,age=null,description=null) {
    if(name && age && description) {
      this.#name = name
      this._age = age
      this.description = description
    } else {
      throw new Error("Pass Complete & Correct Parameters to the Constrcutor")
    }
  }

  getDetails(value) {
    return `${this.#name} is ${this._age} and ${this.description}`
  }
}

let coffeeMachine = new CoffeeMachine();
```

**Getter and Setters**

```javascript
class CoffeeMachine {
  
  // Private
  #name = null;

  // Protected
  _age = null

  // Public
  description = null

  // Constructor
  constructor(name=null,age=null,description=null) {
    if(name && age && description) {
      this.#name = name
      this._age = age
      this.description = description
    } else {
      throw new Error("Pass Complete & Correct Parameters to the Constrcutor")
    }
  }

  // Getter
  get name() {
    return this.#name;
  }

  // Setter
  set name(value) {
    this.#name = value;
  }

  getDetails(value) {
    return `${this.#name} is ${this._age} and ${this.description}`
  }
}

let coffeeMachine = new CoffeeMachine();
```

**Chained Methods in Classes**

```javascript
class Car {
   constructor() {
      this.wheels = 4
      this.doors = 4
      this.topSpeed = 100
      this.feulCapacity = "400 Litres"
   }
   setWheels(w) {
      this.wheels = w;
      return this;
   }
   setDoors(d) {
      this.doors = d;
      return this;
   }
   setTopSpeed(t) {
      this.topSpeed = t;
      return this;
   }
   setFeulCapacity(fc) {
      this.feulCapacity = fc;
      return this;
   }
   displayCarProps() {
      console.log(`Your car has ${this.wheels} wheels,\
      ${this.doors} doors with a top speed of ${this.topSpeed}\
      and feul capacity of ${this.feulCapacity}`)
   }
}

// Chained Class Methods
let sportsCar = new Car()
   .setDoors(2)
   .setTopSpeed(250)
   .setFeulCapacity("600 Litres")
   .displayCarProps()
```
