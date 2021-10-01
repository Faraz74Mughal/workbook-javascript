const Launch = () => {
	const beep = document.getElementById('beep');

	beep.onclick = () => {
		AudioFilePlayer.newAudio('beep-1.mp3').setControls({ volume: 0.2, playbackRate: 7 }).play().clear();
	};
};

window.onload = Launch;
