

function scoreAnswers(parkAnswer, learnAnswer, astroAnswer, aquaticAnswer, weatherAnswer) {
    parkAnswer = parkAnswer.toLowerCase();
    learnAnswer = learnAnswer.toLowerCase();
    astroAnswer = astroAnswer.toLowerCase();
    aquaticAnswer = aquaticAnswer.toLowerCase();
    weatherAnswer = weatherAnswer.toLowerCase();
    
    let score = 0;

    if(parkAnswer === 'Zion') {
        score++;
    }

    if(learnAnswer === 'Surfing') {
        score++;
    }

    if(astroAnswer === 'Taurus') {
        score++;
    }

    if(aquaticAnswer === 'Octopus') {
        score++;
    }

    if(weatherAnswer === 'Snow') {
        score++;
    }

    return score;
}