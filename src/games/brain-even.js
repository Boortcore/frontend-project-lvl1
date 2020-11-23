import getRandomInteger from '../utils.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const getQuestionInfo = () => {
  const randomInteger = getRandomInteger(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = getCorrectAnswer(randomInteger);
  return {
    question: randomInteger,
    correctAnswer,
  };
};

export default {
  getQuestionInfo,
  description,
};
