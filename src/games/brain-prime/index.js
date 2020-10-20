import { initGameStep, initGame } from '../index.js';
import getRandomInteger from '../../utils/index.js';
import { MAX_NUMBER, MIN_NUMBER } from './config.js';

const rulesText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s;) {
    if (num % i === 0) return false;
    i += 1;
  }
  return num > 1;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const getQuestionInfo = () => {
  const text = `${getRandomInteger(MIN_NUMBER, MAX_NUMBER)}`;
  const correctAnswer = getCorrectAnswer(+text);
  return {
    text,
    correctAnswer,
  };
};

const makeGameStep = initGameStep({ getQuestionInfo });

export default initGame(makeGameStep, rulesText);
