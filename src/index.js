import scoreAnswers from './score-function.js';

const submitButton = document.getElementById('submit-button');
const parkInput = document.getElementById('park-answer');
const learnInput = document.getElementById('learn-answer');
const astroInput = document.getElementById('astro-answer');
const aquaticInput = document.getElementById('aquatic-answer');
const weatherInput = document.getElementById('weather-answer');
const resultParagraph = document.getElementById('quiz-result')

submitButton.addEventListener('click', () => {

    const parkAnswer = parkInput.value;
    const learnAnswer = learnInput.value;
    const astroAnswer = astroInput.value;
    const aquaticAnswer = aquaticInput.value;
    const weatherAnswer = weatherInput.value;

    const score = scoreAnswers(parkAnswer, learnAnswer, astroAnswer, aquaticAnswer, weatherAnswer);
    const message = 'You got ' + score + '/3 correct';
    resultParagraph.textContent = message;
});

