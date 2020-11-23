import getRandomInteger from '../utils.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 10;

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getRandomExpression = () => {
  const randomOperator = operators[getRandomInteger(0, operators.length - 1)];
  const argument1 = getRandomInteger(MIN_NUMBER, MAX_NUMBER);
  const argument2 = getRandomInteger(MIN_NUMBER, MAX_NUMBER);
  return `${argument1} ${randomOperator} ${argument2}`;
};

const calculate = (argument1, operator, argument2) => {
  switch (operator) {
    case '+':
      return argument1 + argument2;
    case '-':
      return argument1 - argument2;
    case '*':
      return argument1 * argument2;
    default:
      return null;
  }
};

const getQuestionInfo = () => {
  const expression = getRandomExpression();

  const [argument1, operator, argument2] = expression.split(' ');
  const correctAnswer = String(calculate(+argument1, operator, +argument2));

  return {
    question: expression,
    correctAnswer,
  };
};

export default {
  getQuestionInfo,
  description,
};
