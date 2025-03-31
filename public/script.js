// Global variable to store the API key
let voiceRSSKey = '';

// Get DOM elements
const btn = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Fetch configuration from server
async function fetchConfig() {
	try {
		const response = await fetch('/api/config');
		const config = await response.json();
		voiceRSSKey = config.voiceRSSKey;
	} catch (error) {
		console.error('Error loading configuration:', error);
	}
}

// Disable/Enable Button
function toggleButton() {
	btn.disabled = !btn.disabled;
}

// Passing Joke to VoiceRSS API
function tellMe(joke) {
	VoiceRSS.speech({
		key: voiceRSSKey,
		src: joke,
		hl: 'en-us',
		v: 'Linda',
		r: 0,
		c: 'mp3',
		f: '44khz_16bit_stereo',
		ssml: false,
	});
}

// Get jokes from Joke API
async function getJokes() {
	let joke = '';
	const apiURL =
		'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
	try {
		const response = await fetch(apiURL);
		const data = await response.json();
		if (data.setup) {
			joke = `${data.setup} ... ${data.delivery}`;
		} else {
			joke = data.joke;
		}
		// Text-to-Speech
		tellMe(joke);
		// Disable Button
		toggleButton();
	} catch (error) {
		// Catch errors
		console.log('Error fetching joke:', error);
	}
}

// Add event listeners
btn.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);

// Initialize the app by loading configuration
fetchConfig();
