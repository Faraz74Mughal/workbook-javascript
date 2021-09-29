# Javascript - Fundamentals - Basics

## Call, Bind and Apply

**Call**

```javascript
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");
```

**Apply**

```javascript
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);
```

**Bind**

```javascript
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
```

