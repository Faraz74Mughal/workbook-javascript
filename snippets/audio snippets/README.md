# Audio Snippets

`Method`

```javascript
const playAudio = (file) =>
	new Promise((resolve, reject) => resolve(new Audio(file)))
		.then((audio) => {
			audio.volume = 0.2;
			audio.playbackRate = 7;
			return audio;
		})
		.then((audio) => audio.play())
		.catch((err) => console.error('Error: ', err));
```

`Usage`

```javascript
playAudio("./sounds/abc.mp3")
```