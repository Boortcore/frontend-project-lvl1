const promptly = require('promptly');
const { getRandomInteger } = require('../utils');
const greetUser = require('../cli');

const {
  MAX_NUMBER, MIN_NUMBER, MAX_QUESTION_NUMBER, WINNING, FAIL,
} = require('./config');

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const askQuestion = async (questinonText) => {
  console.log(`Question: ${questinonText}`);
  return promptly.prompt('Your answer:');
};

const makeGameStep = async (questionCount) => {
  if (questionCount > MAX_QUESTION_NUMBER) return { status: WINNING };
  const randomInter = getRandomInteger(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isEven(randomInter);
  const userAnswer = await askQuestion(randomInter);

  if (userAnswer !== correctAnswer) {
    return { status: FAIL, userAnswer, correctAnswer };
  }
  console.log('Correct!');
  return makeGameStep(questionCount + 1);
};

const startGame = async () => {
  const questionCount = 1;
  const userName = await greetUser();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const result = await makeGameStep(questionCount);

  switch (result.status) {
    case WINNING:
      console.log(`Congratulations, ${userName}!`);
      break;
    case FAIL:
      console.log(`'${result.userAnswer}' is wrong answer ;(. Correct answer was '${result.correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    default:
      console.log('Something went wrong');
      break;
  }
};

module.exports = startGame;
