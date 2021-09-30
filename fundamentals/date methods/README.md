# Javascript - Fundamentals

## Date Methods

**Initializing**

```javascript
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
```

- .toUTCString()
- .toDateString()
- .toISOString()

- .getFullYear()
- .getMonth()
- .getDate()
- .getHours()
- .getMinutes()
- .getSeconds()
- .getMiliseconds()
- .getTime()
- .getDay()
- .getNow()

- .setDate()
- .setFullYear()
- .setHours()
- .setMiliseconds()
- .setMinutes()
- .setMonths()
- .setSeconds()
- .setTime()

**Get Date/Time Difference**

```javascript
// we have date1 and date2, which function faster returns their difference in ms?
function diffSubtract(date1, date2) {
  return date2 - date1;
}

// or
function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}
```

**Parse Date to a Number in Milliseconds**

```javascript
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert(ms); // 1327611110417  (timestamp)
```

