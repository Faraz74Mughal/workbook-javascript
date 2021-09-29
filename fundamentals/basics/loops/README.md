# Javascript - Fundamentals - Basics

## Loops

**For**

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i)
}
```

```javascript
let len = 4 
for (let i = 0; len = 4, i < len; i++) {
  console.log(len, i)
}
```

**For-in**

```javascript
var person = {fname:"John", lname:"Doe", age:25};
var text = "";

for (let attr in person) {
  text += person[attr];
}

console.log(text)
```

```javascript
var numbers = [45, 4, 9, 16, 25];
var txt = "";

for (let item in numbers) {
  txt += numbers[item] + "<br>";
}

console.log(txt)
```

**For-Each**

```javascript
var numbers = [45, 4, 9, 16, 25];

numbers.forEach( function( value, index, array ) {
    console.log(value, index, array)
});
```

**For-of**

```javascript
let cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let car of cars) {
  text += car;
}

console.log(text)
```

```javascript
for (let char of "test") {
  console.log(char)
}
```

**While**

```javascript
let text = "";
let i = 0;

while (i < 10) {
  text += "The number is " + i;
  i++;
}

console.log(text)
```

**Do-While**

```javascript
let text = "";
let i = 0;

do {
  text += "The number is " + i;
  i++;
}
while (i < 10);

console.log(text)
```

**Loop-Breaks**

- continue `iternation starts again from the next index/iterator value`
- break `loop stops iterating`

**Outer-Breaks**

```javascript
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    if (!input) break outer;

  }
}
alert('Done!');
```
