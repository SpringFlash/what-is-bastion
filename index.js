const messageTemplate = document.querySelector('#chatgpt-msg');
const container = document.querySelector('.gpt-messages');

questionList.map((message) => {
  const newNode = messageTemplate.content.cloneNode(true);

  const questionNode = newNode.querySelector('.question');
  const answerNode = newNode.querySelector('.answer');

  questionNode.innerHTML = message.question;
  answerNode.innerHTML = message.answer;

  container.appendChild(newNode);
});
