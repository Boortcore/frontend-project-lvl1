import { initGameStep, initGame } from '../index.js';
import getRandomInteger from '../../utils/index.js';
import { MAX_NUMBER, MIN_NUMBER } from './config.js';

const rulesText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getQuestionInfo = () => {
  const text = getRandomInteger(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = isEven(+text);
  return {
    text,
    correctAnswer,
  };
};

const makeGameStep = initGameStep({ getQuestionInfo });

export default initGame(makeGameStep, rulesText);
