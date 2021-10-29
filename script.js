class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  //Si le choix du user est = à this.answer on renvoie true, c'est un booléen
  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

let questions = [
  new Question(
    "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
    ["indexOf()", "map()", "filter()", "reduce()"],
    "filter()"
  ),
  new Question(
    "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
    ["isNaN()", "includes()", "findIndex()", "isOdd()", "includes()"],
    "includes()"
  ),
  new Question(
    "Quelle méthode transforme du JSON en un objet Javascript",
    ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS()"],
    "JSON.parse()"
  ),
  new Question(
    "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
    ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
    "Math.random()"
  ),
];

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }
  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

// regroup all functions relative to the app display

const display = {
  // ici déclarer la fonction -> fonction elementShown(id, text) {} ne marche pas, utiliser la syntaxe ci-dessous

  elementShown: function (id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },
  endQuiz: function () {
    endQuizHTML = `
        <h1>Quiz terminé !</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
    this.elementShown("quiz", endQuizHTML);
  },
  question: function () {
    this.elementShown("question", quiz.getCurrentQuestion().text);
  },
  choices: function () {
    let choices = quiz.getCurrentQuestion().choices;

    guessHandler = (id, guess) => {
      document.getElementById(id).onclik = function () {
        quiz.guess(guess);
        quizApp();
      };
    };
    for (let i = 0; i < choices.length; i++) {
      this.elementShown("choice" + i, choices[i]);
    }
  },
};
// game logic

quizApp = () => {
  // on test si quiz.hasEnded() === true
  if (quiz.hasEnded()) {
    display.endQuiz();
  } else {
    display.question();
    display.choices();
    // progress
  }
};

// create quiz

let quiz = new Quiz(questions);
quizApp();

console.log(quiz);
