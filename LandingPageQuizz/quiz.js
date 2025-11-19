// 1. DATA: Preguntas del Quiz (25 preguntas - ESTRUCTURA CORREGIDA)
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
//     {
//         id: 5,
//         question: "¿Tienes métricas claras para medir éxito?",
//         type: 'multiple',
//         options: [
//             { text: "Sí, definidas", value: 1 },
//             { text: "Parcialmente", value: 2 },
//             { text: "No, aún no", value: 3}
//         ],
//     },
//     {

//         // Bloque 2: Modelo de Negocio
//         id: 6,
//         question: "¿Sabes exactamente cómo monetizarás tu producto?",
//         type: 'scale', 
//         options: [
//             { text: "1 - Nada", value: 1 },
//             { text: "2", value: 2 },
//             { text: "3", value: 3},
//             { text: "4", value: 4 },
//             { text: "5 - Totalmente", value: 5 }
//         ],
//     },
//     {
//         id: 7,
//         question: "¿Has validado que los usuarios pagarían por tu solución?",
//         type: 'multiple',
//         options: [
//             { text: "Sí, con ventas reales", value: 1 },
//             { text: "Sí, con interés/promesas", value: 2 },
//             { text: "No, es supuesto", value: 3}
//         ],
//     },
//     {
//         id: 8,
//         question: "¿Tienes calculado tu costo de adquisición de cliente (CAC)?",
//         type: 'yesno',
//         options: [
//             { text: "Sí", value: 1 },
//             { text: "No", value: 2 }
//         ],
//     },
//     {
//         id: 9,
//         question: "¿Conoces tu margen de beneficio por cliente?",
//         type: 'scale', 
//         options: [
//             { text: "1 - Nada", value: 1 },
//             { text: "2", value: 2 },
//             { text: "3", value: 3},
//             { text: "4", value: 4 },
//             { text: "5 - Totalmente", value: 5 }
//         ],
//     },
//     {
//         id: 10,
//         question: "¿Tu modelo de ingresos es recurrente o único?",
//         type: 'multiple',
//         options: [
//             { text: "Recurrente", value: 1 },
//             { text: "Mixto", value: 2 },
//             { text: "Único", value: 3},
//             { text: "No definido", value: 4 }
//         ],
//     },
//     {
//         // Bloque 3: Producto & Desarrollo
//         id: 11,
//         question: "¿Tienes un MVP funcional y probado por usuarios?",
//         type: 'multiple',
//         options: [
//             { text: "Sí, en uso", value: 1 },
//             { text: "Sí, sin validar", value: 2 },
//             { text: "En desarrollo", value: 3},
//             { text: "Solo idea", value: 4 }
//         ],
//     },
//     {
//         id: 12,        
//         question: "¿Tu producto resuelve un problema real y urgente?",
//         type: 'scale', 
//         options: [
//             { text: "1 - Nunca", value: 1 },
//             { text: "2", value: 2 },
//             { text: "3", value: 3},
//             { text: "4", value: 4 },
//             { text: "5 - Muy frecuentemente", value: 5 }
//         ],
//     },
//     {
//         id: 13,
//         question: "¿Has iterado el producto basándote en feedback real?",
//         type: 'yesno',
//         options: [
//             { text: "Sí", value: 1 },
//             { text: "No", value: 2 }
//         ],
//     },
//     {
//         id: 14,
//         question: "¿Tienes roadmap de producto para los próximos 3 meses?",
//         type: 'scale', 
//         options: [
//             { text: "1 - Nada", value: 1 },
//             { text: "2", value: 2 },
//             { text: "3", value: 3},
//             { text: "4", value: 4 },
//             { text: "5 - Totalmente", value: 5 }
//         ],
//     },
//     {
//         id: 15,
//         question: "¿Sabes cuál es tu diferenciador clave vs competencia?",
//         type: 'yesno',
//         options: [
//             { text: "Sí", value: 1 },
//             { text: "No", value: 2 }
//         ],
//     },
//     {
//         // Bloque 4: Operaciones & Procesos
//         id: 16,
//         question: "¿Tienes documentados tus procesos clave?",
//         type: 'scale', 
//         options: [
//             { text: "1 - Nada", value: 1 },
//             { text: "2", value: 2 },
//             { text: "3", value: 3},
//             { text: "4", value: 4 },
//             { text: "5 - Totalmente", value: 5 }
//         ],
//     },
//     {
//         id: 17,
//         question: "¿Usas herramientas para gestionar tareas y proyectos?",
//         type: 'multiple',
//         options: [
//             { text: "Sí, sistemáticamente", value: 1 },
//             { text: "A veces", value: 2 },
//             { text: "No", value: 3}
//         ],
//     },
//     {
//         id: 18,
//         question: "¿Mides tiempo y recursos en cada etapa de desarrollo?",
//         type: 'yesno',
//         options: [
//             { text: "Sí", value: 1 },
//             { text: "No", value: 2 }
//         ],
//     },
//     {
//         id: 19,
//         question: "¿Tienes un sistema para gestionar clientes/usuarios?",
//         type: 'scale', 
//         options: [
//             { text: "1 - Nada", value: 1 },
//             { text: "2", value: 2 },
//             { text: "3", value: 3},
//             { text: "4", value: 4 },
//             { text: "5 - Totalmente", value: 5 }
//         ],
//     },
//     {
//         id: 20,
//         question: "¿Tu equipo tiene roles y responsabilidades claras?",
//         type: 'multiple',
//         options: [
//             { text: "Sí, muy claras", value: 1 },
//             { text: "Parcialmente", value: 2 },
//             { text: "No", value: 3 }
//         ],
//     },
//     {
//         // Bloque 5: Ventas & Marketing
//         id: 21,
//         question: "¿Tienes una estrategia de adquisición de usuarios?",
//         type: 'scale', 
//         options: [
//             { text: "1 - Ninguna", value: 1 },
//             { text: "2", value: 2 },
//             { text: "3", value: 3},
//             { text: "4", value: 4 },
//             { text: "5 - Muy definida", value: 5 }
//         ],
//     },
//     {
//         id: 22,
//         question: "¿Generas leads o usuarios nuevos semanalmente?",
//         type: 'multiple',
//         options: [
//             { text: "Sí, consistentemente", value: 1 },
//             { text: "A veces", value: 2 },
//             { text: "No", value: 3}
//         ],
//     },
//     {
//         id: 23,
//         question: "¿Sabes qué canal de marketing funciona mejor para ti?",
//         type: 'yesno',
//         options: [
//             { text: "Sí", value: 1 },
//             { text: "No", value: 2 }
//         ],
//     },
//     {
//         id: 24,
//         question: "¿Tienes un sistema de ventas o conversión definido?",
//         type: 'scale',
//         options: [
//             { text: "1 - Nada", value: 1 },
//             { text: "2", value: 2 },
//             { text: "3", value: 3},
//             { text: "4", value: 4 },
//             { text: "5 - Totalmente", value: 5 }
//         ]
//     },
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

// 2. ESTADO DEL QUIZ Y KEYS
const QUIZ_STATE_KEY = 'quizProgress';
const IDEA_NAME_KEY = 'ideaName'; // CAMBIO: Nueva clave para guardar el nombre de la idea
let currentQuestionIndex = 0;
let answers = {}; 

// 3. ELEMENTOS DEL DOM
const introSection = document.getElementById('quiz-intro'); 
const quizContainer = document.getElementById('quiz-container'); 
const ideaNameInput = document.getElementById('ideaName'); 
const startQuizBtn = document.getElementById('startQuizBtn'); 

// Elementos existentes
const quizContent = document.getElementById('quiz-content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBarFill = document.getElementById('progressBarFill');
const progressBarText = document.getElementById('progressBarText');
const totalQuestions = questions.length; // Ahora es 25

// Mas elementos

const resultsFormContent = document.getElementById('results-form-content'); // Nueva página del formulario
const quizPage = document.getElementById('quiz-page'); // Contenedor principal del quiz
const resultsForm = document.getElementById('resultsForm'); // El formulario en sí
const ideaNameDisplayInput = document.getElementById('ideaNameDisplay'); // Input deshabilitado
const fullNameInput = document.getElementById('fullName'); // Input de nombre
const emailInput = document.getElementById('email'); // Input de email

// 4. FUNCIONES DE LÓGICA

/**
 * Carga el progreso guardado y decide si mostrar la intro o el quiz.
 */
function loadProgress() {
    const savedState = localStorage.getItem(QUIZ_STATE_KEY);
    const ideaName = localStorage.getItem(IDEA_NAME_KEY); // CAMBIO: Cargar el nombre de la idea

    if (savedState && ideaName) {
        // Si hay progreso y nombre guardados, continuar con el quiz
        const state = JSON.parse(savedState);
        answers = state.answers;
        
        let firstUnansweredIndex = questions.findIndex(q => !answers[q.id]);
        currentQuestionIndex = (firstUnansweredIndex === -1) ? totalQuestions - 1 : firstUnansweredIndex;
        
        // Mostrar el quiz y ocultar la intro
        introSection.style.display = 'none'; // CAMBIO: Ocultar intro
        quizContainer.style.display = 'block'; // CAMBIO: Mostrar quiz
        
        renderQuestion(currentQuestionIndex);
    } else {
        // Si no hay progreso o nombre, mostrar la introducción
        introSection.style.display = 'block'; // CAMBIO: Mostrar intro
        quizContainer.style.display = 'none'; // CAMBIO: Ocultar quiz

        // Habilitar/deshabilitar botón si el campo de nombre se llena
        ideaNameInput.addEventListener('input', () => {
            startQuizBtn.disabled = ideaNameInput.value.trim() === '';
        });

        // Cargar nombre si existe (para el caso de reanudar el input)
        if (ideaName) {
            ideaNameInput.value = ideaName;
            startQuizBtn.disabled = false;
        }

        // Listener para el botón de inicio de la intro
        startQuizBtn.addEventListener('click', startQuiz); // CAMBIO: Asignar función startQuiz
    }
}

/**
 * CAMBIO: Nueva función para iniciar el quiz desde la pantalla de bienvenida.
 */
function startQuiz() {
    const ideaName = ideaNameInput.value.trim();
    if (ideaName) {
        // 1. Guardar el nombre del proyecto
        localStorage.setItem(IDEA_NAME_KEY, ideaName);
        
        // 2. Transicionar la pantalla
        introSection.style.display = 'none';
        quizContainer.style.display = 'block';
        
        // 3. Empezar con la primera pregunta
        currentQuestionIndex = 0;
        renderQuestion(currentQuestionIndex);
        saveProgress();
    }
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
        nextBtn.textContent = 'CONTINUAR ▶'; 
        nextBtn.style.background = '#5c24b8';
        nextBtn.style.borderColor = '#000000';
        nextBtn.style.boxShadow = 'none';
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

// Navega a la siguiente pregunta.

function goToNextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        renderQuestion(currentQuestionIndex);
        saveProgress();
    } else if (currentQuestionIndex === totalQuestions - 1) {
        // Lógica de finalización: MOSTRAR FORMULARIO DE RESULTADOS
        console.log("¡ÚLTIMA PREGUNTA! Intentando mostrar el formulario...");
        
        // Ocultar el quiz y mostrar el formulario
        quizContainer.style.display = 'none';
        resultsFormContent.style.display = 'block';

        // Llenar el campo 'Idea/Proyecto' con el nombre guardado
        const ideaName = localStorage.getItem(IDEA_NAME_KEY) || 'Mi Proyecto Secreto';
        ideaNameDisplayInput.value = ideaName;
        
        // Deshabilitar el botón Siguiente/Finalizar
        nextBtn.disabled = true; 
    }
}

// 5. INICIALIZACIÓN Y LISTENERS

prevBtn.addEventListener('click', goToPrevQuestion);
nextBtn.addEventListener('click', goToNextQuestion);

// Función de inicio
document.addEventListener('DOMContentLoaded', loadProgress); 



// Calcular y mostrar resultados (debes definir esta función según tu lógica)

// Variable global 
let totalScore = 0; 

// Definición de Rangos y Recomendaciones (AJUSTA LOS VALORES DEL QUIZ)
const MATURITY_RANGES = [
    { max: 20, level: "IDEA CONFUSA 😵‍💫", recommendations: ["Define tu Propuesta de Valor única (PVU).", "Identifica tu nicho de cliente exacto.", "No construyas nada aún, ¡solo habla con usuarios!"], ctaText: "Descarga la guía gratuita 📘.", ctaUrl: "guide-url.html" },
    { max: 40, level: "EN VALIDACIÓN 🔬", recommendations: ["Crea una Landing Page de prueba rápida.", "Lanza anuncios de bajo presupuesto para medir interés.", "Realiza entrevistas de problema (no de producto)."], ctaText: "Descarga la guía gratuita 📘.", ctaUrl: "guide-url.html" },
    { max: 60, level: "MVP LISTO 🏗️", recommendations: ["Lanza una versión mínima (MVP) del producto.", "Establece métricas de uso y conversión (ej: Tasa de Retención).", "Calcula el Costo de Adquisición de Clientes (CAC)."], ctaText: "Agenda tu mentoría gratuita 🚀.", ctaUrl: "mentoria-booking-link.html" },
    { max: 80, level: "STARTUP EN TRACCIÓN 📈", recommendations: ["Optimiza tu proceso de ventas/conversión.", "Busca canales de adquisición escalables y rentables.", "Documenta procesos operativos para duplicar el crecimiento."], ctaText: "Agenda tu mentoría gratuita 🚀.", ctaUrl: "mentoria-booking-link.html" },
    { max: 100, level: "STARTUP CRECIENDO 🔥", recommendations: ["Explora nuevos mercados o segmentos de cliente.", "Invierte en automatización y desarrollo de equipos.", "Prepara tu empresa para una ronda de inversión."], ctaText: "Agenda tu mentoría gratuita 🚀.", ctaUrl: "mentoria-booking-link.html" },
];

/**
 * Configura los botones de compartir en WhatsApp, LinkedIn y X (Twitter).
 * Genera el texto del mensaje con el nivel de madurez del usuario.
 * @param {string} level - El nivel de madurez de la idea (ej: "STARTUP CRECIENDO 🔥").
 */
function setupSocialSharing(level) {
    const url = encodeURIComponent(window.location.href);
    // El texto que se compartirá
    const text = encodeURIComponent(`¡Mi idea de negocio está en nivel "${level}" según el Diagnóstico de Madurez para Startups! Descubre el nivel de tu proyecto aquí:`);

    document.querySelectorAll('.btn-share').forEach(btn => {
        const channel = btn.dataset.channel;
        let shareUrl = '';

        if (channel === 'whatsapp') {
            // WhatsApp usa 'text' para el mensaje
            shareUrl = `https://wa.me/?text=${text} ${url}`;
        } else if (channel === 'linkedin') {
            // LinkedIn usa 'url' y 'title' (que será el texto)
            shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;
        } else if (channel === 'x') {
            // X (Twitter) usa 'text' y 'url'
            shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        }

        // Abrir la ventana de compartir
        btn.onclick = (e) => { 
            e.preventDefault(); // Evita que si es un enlace, haga la acción por defecto
            window.open(shareUrl, '_blank', 'width=600,height=400'); 
        };
    });
}

function calculateAndDisplayResults() {
    // ESTA FUNCIÓN ASUME QUE YA TIENES LAS RESPUESTAS EN LA VARIABLE GLOBAL 'answers'
    let rawScore = 0;
    
    // Suma las respuestas (AJUSTA ESTA LÓGICA SI TUS PREGUNTAS NO SON TODAS IGUALES)
    for (const questionId in answers) {
        rawScore += answers[questionId]; 
    }

    // El puntaje máximo teórico para tus 5 preguntas de prueba (1, 2, 3, 4, 25) es 1+5+55+2+2 = 65
    // Usa el máximo teórico de TODAS tus 25 preguntas si ya las tienes definidas.
    const MAX_THEORETICAL_SCORE = 65; 
    
    let percentageScore = Math.min(100, Math.round((rawScore / MAX_THEORETICAL_SCORE) * 100));
    totalScore = percentageScore; 

    // Ocultar formulario de datos y mostrar resultados
    const resultsFormContent = document.getElementById('results-form-content');
    const resultsContent = document.getElementById('results-content'); // Asegúrate de tener este ID en el HTML
    
    resultsFormContent.style.display = 'none';
    resultsContent.style.display = 'block';

    // 1. Determinar Nivel y Recomendaciones
    const result = MATURITY_RANGES.find(range => totalScore <= range.max);
    
    // 2. Actualizar el DOM con el puntaje
    document.getElementById('scoreValue').textContent = `${totalScore}/100`;
    document.getElementById('maturityLevel').textContent = result.level;

    // 3. Mostrar Recomendaciones
    const recList = document.getElementById('recommendationsList');
    recList.innerHTML = result.recommendations.map(rec => `<li>${rec}</li>`).join('');

    // 4. Configurar CTA Dinámico
    const mainCtaBtn = document.getElementById('mainCtaBtn');
    mainCtaBtn.textContent = result.ctaText;
    mainCtaBtn.onclick = () => { window.location.href = result.ctaUrl; };

    // 5. Configurar Botones de Compartir
    setupSocialSharing(result.level);
    
    // Limpiar progreso y datos 
    localStorage.removeItem(QUIZ_STATE_KEY);
    localStorage.removeItem(IDEA_NAME_KEY);
}

/**
 * Valida el email y simula el envío de datos.
 */
/**
 * Valida el email, recoge los datos del formulario y envía la solicitud
 * AJAX (fetch) al servidor PHP.
 */
function handleResultsSubmission(event) {
    event.preventDefault(); 
    // 1. Recoger datos de los inputs del formulario
    const name = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const ideaName = ideaNameDisplayInput.value;
    
    // Validar Email (función que ya tienes definida)
    if (!validateEmail(email)) {
        alert('🚨 ERROR: Por favor, introduce un correo electrónico válido.');
        return;
    }

    // Deshabilitar botón para evitar envíos dobles
    const submitBtn = document.getElementById('submitResultsBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'PROCESANDO DATA...';

    // 2. Recolectar datos del quiz (las respuestas que ya están en la variable global 'answers')
    const rawData = {
        name: name,
        email: email,
        ideaName: ideaName,
        answers: answers 
    };

    // 3. ENVIAR DATOS AL SERVIDOR (PHP)
    fetch('submit_data.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(rawData),
    })
    .then(response => {
        if (!response.ok) {
            console.error('Error de red/servidor:', response.status);
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.status === 'success') {
            alert('¡Diagnóstico enviado! Se mostrarán tus resultados.');
            calculateAndDisplayResults(); 
        } else {
            alert(`Error del servidor: ${data.message || 'No se pudo procesar la solicitud.'}`);
            submitBtn.disabled = false;
            submitBtn.textContent = 'RECIBIR DIAGNÓSTICO (GRATIS)';
        }
    })
    .catch(error => {
        console.error('Error de comunicación:', error);
        alert('🚨 ERROR de conexión. Por favor, revisa la consola para más detalles.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'RECIBIR DIAGNÓSTICO (GRATIS)';
    });
}

/**
 * Función de Validación de Email
 */
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// 4. LISTENERS DEL FORMULARIO
resultsForm.addEventListener('submit', handleResultsSubmission);
