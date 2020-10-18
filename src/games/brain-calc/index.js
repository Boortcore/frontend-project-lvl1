import { initGameStep, initGame } from '../index.js';
import getRandomInteger from '../../utils/index.js';
import { MAX_NUMBER, MIN_NUMBER } from './config.js';

const rulesText = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getRandomExpression = () => {
  const randomOperator = operators[getRandomInteger(0, operators.length - 1)];
  const argument1 = getRandomInteger(MIN_NUMBER, MAX_NUMBER);
  const argument2 = getRandomInteger(MIN_NUMBER, MAX_NUMBER);
  return `${argument1} ${randomOperator} ${argument2}`;
};

const getCorrectAnswer = (expression) => {
  const [argument1, operator, argument2] = expression.split(' ');
  switch (operator) {
    case '+':
      return String(+argument1 + +argument2);
    case '-':
      return String(argument1 - argument2);
    case '*':
      return String(argument1 * argument2);
    default:
      return '';
  }
};

const makeGameStep = initGameStep({
  getTextQuestion: getRandomExpression,
  getCorrectAnswer,
});

export default initGame(makeGameStep, rulesText);
