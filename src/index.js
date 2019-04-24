import scoreAnswers from './score-answers.js';

const submitButton = document.getElementById('submit-button');
const parkInput = document.getElementById('park-answer');
const learnInput = document.getElementById('learn-answer');
const astroInput = document.getElementById('astro-answer');
const aquaticInput = document.getElementById('aquatic-answer');
const weatherInput = document.getElementById('weather-answer');
const resultParagraph = document.getElementById('quiz-result')

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    const parkAnswer = parkInput.value;
    const learnAnswer = learnInput.value;
    const astroAnswer = astroInput.value;
    const aquaticAnswer = aquaticInput.value;
    const weatherAnswer = weatherInput.value;
    console.log('is this working?')
});

