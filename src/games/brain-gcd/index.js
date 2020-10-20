import { initGameStep, initGame } from '../index.js';
import getRandomInteger from '../../utils/index.js';
import { MAX_NUMBER, MIN_NUMBER } from './config.js';

const rulesText = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));

const getCorrectAnswer = (string) => {
  const [number1, number2] = string.split(' ');
  return String(getGcd(+number1, +number2));
};

const getQuestionInfo = () => {
  const text = `${getRandomInteger(MIN_NUMBER, MAX_NUMBER)} ${getRandomInteger(MIN_NUMBER, MAX_NUMBER)}`;
  const correctAnswer = getCorrectAnswer(text);
  return {
    text,
    correctAnswer,
  };
};

const makeGameStep = initGameStep({ getQuestionInfo });

export default initGame(makeGameStep, rulesText);
