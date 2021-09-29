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
