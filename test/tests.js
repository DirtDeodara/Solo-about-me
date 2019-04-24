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