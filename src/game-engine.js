import promptly from 'promptly';

const MAX_QUESTION_NUMBER = 3;

const askQuestion = async (questionText) => {
  console.log(`Question: ${questionText}`);
  return promptly.prompt('Your answer:');
};

export default async ({ getQuestionInfo, description }) => {
  console.log('Welcome to the Brain Games!');
  const userName = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  const questionSequence = Array.from(new Array(MAX_QUESTION_NUMBER))
    .map(() => getQuestionInfo);

  // eslint-disable-next-line no-restricted-syntax
  for await (const getQuestion of questionSequence) {
    const { question, correctAnswer } = getQuestion();
    const userAnswer = await askQuestion(question);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
