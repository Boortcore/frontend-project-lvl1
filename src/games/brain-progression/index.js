import { initGameStep, initGame } from '../index.js';
import getRandomInteger from '../../utils/index.js';
import {
  MIN_SEQUENCE_LENGTH,
  MAX_SEQUENCE_LENGTH,
  REPLACING_TEXT,
  MIN_VALUE,
  MAX_VALUE,
} from './config.js';

const rulesText = 'What number is missing in the progression?';

const getSequence = () => {
  const sequenceLength = getRandomInteger(MIN_SEQUENCE_LENGTH, MAX_SEQUENCE_LENGTH);
  const startValueSequence = getRandomInteger(MIN_VALUE, MAX_VALUE);
  const increment = getRandomInteger(MIN_VALUE, MAX_VALUE);
  return Array.from({ length: sequenceLength })
    .reduce((acc, item, index) => {
      const value = index === 0 ? startValueSequence : acc[index - 1];
      return [...acc, value + increment];
    }, []);
};

const getQuestionInfo = () => {
  const sequence = getSequence();
  const randomIndex = getRandomInteger(0, sequence.length - 1);
  const correctAnswer = sequence[randomIndex];
  return {
    text: sequence.map((number) => (number !== correctAnswer ? number : REPLACING_TEXT)).join(' '),
    correctAnswer: String(correctAnswer),
  };
};

const makeGameStep = initGameStep({ getQuestionInfo });

export default initGame(makeGameStep, rulesText);
