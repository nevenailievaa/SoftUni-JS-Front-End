function solve() {
    
  const quizAnswerElements = document.querySelectorAll('.quiz-answer');

  const questions = {
      'Question #1: Which event occurs when the user clicks on an HTML element?': 'onclick',
      'Question #2: Which function converting JSON to string?': 'JSON.stringify()',
      'Question #3: What is DOM?': 'A programming API for HTML and XML documents'
  }

  let answeredQuestion = 0;

  for (const quizElement of quizAnswerElements) {
      quizElement.addEventListener('click', (e) => {
          const sectionElement = e.currentTarget.parentElement.parentElement;

          const questionTitle = sectionElement.querySelector('.question h2').textContent;
          const answerText = quizElement.querySelector('.answer-text').textContent;
          
          if (questions[questionTitle] == answerText) {
              answeredQuestion ++;
          }

         const nextSection =  sectionElement.nextElementSibling;
         sectionElement.classList.add('hidden');
         sectionElement.style.display = 'none';
         nextSection.classList.remove('hidden');
         nextSection.style.display = 'block';

         if (nextSection.id === 'results') {
          nextSection.style.display = 'block';

          const headingElement = nextSection.querySelector('.results-inner h1');

          if (answeredQuestion === 3) {
              headingElement.textContent = 'You are recognized as top JavaScript fan!';
          } else {
              headingElement.textContent = `You have ${answeredQuestion} right answers`;
          }            
         }
      })
  }

}
