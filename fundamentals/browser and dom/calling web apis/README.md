# Javascript - Fundamentals - Browser & DOM

## Calling APIs using `Fetch` Method

```javascript
  const response = await fetch('https://example.com/answer', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ answer: 42 }) 
  });

  const jsonData = response.json(); 
  
  jsonData.then(data => {
    console.log(data);
  });
```