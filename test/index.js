const playAudio = (file) =>
	new Promise((resolve, reject) => resolve(new Audio(file)))
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

// const Launch = async () => {
// 	console.log('Launch');
// 	const Player = {
// 		audioDisk: new Audio(),
// 		setOptions: function() {
// 			this.audioDisk.autoplay = false;
// 			this.audioDisk.loop = false;
// 			this.audioDisk.muted = false;
// 			this.audioDisk.volume = 0.2;
// 			this.audioDisk.playbackRate = 7;
// 		},
// 		setFile: function(file) {
// 			this.setOptions();
// 			this.audioDisk.src = file;
// 			return this;
// 		},
// 		play: this.audioDisk.play,
// 		pause: this.audioDisk.pause
// 	};
// 	Player.setFile('beep-1.mp3');
// 	// console.log(Player.play());

// 	const playAudio = () => Player.play();
// };

// window.onload = Launch;
