require = require('esm')(module);
module.exports = require("./tests.js");


import scoreAnswers from './score-answers.js';

const submitButton = document.getElementById('submit-button');
const parkInput = document.getElementById('park-answer');
const learnInput = document.getElementById('learn-answer');
const astroInput = document.getElementById('astro-answer');
const aquaticInput = document.getElementById('aquatic-answer');
const weatherInput = document.getElementById('waether-answer');

submitButton.addEventListener('click', => () {
    const parkAnswer = parkInput.value;
    const learnAnswer = learnInput.value;
    const astroAnswer = astroInput.value;
    const aquaticAnswer = aquaticInput.value;
    const weatherAnswer = weatherInput.value;
});

/*const parkInput = document.getElementById('park-answer');
const learnInput = document.getElementById('learn-answer');
const astroInput = document.getElementById('astro-answer');
const aquaticResult = document.getElementById('aquatic-result');
const weatherResult = document.getElementById('weather-result');