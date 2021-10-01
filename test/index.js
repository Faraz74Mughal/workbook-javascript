// const playAudio = (file) =>
// 	new Promise((resolve, reject) => resolve(new Audio(file)))
// 		.then((audio) => {
// 			audio.autoplay = false;
// 			audio.loop = false;
// 			audio.muted = false;
// 			audio.volume = 0.2;
// 			audio.playbackRate = 7;
// 			return audio;
// 		})
// 		.then((audio) => audio.play())
// 		.catch((err) => console.error('Error: ', err));

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

// const Player = {
// 	audioDisk: null,
// 	create: async function(file) {
// 		return new Promise((resolve, reject) => resolve(new Audio(file)));
// 	},
// 	set: async function(autoplay,loop,muted,volume,playbackRate) {
// 		this.audioDisk = this.audioDisk
// 			.then((audio) => {
// 				audio.autoplay = false;
// 				audio.loop = false;
// 				audio.muted = false;
// 				audio.volume = 0.2;
// 				audio.playbackRate = 7;
// 			})
// 			.catch((err) => console.error('Error: ', err));
// 	},
// 	play: this.audioDisk.play,
// };

const AudioFilePlayer = {
	audio: null,
	readyStateToString: function() {
		switch (this.audio.readyState) {
			case 0:
				return 'Have Nothing';
			case 1:
				return 'Have Meta Data';
			case 2:
				return 'Have Current Data';
			case 3:
				return 'Have Future Data';
			case 4:
				return 'Have Enough Data';
		}
	},
	networkStateToString: function() {
		switch (this.audio.networkState) {
			case 0:
				return 'Network Empty';
			case 1:
				return 'Network Idle';
			case 2:
				return 'Network Loading';
			case 3:
				return 'Network No Source';
		}
	},
	newAudio: function(file) {
		this.audio = new Audio(file);
		return this;
	},
	setControls: function(settings) {
		if ('volume' in settings) this.audio.volume = settings.volume;
		if ('playbackRate' in settings) this.audio.playbackRate = settings.playbackRate;
		if ('muted' in settings) this.audio.muted = settings.muted;
		if ('loop' in settings) this.audio.loop = settings.loop;
		if ('autoplay' in settings) this.audio.autoplay = settings.autoplay;
		if ('controls' in settings) this.audio.controls = settings.controls;
		if ('duration' in settings) this.audio.duration = settings.duration;
		return this;
	},
	info: function() {
		console.log('Audio File:', this.audio.src, '\nAudio Controls: ', {
			volume: this.audio.volume,
			playbackRate: this.audio.playbackRate,
			muted: this.audio.muted,
			loop: this.audio.loop,
			autoplay: this.audio.autoplay,
			buffered: this.audio.buffered,
			controls: this.audio.controls,
			duration: this.audio.duration,
			ended: this.audio.ended,
			error: this.audio.error,
			paused: this.audio.paused,
			played: this.audio.played,
			networkState: [ this.audio.networkState, this.networkStateToString() ],
			readyState: [ this.audio.readyState, this.readyStateToString() ]
		});
		return this;
	},
	play: function() {
		if (this.audio) this.audio.play();
		else console.log('Not Ready or Available');
		return this;
	},
	pause: function() {
		if (this.audio) this.audio.pause();
		else console.log('Not Ready or Available');
		return this;
	},
	clear: function() {
		if (this.audio) {
			this.audio = null;
			this.ready = false;
		} else console.log('Not Available');
		return this;
	}
};

const playAudio = () => {
	const x = Player.newAudio('beep-1.mp3').setControls({ volume: 0.2, playbackRate: 7 }).info().play().clear();
};

// const playAudio = async (file) => {
// 	const audioDisk = await new Promise((resolve, reject) => resolve(new Audio(file)))
// 		.then((audio) => {
// 			audio.autoplay = false;
// 			audio.loop = false;
// 			audio.muted = false;
// 			audio.volume = 0.2;
// 			audio.playbackRate = 7;
// 			return audio;
// 		})
// 		.catch((err) => console.error('Error: ', err));

// 	await audioDisk.play();
// };
