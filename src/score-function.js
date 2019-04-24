function scoreAnswers(parkAnswer, learnAnswer, astroAnswer, aquaticAnswer, weatherAnswer) {
   
    parkAnswer = parkAnswer.toLowerCase();
    learnAnswer = learnAnswer.toLowerCase();
    astroAnswer = astroAnswer.toLowerCase();
    aquaticAnswer = aquaticAnswer.toLowerCase();
    weatherAnswer = weatherAnswer.toLowerCase();
    
    let score = 0;

    if(parkAnswer === 'Zion') {
        score += 1;
    }

    if(learnAnswer === 'Surfing') {
        score += 1;
    }

    if(astroAnswer === 'Taurus') {
        score += 1;
    }

    if(aquaticAnswer === 'Octopus') {
        score += 1;
    }

    if(weatherAnswer === 'Snow') {
        score += 1;
    }

    return score;
}

export default scoreAnswers