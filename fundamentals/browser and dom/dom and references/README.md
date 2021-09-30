# Javascript - Fundamentals - Browser & DOM

## DOM

**Fetching References**

```javascript
const x = document.getElementById("demo-id")

const y = document.getElementsByClassName("demo-class")

const z = document.getElementsByTagName("p")
```

```javascript
x.attribute = "red"
x.setAttribute("width","10px")
```

```javascript
x.innerHTML = "Hello"
x.style.backgroundColor = "yellow" 
```

## DOM Element Actions

`document.createElement(element)` `document.removeChild(element)` `document.appendChild(element)`
`document.replaceChild(new, old) ` `document.write(text)`

