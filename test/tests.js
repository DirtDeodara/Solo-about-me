const test = QUnit.test;

test('all answers are wrong gets 0', function(assert) {
    const parkAnswer = 'Niagara Falls';
    const learnAnswer = 'Soccer';
    const astroAnswer = 'Libra';
    const aquaticAnswer = 'Sea Slug';
    const weatherAnswer = 'Rain';
    const expected = 0;
    
    const score = scoreAnswers(parkAnswer, learnAnswer, astroAnswer, aquaticAnswer, weatherAnswer);
    //Assert
    assert.equal(score, expected);
});

test('all answers are right gets 5', function(assert) {
    const parkAnswer = 'Zion';
    const learnAnswer = 'Surfing';
    const astroAnswer = 'Taurus';
    const aquaticAnswer = 'Octopus';
    const weatherAnswer = 'Snow';
    const expected = 5;
    
    const score = scoreAnswers(parkAnswer, learnAnswer, astroAnswer, aquaticAnswer, weatherAnswer);
    //Assert
    assert.equal(score, expected);
});