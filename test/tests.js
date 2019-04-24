import scoreAnswers from '../src/score-function.js';
const test = QUnit.test;

test('all answers are wrong gets 0', (assert) => {
    const parkAnswer = 'Niagara Falls';
    const learnAnswer = 'Skiing';
    const astroAnswer = 'Libra';
    const aquaticAnswer = 'Sea Slug';
    const weatherAnswer = 'Rain';
    const expected = 0;
    
    const score = scoreAnswers(parkAnswer, learnAnswer, astroAnswer, aquaticAnswer, weatherAnswer);
    //Assert
    assert.equal(score, expected);
    //console.log('hello world');
});

test('all answers are right gets 5', (assert) => {
    const parkAnswer = 'zion';
    const learnAnswer = 'surfing';
    const astroAnswer = 'taurus';
    const aquaticAnswer = 'octopus';
    const weatherAnswer = 'snow';
    const expected = 5;
    
    const score = scoreAnswers(parkAnswer, learnAnswer, astroAnswer, aquaticAnswer, weatherAnswer);
    //Assert
    assert.equal(score, expected);
    //console.log('Goodbye');
});