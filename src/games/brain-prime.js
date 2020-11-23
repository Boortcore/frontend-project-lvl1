import getRandomInteger from '../utils.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2, squareRootNumber = Math.sqrt(num); i <= squareRootNumber; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const getQuestionInfo = () => {
  const randomInteger = getRandomInteger(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = getCorrectAnswer(randomInteger);
  return {
    question: String(randomInteger),
    correctAnswer,
  };
};

export default {
  getQuestionInfo,
  description,
};
