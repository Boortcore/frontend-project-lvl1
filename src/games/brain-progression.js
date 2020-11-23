import getRandomInteger from '../utils.js';

const MIN_SEQUENCE_LENGTH = 5;
const MAX_SEQUENCE_LENGTH = 10;
const REPLACING_TEXT = '..';
const MIN_VALUE = 1;
const MAX_VALUE = 10;

const description = 'What number is missing in the progression?';

const getSequence = (startValue, diff) => {
  const sequenceLength = getRandomInteger(MIN_SEQUENCE_LENGTH, MAX_SEQUENCE_LENGTH);
  return Array.from({ length: sequenceLength })
    .map((_, index) => startValue + diff * index);
};

const getQuestionInfo = () => {
  const startValue = getRandomInteger(MIN_VALUE, MAX_VALUE);
  const diff = getRandomInteger(MIN_VALUE, MAX_VALUE);
  const sequence = getSequence(startValue, diff);
  const randomIndex = getRandomInteger(0, sequence.length - 1);
  const correctAnswer = startValue + diff * randomIndex;
  return {
    question: sequence.map((number) => (number !== correctAnswer ? number : REPLACING_TEXT)).join(' '),
    correctAnswer: String(correctAnswer),
  };
};

export default {
  getQuestionInfo,
  description,
};
