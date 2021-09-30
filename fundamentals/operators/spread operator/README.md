# Javascript - Fundamentals - Operators

## Spread Operator

```javascript
let attacks = [
    "chidori",
    "lightening blade",
]

let skills = [
    "sharingan",
    "magekeur sharingan",
]

let jutsu = [
    "substitution jutsu"
]

let person = {
    firstName: "kakashi",
    lastName: "hatake",
    age: 32,
    profession: "ninja",
    hobbies: [...attacks, ...skills, ...jutsu]
}

let details = {
    qualification: "shinobi",
    missions: 43,
}

let outlook = {
    hair: "white"
}

person.profile = { ...details, ...outlook }

console.log(person)
```