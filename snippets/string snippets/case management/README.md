# String Case Management Snippets

**Capitalize First Letter**

`Method`

```javascript
const capFirst = (text) => text[0].toUpperCase() + text.slice(1).toLowerCase();
```

`Usage`

```javascript
console.log(capFirst(word));
```