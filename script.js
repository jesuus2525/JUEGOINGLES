const questions = [
    {
        question: "The book was so ________ (CAUSA) that I couldn't stop reading it..",
        options: ["interested", "interesting", "bored"],
        answer: "interesting"
    },
    {
        question: "She felt very ________ (SENTIMIENTO) about the trip to Microsoft..",
        options: ["exciting", "excited", "tiring"],
        answer: "excited"
    },
    {
        question: "The senior's explanation was ________ (CAUSA), so everyone was confused..",
        options: ["confused", "confusing", "annoying"],
        answer: "confusing"
    },
    {
        question: "I am ________ (SENTIMIENTO) because I didn't sleep well last night..",
        options: ["tiring", "tired", "relaxing"],
        answer: "tired"
    },
    {
        question: "His behavior is really ________ (CAUSA) to his classmates..",
        options: ["annoyed", "annoying", "surprised"],
        answer: "annoying"
    },
    {
        question: "When he lost his job, my friend was __________(SENTIMIENTO)...",
        options: ["annoyed", "annoying", "distressed"],
        answer: "distressed"
    },    
    {
        question: "London is a really ___________(CAUSA) city...",
        options: ["surprised", "did", "fascinating"],
        answer: "fascinating"
    },    
    {
        question: "The students felt ___________(SENTIMIENTO) about not passing the exam..",
        options: ["annoyyed", "discouraged", "fascinating"],
        answer: "discouraged"
    },    
    {
        question: "I’m very _________ (SENTIMIENTO) to have initiated in this company..",
        options: ["surprised", "excited", "fascinating"],
        answer: "excited"
    },    
    {
        question: "I feel too __________(SENTIMIENTO)  to program out tonight.",
        options: ["tired", "discouraged", "surprised"],
        answer: "tired"
    }
];

let currentQuestionIndex = 0;
let score = 0;
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreText = document.getElementById('score-text');

function loadQuestion() {
    // Si no quedan preguntas, termina el juego
    if (currentQuestionIndex >= questions.length) {
        questionText.textContent = `¡Juego Terminado! 🚀 Tu puntaje final es: ${score} de ${questions.length}`;
        optionsContainer.innerHTML = '<h2>¡Felicidades! Actualiza la página para jugar de nuevo.</h2>';
        scoreText.textContent = `Puntaje: ${score} / ${questions.length}`;
        return;
    }

    const currentQ = questions[currentQuestionIndex];
    questionText.innerHTML = `${currentQ.question.replace('____', '______')}`;
    optionsContainer.innerHTML = ''; // Limpia las opciones

    // Crea y añade los botones de opciones
    currentQ.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option, currentQ.answer);
        optionsContainer.appendChild(button);
    });
    
    scoreText.textContent = `Puntaje: ${score} / ${currentQuestionIndex}`;
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
        // Se puede añadir feedback visual aquí, por simplicidad usamos alert
        alert("¡Correcto! ✅"); 
    } else {
        alert(`Incorrecto. ❌ La respuesta correcta era: ${correctAnswer}`);
    }

    // Pasa a la siguiente pregunta
    currentQuestionIndex++;
    loadQuestion();
}

// Inicia el juego

loadQuestion();

