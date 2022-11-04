'use strict'

const questions = [
    { question: 'Сколько будет 2+2?', answer: 4 },
    { question: 'Солнце встаёт на воcтоке?', answer: true },
    { question: 'Сколько будет 5 / 0?', answer: 'Infinity' },
    { question: 'Какого цвета небо?', answer: 'Голубого' },
    { question: 'Как правильный ответ на «Главный вопрос жизни, вселенной и всего такого»', answer: 42 },
]

getCoins();

function getCoins() {
    let coin = 0;
    for (const { question, answer } of questions) {
        const userAnswer = getAnswer(question, answer);
        if (userAnswer == answer) {
            coin +=10;
        }
    }
    showResult(coin);
}

function getAnswer(question, answer) {
    if (typeof answer === 'boolean') {
        return confirm(question);
    } else {
        return prompt(question);
    }
}

function showResult(result) {
    alert(`Ваш результат ${result} балов!`);
}