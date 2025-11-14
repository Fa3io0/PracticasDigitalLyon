const questions = [
    {
        // Bloque 1: Estrategia & Objetivos
        id: 1,
        question: "¿Tu propuesta de valor cabe en una frase clara?",
        type: 'yesno', 
        options: [
            { text: "Sí", value: 1 },
            { text: "No", value: 2 }
        ],
    },
    {
        id: 2,
        question: "¿Tu cliente ideal está claramente definido?",
        type: 'scale', 
        options: [
            { text: "1 - Nada", value: 1 },
            { text: "2", value: 2 },
            { text: "3", value: 3},
            { text: "4", value: 4 },
            { text: "5 - Totalmente", value: 5 }
        ],
    },
    {
        id: 3,
        question: "¿Cuál es tu principal meta a 6 meses?",
        type: 'multiple', 
        options: [
            { text: "Validar", value: 1 },
            { text: "Crecer", value: 2 },
            { text: "Monetizar", value: 4 },
            { text: "Escalar", value: 55 }
        ],
    },
    {
        id: 4,
        question: "¿Conoces a tus 3 competidores directos?",
        type: 'yesno',
        options: [
            { text: "Sí", value: 1 },
            { text: "No", value: 2 }
        ],
    },
    {
        id: 5,
        question: "¿Tienes métricas claras para medir éxito?",
        type: 'multiple',
        options: [
            { text: "Sí, definidas", value: 1 },
            { text: "Parcialmente", value: 2 },
            { text: "No, aún no", value: 3}
        ],
    },
    {

        // Bloque 2: Modelo de Negocio
        id: 6,
        question: "¿Sabes exactamente cómo monetizarás tu producto?",
        type: 'scale', 
        options: [
            { text: "1 - Nada", value: 1 },
            { text: "2", value: 2 },
            { text: "3", value: 3},
            { text: "4", value: 4 },
            { text: "5 - Totalmente", value: 5 }
        ],
    },
    {
        id: 7,
        question: "¿Has validado que los usuarios pagarían por tu solución?",
        type: 'multiple',
        options: [
            { text: "Sí, con ventas reales", value: 1 },
            { text: "Sí, con interés/promesas", value: 2 },
            { text: "No, es supuesto", value: 3}
        ],
    },
    {
        id: 8,
        question: "¿Tienes calculado tu costo de adquisición de cliente (CAC)?",
        type: 'yesno',
        options: [
            { text: "Sí", value: 1 },
            { text: "No", value: 2 }
        ],
    },
    {
        id: 9,
        question: "¿Conoces tu margen de beneficio por cliente?",
        type: 'scale', 
        options: [
            { text: "1 - Nada", value: 1 },
            { text: "2", value: 2 },
            { text: "3", value: 3},
            { text: "4", value: 4 },
            { text: "5 - Totalmente", value: 5 }
        ],
    },
    {
        id: 10,
        question: "¿Tu modelo de ingresos es recurrente o único?",
        type: 'multiple',
        options: [
            { text: "Recurrente", value: 1 },
            { text: "Mixto", value: 2 },
            { text: "Único", value: 3},
            { text: "No definido", value: 4 }
        ],
    },
    {
        // Bloque 3: Producto & Desarrollo
        id: 11,
        question: "¿Tienes un MVP funcional y probado por usuarios?",
        type: 'multiple',
        options: [
            { text: "Sí, en uso", value: 1 },
            { text: "Sí, sin validar", value: 2 },
            { text: "En desarrollo", value: 3},
            { text: "Solo idea", value: 4 }
        ],
    },
    {
        id: 12,        
        question: "¿Tu producto resuelve un problema real y urgente?",
        type: 'scale', 
        options: [
            { text: "1 - Nunca", value: 1 },
            { text: "2", value: 2 },
            { text: "3", value: 3},
            { text: "4", value: 4 },
            { text: "5 - Muy frecuentemente", value: 5 }
        ],
    },
    {
        id: 13,
        question: "¿Has iterado el producto basándote en feedback real?",
        type: 'yesno',
        options: [
            { text: "Sí", value: 1 },
            { text: "No", value: 2 }
        ],
    },
    {
        id: 14,
        question: "¿Tienes roadmap de producto para los próximos 3 meses?",
        type: 'scale', 
        options: [
            { text: "1 - Nada", value: 1 },
            { text: "2", value: 2 },
            { text: "3", value: 3},
            { text: "4", value: 4 },
            { text: "5 - Totalmente", value: 5 }
        ],
    },
    {
        id: 15,
        question: "¿Sabes cuál es tu diferenciador clave vs competencia?",
        type: 'yesno',
        options: [
            { text: "Sí", value: 1 },
            { text: "No", value: 2 }
        ],
    },
    {
        // Bloque 4: Operaciones & Procesos
        id: 16,
        question: "¿Tienes documentados tus procesos clave?",
        type: 'scale', 
        options: [
            { text: "1 - Nada", value: 1 },
            { text: "2", value: 2 },
            { text: "3", value: 3},
            { text: "4", value: 4 },
            { text: "5 - Totalmente", value: 5 }
        ],
    },
    {
        id: 17,
        question: "¿Usas herramientas para gestionar tareas y proyectos?",
        type: 'multiple',
        options: [
            { text: "Sí, sistemáticamente", value: 1 },
            { text: "A veces", value: 2 },
            { text: "No", value: 3}
        ],
    },
    {
        id: 18,
        question: "¿Mides tiempo y recursos en cada etapa de desarrollo?",
        type: 'yesno',
        options: [
            { text: "Sí", value: 1 },
            { text: "No", value: 2 }
        ],
    },
    {
        id: 19,
        question: "¿Tienes un sistema para gestionar clientes/usuarios?",
        type: 'scale', 
        options: [
            { text: "1 - Nada", value: 1 },
            { text: "2", value: 2 },
            { text: "3", value: 3},
            { text: "4", value: 4 },
            { text: "5 - Totalmente", value: 5 }
        ],
    },
    {
        id: 20,
        question: "¿Tu equipo tiene roles y responsabilidades claras?",
        type: 'multiple',
        options: [
            { text: "Sí, muy claras", value: 1 },
            { text: "Parcialmente", value: 2 },
            { text: "No", value: 3 }
        ],
    },
    {
        // Bloque 5: Ventas & Marketing
        id: 21,
        question: "¿Tienes una estrategia de adquisición de usuarios?",
        type: 'scale', 
        options: [
            { text: "1 - Ninguna", value: 1 },
            { text: "2", value: 2 },
            { text: "3", value: 3},
            { text: "4", value: 4 },
            { text: "5 - Muy definida", value: 5 }
        ],
    },
    {
        id: 22,
        question: "¿Generas leads o usuarios nuevos semanalmente?",
        type: 'multiple',
        options: [
            { text: "Sí, consistentemente", value: 1 },
            { text: "A veces", value: 2 },
            { text: "No", value: 3}
        ],
    },
    {
        id: 23,
        question: "¿Sabes qué canal de marketing funciona mejor para ti?",
        type: 'yesno',
        options: [
            { text: "Sí", value: 1 },
            { text: "No", value: 2 }
        ],
    },
    {
        id: 24,
        question: "¿Tienes un sistema de ventas o conversión definido?",
        type: 'scale',
        options: [
            { text: "1 - Nada", value: 1 },
            { text: "2", value: 2 },
            { text: "3", value: 3},
            { text: "4", value: 4 },
            { text: "5 - Totalmente", value: 5 }
        ]
    },
    {   
        id: 25, 
        question: "¿Mides tu tasa de conversión de leads a clientes?", 
        type: 'yesno',
        options: [
            { text: "Sí", value: 1 },
            { text: "No", value: 2 }
        ],
    }
];

// 2. ESTADO DEL QUIZ (Guarda en LocalStorage)
const QUIZ_STATE_KEY = 'quizProgress';
let currentQuestionIndex = 0;
let answers = {}; 

// 3. ELEMENTOS DEL DOM
const quizContent = document.getElementById('quiz-content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBarFill = document.getElementById('progressBarFill');
const progressBarText = document.getElementById('progressBarText');
const totalQuestions = questions.length;

// 4. FUNCIONES DE LÓGICA

// Carga el progreso guardado y navega a la última pregunta respondida.

function loadProgress() {
    const savedState = localStorage.getItem(QUIZ_STATE_KEY);
    if (savedState) {
        const state = JSON.parse(savedState);
        answers = state.answers;
        
        // Encontrar la primera pregunta sin respuesta para reanudar
        let firstUnansweredIndex = questions.findIndex(q => !answers[q.id]);
        
        if (firstUnansweredIndex === -1) {
            // Si todo está respondido, mantener el índice en la última pregunta
            currentQuestionIndex = totalQuestions - 1; 
            // Esto permite que el botón "FINALIZAR" se muestre de nuevo.
        } else {
            // Si hay preguntas sin responder, ir a la primera sin respuesta
            currentQuestionIndex = firstUnansweredIndex;
        }
    }
    renderQuestion(currentQuestionIndex);
}

// Guarda el estado actual del quiz en el LocalStorage.

function saveProgress() {
    const state = {
        currentQuestionIndex: currentQuestionIndex,
        answers: answers
    };
    localStorage.setItem(QUIZ_STATE_KEY, JSON.stringify(state));
}

/**
 * Renderiza la pregunta actual en la interfaz.
 * @param {number} index 
 */
function renderQuestion(index) {
    if (index < 0 || index >= totalQuestions) return;

    quizContent.classList.remove('fade-in');
    setTimeout(() => {
        const questionData = questions[index];
        const currentAnswer = answers[questionData.id];

        // 1. Generar el HTML de las opciones
        let optionsHtml = '';
        questionData.options.forEach(option => {
            const isSelected = option.value === currentAnswer ? ' selected' : '';
            optionsHtml += `
                <div class="answer-option${isSelected}" data-value="${option.value}" data-question-id="${questionData.id}">
                    <span class="neon-cyan">${option.text}</span>
                </div>
            `;
        });

        // 2. Insertar el contenido de la pregunta y opciones
        quizContent.innerHTML = `
            <h2 class="neon-magenta">Pregunta ${index + 1}/${totalQuestions}:</h2>
            <h3 class="neon-cyan">${questionData.question}</h3>
            <div id="options-container">
                ${optionsHtml}
            </div>
        `;

        // 3. Añadir Listeners para seleccionar la respuesta
        document.querySelectorAll('.answer-option').forEach(optionElement => {
            optionElement.addEventListener('click', handleAnswerSelection);
        });

        // 4. Actualizar barra de progreso y botones
        updateProgressBar();
        updateNavigationButtons();

        quizContent.classList.add('fade-in');

    }, 10); 
}

/**
 * Maneja la selección de una respuesta.
 * @param {Event} event 
 */

function handleAnswerSelection(event) {
    const selectedOption = event.currentTarget;
    const questionId = parseInt(selectedOption.dataset.questionId);
    const value = parseInt(selectedOption.dataset.value);

    // 1. Marcar visualmente la opción seleccionada
    document.querySelectorAll('.answer-option').forEach(opt => opt.classList.remove('selected'));
    selectedOption.classList.add('selected');

    // 2. Guardar la respuesta
    answers[questionId] = value;
    saveProgress();

    // 3. Habilitar el botón Siguiente
    nextBtn.disabled = false;
    updateProgressBar();
}


// Actualiza la barra de progreso.

function updateProgressBar() {
    const answeredCount = Object.keys(answers).length;
    const progress = (answeredCount / totalQuestions) * 100;
    
    progressBarFill.style.width = `${progress}%`;
    progressBarText.textContent = `PROGRESO: ${answeredCount}/${totalQuestions} RESPUESTAS`;
}

// Actualiza la visibilidad y estado de los botones de navegación.

function updateNavigationButtons() {
    // Botón Anterior
    prevBtn.style.visibility = currentQuestionIndex > 0 ? 'visible' : 'hidden';
    prevBtn.disabled = currentQuestionIndex === 0;
    prevBtn.style.cursor = currentQuestionIndex === 0 ? 'not-allowed' : 'pointer';

    // Botón Siguiente
    const currentQuestionAnswered = answers[questions[currentQuestionIndex].id];
    nextBtn.disabled = !currentQuestionAnswered;
    
    // Texto del botón Siguiente
    if (currentQuestionIndex === totalQuestions - 1) {
        nextBtn.textContent = 'FINALIZAR QUIZ 🏆';
        nextBtn.style.background = '#ff00ff';
        nextBtn.style.borderColor = '#ff00ff';
        nextBtn.style.boxShadow = '0 0 10px #ff00ff';
    } else {
        nextBtn.textContent = 'CONTINUAR';
        nextBtn.style.background = '#5c24b8';
        nextBtn.style.borderColor = '#000000';
        nextBtn.style.boxShadow = 'none';
    }
}

// Navega a la siguiente pregunta.

function goToNextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        renderQuestion(currentQuestionIndex);
        saveProgress();
    } else if (currentQuestionIndex === totalQuestions - 1) {
        // Lógica de finalización
        // Aquí se enviarán las respuestas al backend PHP (futuro)
        alert('¡Quiz completado! Redirigiendo a resultados.');
        // Limpiar progreso al finalizar
        localStorage.removeItem(QUIZ_STATE_KEY);

        // 3. Redirigir a la página de inicio o a una página de resultados
        // Por ahora, volvemos a la landing page (index.html) para empezar de cero.
        window.location.href = './landingPage.html';
        
        // LÓGICA DE ENVÍO DE DATOS AL BACKEND (PHP):
        /*
        fetch('process_quiz.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(answers),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Resultados del backend:', data);
            // Redirigir a una página de resultados con el ID del resultado
            // window.location.href = 'results.html?id=' + data.resultId; 
        });
        */
    }
}


// Navega a la pregunta anterior.
 
function goToPrevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion(currentQuestionIndex);
        saveProgress();
    }
}

// 5. INICIALIZACIÓN Y LISTENERS

prevBtn.addEventListener('click', goToPrevQuestion);
nextBtn.addEventListener('click', goToNextQuestion);

// Función de inicio
document.addEventListener('DOMContentLoaded', loadProgress);