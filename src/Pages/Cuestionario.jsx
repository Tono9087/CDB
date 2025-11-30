import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

/**
 * Página de Cuestionario - Quiz interactivo sobre ciberseguridad
 * @param {Function} setPage - Función para cambiar de página
 */
const Cuestionario = ({ setPage }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: '¿Qué es un ciberataque?',
      options: [
        'Un intento de robo, acceso o daño hacia los datos de un usuario',
        'Un programa antivirus',
        'Una red privada virtual',
        'Un sistema de seguridad física'
      ],
      correct: 0
    },
    {
      id: 2,
      question: '¿Cuál es una manera efectiva de prevenir vulneraciones?',
      options: [
        'Usar contraseñas débiles',
        'Conectarse a redes públicas sin verificar',
        'Actualizar el dispositivo seguidamente',
        'Descargar aplicaciones de sitios no verificados'
      ],
      correct: 2
    },
    {
      id: 3,
      question: '¿Qué debes hacer si detectas un virus en tu dispositivo?',
      options: [
        'Ignorarlo y continuar usando el dispositivo normalmente',
        'Desconectar el dispositivo de la red y buscar ayuda',
        'Compartir archivos con otros dispositivos',
        'Conectarte a más redes públicas'
      ],
      correct: 1
    },
    {
      id: 4,
      question: '¿Qué significa VPN?',
      options: [
        'Virtual Private Network (Red Privada Virtual)',
        'Very Protected Network',
        'Virus Prevention Network',
        'Virtual Public Network'
      ],
      correct: 0
    },
    {
      id: 5,
      question: '¿Cuándo deberías cambiar tus contraseñas?',
      options: [
        'Nunca, las contraseñas son permanentes',
        'Solo cuando las olvides',
        'Después de eliminar un virus o si una compañía ha sido vulnerada',
        'Cada hora'
      ],
      correct: 2
    },
    {
      id: 6,
      question: '¿Qué caracteriza a un ciberataque?',
      options: [
        'Solo afecta a empresas grandes',
        'Puede ser realizado por civiles, grupos delictivos u organizaciones',
        'Solo ocurre en computadoras de escritorio',
        'No causa daños reales'
      ],
      correct: 1
    }
  ];

  const handleAnswer = (questionId, answerIndex) => {
    setAnswers({
      ...answers,
      [questionId]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <main className="main">
        <Section 
          id="cuestionario-results" 
          title="Resultados del Cuestionario"
          className="about"
        >
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center" data-aos="fade-up">
                <h3 className="mb-4">¡Has completado el cuestionario!</h3>
                <div className="mb-4">
                  <h2 className="display-4 text-primary">{score} / {questions.length}</h2>
                  <p className="lead">Puntuación: {percentage}%</p>
                </div>
                <div className="mb-4">
                  {percentage >= 80 ? (
                    <p className="text-success fs-5">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      ¡Excelente! Tienes un buen conocimiento sobre ciberseguridad.
                    </p>
                  ) : percentage >= 60 ? (
                    <p className="text-warning fs-5">
                      <i className="bi bi-exclamation-triangle-fill me-2"></i>
                      Buen trabajo, pero hay espacio para mejorar. Revisa el contenido de la página.
                    </p>
                  ) : (
                    <p className="text-danger fs-5">
                      <i className="bi bi-x-circle-fill me-2"></i>
                      Te recomendamos revisar el contenido de la página para mejorar tu conocimiento.
                    </p>
                  )}
                </div>
                <div className="d-flex gap-3 justify-content-center">
                  <Button onClick={handleRestart} variant="primary">
                    Reintentar
                  </Button>
                  <Button 
                    onClick={() => {
                      if (setPage) {
                        setPage('Home');
                      } else {
                        window.location.href = '#hero';
                      }
                    }} 
                    variant="secondary"
                  >
                    Volver al inicio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
    );
  }

  return (
    <main className="main">
      <Section 
        id="cuestionario" 
        title="Cuestionario de Ciberseguridad"
        subtitle="Pon a prueba tus conocimientos sobre seguridad digital"
        className="about"
      >
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Progress Bar */}
            <div className="mb-4" data-aos="fade-up">
              <div className="d-flex justify-content-between mb-2">
                <span>Pregunta {currentQuestion + 1} de {questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="progress" style={{ height: '10px' }}>
                <div 
                  className="progress-bar bg-primary" 
                  role="progressbar" 
                  style={{ width: `${progress}%` }}
                  aria-valuenow={progress} 
                  aria-valuemin="0" 
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            {/* Question Card */}
            <div className="card shadow-sm mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card-body p-4">
                <h4 className="card-title mb-4">{currentQ.question}</h4>
                <div className="list-group">
                  {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`list-group-item list-group-item-action ${
                        answers[currentQ.id] === index ? 'active' : ''
                      }`}
                      onClick={() => handleAnswer(currentQ.id, index)}
                    >
                      <div className="d-flex align-items-center">
                        <span className="me-3">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        <span>{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-between" data-aos="fade-up" data-aos-delay="200">
              <Button 
                onClick={handlePrevious} 
                variant="secondary"
                disabled={currentQuestion === 0}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Anterior
              </Button>
              <Button 
                onClick={handleNext} 
                variant="primary"
                disabled={answers[currentQ.id] === undefined}
              >
                {currentQuestion === questions.length - 1 ? (
                  <>
                    Finalizar
                    <i className="bi bi-check-lg ms-2"></i>
                  </>
                ) : (
                  <>
                    Siguiente
                    <i className="bi bi-arrow-right ms-2"></i>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Cuestionario;

