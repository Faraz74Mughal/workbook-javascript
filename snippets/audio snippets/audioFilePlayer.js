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
			this.audio.addEventListener('pause', () => {
				this.audio = null;
				this.ready = false;
			});
		} else console.log('Not Available');
		return this;
	}
};
