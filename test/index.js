const abc = () => {
	new Promise((resolve, reject) => resolve(new Audio('beep-1.mp3')))
		.then((audio) => {
			audio.autoplay = false;
			audio.loop = false;
			audio.muted = false;
			audio.volume = 0.2;
			audio.playbackRate = 7;
			return audio;
		})
		.then((audio) => audio.play())
		.catch((err) => console.error('Error: ', err));
};

abc();
