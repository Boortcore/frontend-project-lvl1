import getRandomInteger from '../utils.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));

const getQuestionInfo = () => {
  const number1 = getRandomInteger(MIN_NUMBER, MAX_NUMBER);
  const number2 = getRandomInteger(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = getGcd(number1, number2);

  return {
    question: `${number1} ${number2}`,
    correctAnswer: String(correctAnswer),
  };
};

export default {
  getQuestionInfo,
  description,
};
