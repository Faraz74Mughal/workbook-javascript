# Javascript - Fundamentals - Browser & DOM

## Events and Listeners

`click` `load` `unload` `change` `select` `input` `mouseover` `mousedown` `mouseenter` `mousemove`
`keypressed` `keydown` `keyup` `focus` `blur` `scroll` `resive`

```html
<script>
  document.getElementById("myBtn").onclick = function(event) {
    // SOme Code Here
  };
</script>
```

```javascript
element.addEventListener("click", function(){ alert("Hello World!"); });
```