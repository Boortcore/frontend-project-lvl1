import getRandomInteger from '../utils.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const rulesDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));

const getQuestionInfo = () => {
  const numbers = [
    getRandomInteger(MIN_NUMBER, MAX_NUMBER), getRandomInteger(MIN_NUMBER, MAX_NUMBER),
  ];
  const correctAnswer = getGcd(...numbers);
  return {
    questionText: numbers.join(' '),
    correctAnswer: String(correctAnswer),
  };
};

export default {
  getQuestionInfo,
  rulesDescription,
};
