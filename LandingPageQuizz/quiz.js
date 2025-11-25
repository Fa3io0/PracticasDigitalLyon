// 1. DATA: Preguntas del Quiz (25 preguntas - ESTRUCTURA MODIFICADA)
const questions = [
    // Bloque 1: Estrategia & Objetivos (Preguntas 1-5)
    { id: 1, question: "¿Tu propuesta de valor cabe en una frase clara?", type: 'yesno', maxScore: 5, block: "Estrategia & Objetivos", options: [{ text: "Sí", value: 5 }, { text: "No", value: 1 }] },
    { id: 2, question: "¿Tu cliente ideal está claramente definido?", type: 'scale', maxScore: 5, block: "Estrategia & Objetivos", options: [{ text: "1 - Nada", value: 1 }, { text: "2", value: 2 }, { text: "3", value: 3 }, { text: "4", value: 4 }, { text: "5 - Totalmente", value: 5 }] },
    { id: 3, question: "¿Cuál es tu principal meta a 6 meses?", type: 'multiple', maxScore: 5, block: "Estrategia & Objetivos", options: [{ text: "Validar", value: 1 }, { text: "Crecer", value: 2 }, { text: "Monetizar", value: 4 }, { text: "Escalar", value: 5 }] },
    { id: 4, question: "¿Conoces a tus 3 competidores directos?", type: 'yesno', maxScore: 5, block: "Estrategia & Objetivos", options: [{ text: "Sí", value: 5 }, { text: "No", value: 1 }] },
    { id: 5, question: "¿Tienes métricas claras para medir éxito?", type: 'multiple', maxScore: 5, block: "Estrategia & Objetivos", options: [{ text: "Sí, definidas", value: 5 }, { text: "Parcialmente", value: 3 }, { text: "No, aún no", value: 1 }] },
    //Bloque 2: Modelo de Negocio (Preguntas 6-10)
    { id: 6, question: "¿Sabes exactamente cómo monetizarás tu producto?", type: 'scale', maxScore: 5, block: "Modelo de Negocio", options: [{ text: "1 - Nada", value: 1 }, { text: "2", value: 2 }, { text: "3", value: 3 }, { text: "4", value: 4 }, { text: "5 - Totalmente", value: 5 }] },
    { id: 7, question: "¿Has validado que los usuarios pagarían por tu solución?", type: 'multiple', maxScore: 5, block: "Modelo de Negocio", options: [{ text: "Sí, con ventas reales", value: 5 }, { text: "Sí, con interés/promesas", value: 3 }, { text: "No, es supuesto", value: 1 }] },
    { id: 8, question: "¿Tienes calculado tu costo de adquisición de cliente (CAC)?", type: 'yesno', maxScore: 5, block: "Modelo de Negocio", options: [{ text: "Sí", value: 5 }, { text: "No", value: 1 }] },
    { id: 9, question: "¿Conoces tu margen de beneficio por cliente?", type: 'scale', maxScore: 5, block: "Modelo de Negocio", options: [{ text: "1 - Nada", value: 1 }, { text: "2", value: 2 }, { text: "3", value: 3 }, { text: "4", value: 4 }, { text: "5 - Totalmente", value: 5 }] },
    { id: 10, question: "¿Tu modelo de ingresos es recurrente o único?", type: 'multiple', maxScore: 5, block: "Modelo de Negocio", options: [{ text: "Recurrente", value: 5 }, { text: "Mixto", value: 4 }, { text: "Único", value: 3 }, { text: "No definido", value: 1 }] },
    //// Bloque 3: Producto & Desarrollo (Preguntas 11-15)
    { id: 11, question: "¿Tienes un MVP funcional y probado por usuarios?", type: 'multiple', maxScore: 5, block: "Producto & Desarrollo", options: [{ text: "Sí, en uso", value: 5 }, { text: "Sí, sin validar", value: 4 }, { text: "En desarrollo", value: 3 }, { text: "Solo idea", value: 1 }] },
    { id: 12, question: "¿Tu producto resuelve un problema real y urgente?", type: 'scale', maxScore: 5, block: "Producto & Desarrollo", options: [{ text: "1 - Nunca", value: 1 }, { text: "2", value: 2 }, { text: "3", value: 3 }, { text: "4", value: 4 }, { text: "5 - Muy frecuentemente", value: 5 }] },
    { id: 13, question: "¿Has iterado el producto basándote en feedback real?", type: 'yesno', maxScore: 5, block: "Producto & Desarrollo", options: [{ text: "Sí", value: 5 }, { text: "No", value: 1 }] },
    { id: 14, question: "¿Tienes roadmap de producto para los próximos 3 meses?", type: 'scale', maxScore: 5, block: "Producto & Desarrollo", options: [{ text: "1 - Nada", value: 1 }, { text: "2", value: 2 }, { text: "3", value: 3 }, { text: "4", value: 4 }, { text: "5 - Totalmente", value: 5 }] },
    { id: 15, question: "¿Sabes cuál es tu diferenciador clave vs competencia?", type: 'yesno', maxScore: 5, block: "Producto & Desarrollo", options: [{ text: "Sí", value: 5 }, { text: "No", value: 1 }] },
    //// Bloque 4: Operaciones & Procesos (Preguntas 16-20)
    { id: 16, question: "¿Tienes documentados tus procesos clave?", type: 'scale', maxScore: 5, block: "Operaciones & Procesos", options: [{ text: "1 - Nada", value: 1 }, { text: "2", value: 2 }, { text: "3", value: 3 }, { text: "4", value: 4 }, { text: "5 - Totalmente", value: 5 }] },
    { id: 17, question: "¿Usas herramientas para gestionar tareas y proyectos?", type: 'multiple', maxScore: 5, block: "Operaciones & Procesos", options: [{ text: "Sí, sistemáticamente", value: 5 }, { text: "A veces", value: 3 }, { text: "No", value: 1 }] },
    { id: 18, question: "¿Mides tiempo y recursos en cada etapa de desarrollo?", type: 'yesno', maxScore: 5, block: "Operaciones & Procesos", options: [{ text: "Sí", value: 5 }, { text: "No", value: 1 }] },
    { id: 19, question: "¿Tienes un sistema para gestionar clientes/usuarios?", type: 'scale', maxScore: 5, block: "Operaciones & Procesos", options: [{ text: "1 - Nada", value: 1 }, { text: "2", value: 2 }, { text: "3", value: 3 }, { text: "4", value: 4 }, { text: "5 - Totalmente", value: 5 }] },
    { id: 20, question: "¿Tu equipo tiene roles y responsabilidades claras?", type: 'multiple', maxScore: 5, block: "Operaciones & Procesos", options: [{ text: "Sí, muy claras", value: 5 }, { text: "Parcialmente", value: 3 }, { text: "No", value: 1 }] },
    //// Bloque 5: Ventas & Marketing (Preguntas 21-25)
    { id: 21, question: "¿Tienes una estrategia de adquisición de usuarios?", type: 'scale', maxScore: 5, block: "Ventas & Marketing", options: [{ text: "1 - Ninguna", value: 1 }, { text: "2", value: 2 }, { text: "3", value: 3 }, { text: "4", value: 4 }, { text: "5 - Muy definida", value: 5 }] },
    { id: 22, question: "¿Generas leads o usuarios nuevos semanalmente?", type: 'multiple', maxScore: 5, block: "Ventas & Marketing", options: [{ text: "Sí, consistentemente", value: 5 }, { text: "A veces", value: 3 }, { text: "No", value: 1 }] },
    { id: 23, question: "¿Sabes qué canal de marketing funciona mejor para ti?", type: 'yesno', maxScore: 5, block: "Ventas & Marketing", options: [{ text: "Sí", value: 5 }, { text: "No", value: 1 }] },
    { id: 24, question: "¿Tienes un sistema de ventas o conversión definido?", type: 'scale', maxScore: 5, block: "Ventas & Marketing", options: [{ text: "1 - Nada", value: 1 }, { text: "2", value: 2 }, { text: "3", value: 3 }, { text: "4", value: 4 }, { text: "5 - Totalmente", value: 5 }] },
    { id: 25, question: "¿Mides tu tasa de conversión de leads a clientes?", type: 'yesno', maxScore: 5, block: "Ventas & Marketing", options: [{ text: "Sí", value: 5 }, { text: "No", value: 1 }] }
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
const totalQuestions = questions.length; 

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
        introSection.style.display = 'none'; 
        quizContainer.style.display = 'block'; 
        
        renderQuestion(currentQuestionIndex);
    } else {
        // Si no hay progreso o nombre, mostrar la introducción
        introSection.style.display = 'block';
        quizContainer.style.display = 'none'; 

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
        startQuizBtn.addEventListener('click', startQuiz); 
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
            <h3 class="questions-quizz">${questionData.question}</h3>
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
    { max: 20, level: "IDEA CONFUSA 😵‍💫", recommendations: ["Define tu Propuesta de Valor única (PVU).", "Identifica tu nicho de cliente exacto.", "No construyas nada aún, ¡solo habla con usuarios!"], ctaText: "Agenda tu mentoría gratuita", ctaUrl: "mentoria-booking-link.html" },
    { max: 40, level: "EN VALIDACIÓN 🔬", recommendations: ["Crea una Landing Page de prueba rápida.", "Lanza anuncios de bajo presupuesto para medir interés.", "Realiza entrevistas de problema (no de producto)."], ctaText: "Agenda tu mentoría gratuita", ctaUrl: "mentoria-booking-link.html" },
    { max: 60, level: "MVP LISTO 🏗️", recommendations: ["Lanza una versión mínima (MVP) del producto.", "Establece métricas de uso y conversión (ej: Tasa de Retención).", "Calcula el Costo de Adquisición de Clientes (CAC)."], ctaText: "Agenda tu mentoría gratuita", ctaUrl: "mentoria-booking-link.html" },
    { max: 80, level: "STARTUP EN TRACCIÓN 📈", recommendations: ["Optimiza tu proceso de ventas/conversión.", "Busca canales de adquisición escalables y rentables.", "Documenta procesos operativos para duplicar el crecimiento."], ctaText: "Agenda tu mentoría gratuita", ctaUrl: "mentoria-booking-link.html" },
    { max: 100, level: "STARTUP CRECIENDO 🔥", recommendations: ["Explora nuevos mercados o segmentos de cliente.", "Invierte en automatización y desarrollo de equipos.", "Prepara tu empresa para una ronda de inversión."], ctaText: "Agenda tu mentoría gratuita", ctaUrl: "mentoria-booking-link.html" },
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
        } else if (channel === 'gmail') {
            // Gmail usa 'su' para el asunto y 'body' para el cuerpo del mensaje
            shareUrl = `https://mail.google.com/mail/u/0/?hl=es#inbox?view=cm&fs=1&to=&su=${text}&body=${url}`;
        } else if (channel === 'x') {
            // X (Twitter) usa 'text' y 'url'
            shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        }

        // Abrir la ventana de compartir
        btn.onclick = (e) => { 
            e.preventDefault(); 
            window.open(shareUrl, '_blank', 'width=600,height=400'); 
        };
    });
}

/**
 * Calcula la puntuación máxima teórica del quiz sumando el maxScore de todas las preguntas.
 * @returns {number} La puntuación máxima.
 */
function calculateMaxTheoreticalScore() {
    const maxScore = questions.reduce((sum, question) => sum + (question.maxScore || 0), 0);
    return maxScore;
}

// ... (resto de funciones)

function calculateAndDisplayResults() {
    let rawScore = 0;
    
    // Suma las respuestas (SIN CAMBIOS)
    for (const questionId in answers) {
        rawScore += answers[questionId]; 
    }

    // AHORA CALCULAMOS EL MAX SCORE DINÁMICAMENTE
    const MAX_THEORETICAL_SCORE = calculateMaxTheoreticalScore(); 
    
    // Si no hay preguntas o el max score es cero, evitamos la división por cero
    if (MAX_THEORETICAL_SCORE === 0) {
        console.error("Error: Puntuación máxima teórica es cero.");
        let percentageScore = 0;
    } else {
        let percentageScore = Math.min(100, Math.round((rawScore / MAX_THEORETICAL_SCORE) * 100)); 
        totalScore = percentageScore; 
    }
}

/**
 * Calcula el puntaje total y el desglose de puntajes por cada bloque (área).
 * @returns {object} 
 */
function calculateDetailedResults() {
    let rawScore = 0;
    const MAX_THEORETICAL_SCORE = calculateMaxTheoreticalScore(); 

    // 1. Inicializar estructura de resultados por bloque
    const blockScores = questions.reduce((acc, q) => {
        if (!acc[q.block]) {
            acc[q.block] = { raw: 0, max: 0, percentage: 0 };
        }
        return acc;
    }, {});

    // 2. Sumar puntajes (Bruto y Máximo) por cada bloque
    questions.forEach(q => {
        const answerValue = answers[q.id] || 0; 

        // Sumar puntaje bruto (Usuario)
        blockScores[q.block].raw += answerValue;
        rawScore += answerValue;

        // Sumar puntaje máximo teórico
        blockScores[q.block].max += q.maxScore;
    });

    // 3. Calcular porcentaje por bloque
    for (const blockName in blockScores) {
        const block = blockScores[blockName];
        if (block.max > 0) {
            block.percentage = Math.min(100, Math.round((block.raw / block.max) * 100));
        } else {
            block.percentage = 0;
        }
    }

    // 4. Calcular porcentaje total
    const totalPercentage = (MAX_THEORETICAL_SCORE > 0) 
        ? Math.min(100, Math.round((rawScore / MAX_THEORETICAL_SCORE) * 100))
        : 0;
    
    return {
        totalScore: totalPercentage,
        blockScores: blockScores
    };
}

/**
 * Calcula y muestra los resultados finales del quiz.
 */

function calculateAndDisplayResults() {

    // 1. Calcular el score total y el desglose por áreas.
    const results = calculateDetailedResults(); 
    totalScore = results.totalScore; 
    const blockBreakdown = results.blockScores;

    let rawScore = 0;
    
    // Suma las respuestas (AJUSTA ESTA LÓGICA SI TUS PREGUNTAS NO SON TODAS IGUALES)
    for (const questionId in answers) {
        rawScore += answers[questionId]; 
    }

    // El puntaje máximo teórico para tus 5 preguntas de prueba (1, 2, 3, 4, 25) es 1+5+55+2+2 = 65
    // Usa el máximo teórico de TODAS tus 25 preguntas si ya las tienes definidas.
    const MAX_THEORETICAL_SCORE = 125; 
    
    let percentageScore = Math.min(100, Math.round((rawScore / MAX_THEORETICAL_SCORE) * 100));
    totalScore = percentageScore; 

    // Ocultar formulario de datos y mostrar resultados
    const resultsFormContent = document.getElementById('results-form-content');
    const resultsContent = document.getElementById('results-content'); 
    const resultsBreakdownContainer = document.getElementById('resultsBreakdown'); 
    
    resultsFormContent.style.display = 'none';
    resultsContent.style.display = 'block';

    // 2. Mostrar Desglose por Área
    let breakdownHtml = '<h3 class="neon-cyan" style="margin: 0px 0px 25px">DESGLOSE POR ÁREA</h3>';
    for (const blockName in blockBreakdown) {
        const percentage = blockBreakdown[blockName].percentage;
        breakdownHtml += `
            <div class="block-result">
                <p>${blockName}: <strong>${percentage}%</strong></p>
                <div class="progress-bar-area"><div style="width: ${percentage}%;"></div></div>
            </div>
        `;
    }

    if (resultsBreakdownContainer) {
        resultsBreakdownContainer.innerHTML = breakdownHtml;
    }

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
    const countryCodeElement = document.getElementById('countryCode');
    const phoneNumberElement = document.getElementById('phone');

    const name = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const countryCode = countryCodeElement.value.trim();
    const phoneNumber = phoneNumberElement.value.trim();

    const phoneFull = countryCode + phoneNumber;
    
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
        phone: phoneFull,
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
