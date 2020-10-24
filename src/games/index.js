import promptly from 'promptly';
import greetUser from '../cli.js';

const MAX_QUESTION_NUMBER = 3;
const WINNING = 'WINNING';
const FAIL = 'FAIL';

const askQuestion = async (questionText) => {
  console.log(`Question: ${questionText}`);
  return promptly.prompt('Your answer:');
};

const initGameStep = (getQuestionInfo) => {
  const makeGameStep = async (questionCount = 1) => {
    if (questionCount > MAX_QUESTION_NUMBER) return { status: WINNING };
    const { questionText, correctAnswer } = getQuestionInfo();
    const userAnswer = await askQuestion(questionText);

    if (userAnswer !== correctAnswer) {
      return { status: FAIL, userAnswer, correctAnswer };
    }
    console.log('Correct!');
    return makeGameStep(questionCount + 1);
  };

  return makeGameStep;
};

export default ({ getQuestionInfo, rulesDescription }) => async () => {
  const makeGameStep = initGameStep(getQuestionInfo);
  const userName = await greetUser();
  console.log(rulesDescription);
  const result = await makeGameStep();

  switch (result.status) {
    case WINNING:
      console.log(`Congratulations, ${userName}!`);
      break;
    case FAIL:
      console.log(`'${result.userAnswer}' is wrong answer ;(. Correct answer was '${result.correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    default:
      console.log('Something went wrong');
      break;
  }
};
