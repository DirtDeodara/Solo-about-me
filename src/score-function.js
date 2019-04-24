function scoreAnswers(parkAnswer, learnAnswer, astroAnswer, aquaticAnswer, weatherAnswer) {
   
    parkAnswer = parkAnswer.toLowerCase();
    learnAnswer = learnAnswer.toLowerCase();
    astroAnswer = astroAnswer.toLowerCase();
    aquaticAnswer = aquaticAnswer.toLowerCase();
    weatherAnswer = weatherAnswer.toLowerCase();
    
    let score = 0;

    if(parkAnswer === 'zion') {
        score += 1;
    }

    if(learnAnswer === 'surfing') {
        score += 1;
    }

    if(astroAnswer === 'taurus') {
        score += 1;
    }

    if(aquaticAnswer === 'octopus') {
        score += 1;
    }

    if(weatherAnswer === 'snow') {
        score += 1;
    }

    return score;
}

export default scoreAnswers;