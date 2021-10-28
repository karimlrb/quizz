class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices;
    this.answer = answer;
  }
  //Si le choix du user est = à this.answer on renvoie true, c'est un booléen
  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

let question = [
  new Question(
    "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
    ["indexOf()", "map()", "filter()", "reduce()"],
    "filter()"
  ),
  new Question(
    "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
    ["isNaN()", "includes()", "findIndex()", "isOdd()", "includes()"]
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
    this.questions[this.currentQuestionIndex];
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

// create quiz
