# String Case Management Snippets

**Capitalize First Letter**

`Method`

```javascript
const caps = (text) => text[0].toUpperCase() + text.slice(1).toLowerCase();
```

`Usage`

```javascript
console.log(caps(word));
```