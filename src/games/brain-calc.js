import getRandomInteger from '../utils.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 10;

const rulesDescription = 'What is the result of the expression?';

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

const getCorrectAnswer = (expression) => {
  const [argument1, operator, argument2] = expression.split(' ');
  return String(calculate(+argument1, operator, +argument2));
};

const getQuestionInfo = () => {
  const expression = getRandomExpression();
  const correctAnswer = getCorrectAnswer(expression);
  return {
    questionText: expression,
    correctAnswer,
  };
};

export default {
  getQuestionInfo,
  rulesDescription,
};
