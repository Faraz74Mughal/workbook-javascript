# Audio Snippets

**Play Any Audio File Once using Promise**

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

**Play Any Audio File Once using Event Listeners**

`Method`

```javascript
const playAudio = (file) => {
    const audio = new Audio(file);
    audio.volume = 0.2;
    audio.playbackRate = 7;
    audio.oncanplay = () => audio.play();
};
```

`Usage`

```javascript
playAudio("./sounds/abc.mp3")
```

**Play Any Audio File, With Hookable Controls**

`Method`

```javascript
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
            this.audio.addEventListener("pause", () => {
                this.audio = null;
			    this.ready = false;
                console.log("Audio Cleared")
            });
		} else console.log('Not Available');
		return this;
	}
};
```

`Usage`

```javascript
// Play Direct with Default Contorls
Player.newAudio('beep-1.mp3').play()

// Play Direct with Custom Contorls
Player.newAudio('beep-1.mp3').setControls({ volume: 0.2, playbackRate: 7 }).play()

// Play Direct with Custom Contorls, and get Audio Info in Console
Player.newAudio('beep-1.mp3').setControls({ volume: 0.2, playbackRate: 7 }).info().play()

// Clear Audio After Playing
Player.newAudio('beep-1.mp3').setControls({ volume: 0.2, playbackRate: 7 }).info().play().clear();

// Play Audio in Chunks
const beep = layer.newAudio('beep-1.mp3')
beep.setControls({ volume: 0.2, playbackRate: 7 });
beep.info()
beep.play()
beep.info()
beep.play()
beep.clear()
```

## DOWNLOAD

**LINUX** `workbook-javascript audio-file-player snippets/*`

```cmd
git clone https://github.com/ZaeemTarrar/workbook-html5.git ; ; rm -rf workbook-html5/.git ; cp -r "workbook-html5/project templates/semantics template/" "./workbook-html5 semantics template" ; rm -rf "workbook-html5" ; cd "workbook-html5 semantics template" ;
```

**MAC** `workbook-javascript audio-file-player snippets/*`

```cmd
git clone https://github.com/ZaeemTarrar/workbook-html5.git ; ; rm -rf workbook-html5/.git ; cp -r "workbook-html5/project templates/semantics template/" "./workbook-html5 semantics template" ; rm -rf "workbook-html5" ; cd "workbook-html5 semantics template" ;
```

**WINDOWS** `workbook-javascript audio-file-player snippets/*`

```cmd
git clone https://github.com/ZaeemTarrar/workbook-html5.git && cd workbook-html5 && del /Q .git && mkdir "../zaeem-html5" && move ".\project templates\semantics template\*" "..\zaeem-html5" && cd ../ && rmdir /s /q "workbook-html5" && rename "zaeem-html5" "workbook-html5 semantics template" && cd "workbook-html5 semantics template"
```