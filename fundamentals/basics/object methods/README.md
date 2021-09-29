# Javascript - Fundamentals - Basics

## Object Methods

**Attribute Deletion**

```javascript
let person = {
    name: "jane",
    gender: "female",
    qualification: "engineer"
}

delete person.qualification
```

**Liternal Objects**

```javascript
const ball = {
    size: 10,
    x: this.size,
    y: this.size,
    radius: 10,
    getDetails() {
        return `x: ${this.x}, y: ${this.y}, radius: ${this.radius}`;
    }
}
```

**Get/Set Enumberables/Configurables**

```javascript
const ball = {
    size: 10,
    x: this.size,
    y: this.size,
    radius: 10,
    get Size() {
        return this.size;
    },
    set Size(value) {
        this.size = value;
    },
    getDetails() {
        return `x: ${this.x}, y: ${this.y}, radius: ${this.radius}`;
    }
}
```

**Object Property Description**

```javascript
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
```

**Create/Get/Set Object Prototypes**

```javascript
let rabbit = Object.create(animal);

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}
```
