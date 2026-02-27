import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const scenarios = [
    {
        id: 1,
        type: 'email',
        label: 'Correo electrónico',
        icon: 'bi-envelope-fill',
        from: 'soporte@banc0-segur0.com',
        subject: 'Actividad sospechosa en su cuenta',
        body: 'Estimado cliente, hemos detectado actividad inusual en su cuenta bancaria. Para evitar el bloqueo permanente, verifique su identidad haciendo clic en el siguiente enlace dentro de las próximas 2 horas:\n\nhttps://banc0-segur0.com/verificar-cuenta\n\nSi no responde a tiempo, su cuenta será suspendida de forma irreversible.\n\nAtentamente, Departamento de Seguridad',
        isPhishing: true,
        redFlags: [
            'El dominio usa ceros en lugar de letras ("banc0-segur0" en vez de "banco-seguro")',
            'Crea urgencia extrema con amenaza de bloqueo irreversible',
            'Solicita verificar identidad a través de un enlace externo',
            'Los bancos legítimos nunca piden datos sensibles por correo electrónico'
        ]
    },
    {
        id: 2,
        type: 'sms',
        label: 'Mensaje de texto (SMS)',
        icon: 'bi-chat-dots-fill',
        from: '+52 800 123 4567',
        subject: '',
        body: 'CORREOS DE MÉXICO: Su paquete #MX-29471 no pudo ser entregado. Pague $45.00 MXN de reenvío aquí: https://correos-mx.tracking-info.com/pago',
        isPhishing: true,
        redFlags: [
            'El enlace no es del dominio oficial de Correos de México',
            'Solicita un pago a través de un enlace sospechoso',
            'Usa un subdominio engañoso (correos-mx.tracking-info.com)',
            'Los servicios de paquetería legítimos no cobran mediante enlaces SMS'
        ]
    },
    {
        id: 3,
        type: 'email',
        label: 'Correo electrónico',
        icon: 'bi-envelope-fill',
        from: 'noreply@github.com',
        subject: 'Su suscripción ha sido renovada',
        body: 'Hola,\n\nLe informamos que su plan GitHub Pro ha sido renovado exitosamente.\n\nFecha de renovación: 26 de febrero de 2026\nMonto: $4.00 USD/mes\n\nPuede revisar los detalles de su facturación desde su perfil en github.com/settings/billing.\n\nGracias por usar GitHub.\n\n— El equipo de GitHub',
        isPhishing: false,
        redFlags: [
            'Este correo es legítimo: proviene de un dominio oficial (@github.com)',
            'No solicita hacer clic en enlaces sospechosos',
            'No pide información personal ni contraseñas',
            'Redirige al sitio oficial para revisar detalles'
        ]
    },
    {
        id: 4,
        type: 'popup',
        label: 'Ventana emergente',
        icon: 'bi-window-x',
        from: 'sistema-alerta.com',
        subject: '⚠️ ¡VIRUS DETECTADO!',
        body: '¡ALERTA DE SEGURIDAD CRÍTICA!\n\nSu dispositivo ha sido infectado con 3 virus peligrosos.\n\nSus datos bancarios, fotos y contraseñas están en riesgo INMEDIATO.\n\n[ESCANEAR AHORA] [DESCARGAR PROTECCIÓN]\n\nSi cierra esta ventana, su dispositivo será formateado automáticamente.',
        isPhishing: true,
        redFlags: [
            'Usa lenguaje alarmista y urgente para causar pánico',
            'Las alertas legítimas de antivirus NO aparecen en el navegador',
            'Amenaza con formatear el dispositivo si se cierra (falso)',
            'Intenta que descargues software malicioso'
        ]
    },
    {
        id: 5,
        type: 'email',
        label: 'Correo electrónico',
        icon: 'bi-envelope-fill',
        from: 'director.general@empresa-xyz.com',
        subject: 'URGENTE - Transferencia confidencial',
        body: 'Hola,\n\nNecesito que realices una transferencia urgente de $15,000 USD a la siguiente cuenta. Es un asunto confidencial y no puede esperar.\n\nNo lo comentes con nadie del equipo.\n\nCuenta: 4820-7391-5528\nBanco: Internacional\n\nConfírmame cuando esté hecho.\n\nSaludos,\nDirector General',
        isPhishing: true,
        redFlags: [
            'Solicita una transferencia urgente y confidencial (patrón clásico de whaling)',
            'Pide no comunicarlo con otros miembros del equipo',
            'No proporciona contexto sobre el propósito de la transferencia',
            'Los directores legítimos no piden transferencias por correo sin verificación'
        ]
    }
];

const Simulacro = ({ setPage }) => {
    const [phase, setPhase] = useState('intro');
    const [currentScenario, setCurrentScenario] = useState(0);
    const [answers, setAnswers] = useState({});

    const handleAnswer = (scenarioId, answer) => {
        setAnswers((prev) => ({ ...prev, [scenarioId]: answer }));
    };

    const handleNext = () => {
        if (currentScenario < scenarios.length - 1) {
            setCurrentScenario(currentScenario + 1);
        } else {
            setPhase('reveal');
        }
    };

    const handlePrevious = () => {
        if (currentScenario > 0) {
            setCurrentScenario(currentScenario - 1);
        }
    };

    const handleRestart = () => {
        setPhase('intro');
        setCurrentScenario(0);
        setAnswers({});
    };

    const score = scenarios.filter(
        (s) => answers[s.id] === s.isPhishing
    ).length;

    const progress = ((currentScenario + 1) / scenarios.length) * 100;

    // ─── INTRO ───
    if (phase === 'intro') {
        return (
            <main className="main">
                <Section
                    id="simulacro-intro"
                    title="Simulacro de Phishing"
                    subtitle="Pon a prueba tu capacidad para detectar intentos de phishing"
                    className="about"
                >
                    <div className="row justify-content-center" data-aos="fade-up">
                        <div className="col-lg-8">
                            <div className="card shadow-sm">
                                <div className="card-body p-4 text-center">
                                    <i className="bi bi-shield-lock-fill text-primary" style={{ fontSize: '3rem' }}></i>
                                    <h3 className="mt-3 mb-3">¿Cómo funciona?</h3>
                                    <p className="mb-4">
                                        Te presentaremos <strong>5 escenarios</strong> simulados: correos electrónicos,
                                        mensajes de texto y ventanas emergentes. Tu tarea es identificar si cada uno es
                                        un <strong>intento de phishing</strong> o un <strong>mensaje legítimo</strong>.
                                    </p>
                                    <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: '450px' }}>
                                        <li className="mb-2">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                                            No se recopilan datos personales
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                                            Todos los escenarios son ficticios
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                                            Recibirás retroalimentación al finalizar
                                        </li>
                                    </ul>
                                    <div className="mt-4">
                                        <Button onClick={() => setPhase('simulation')} variant="primary">
                                            Comenzar simulacro
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
        );
    }

    // ─── SIMULATION ───
    if (phase === 'simulation') {
        const scenario = scenarios[currentScenario];
        const answered = answers[scenario.id] !== undefined;

        return (
            <main className="main">
                <Section
                    id="simulacro-sim"
                    title="Simulacro de Phishing"
                    subtitle={`Escenario ${currentScenario + 1} de ${scenarios.length}`}
                    className="about"
                >
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            {/* Progress Bar */}
                            <div className="mb-4" data-aos="fade-up">
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Escenario {currentScenario + 1} de {scenarios.length}</span>
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

                            {/* Scenario Card */}
                            <div className="card shadow-sm mb-4" data-aos="fade-up" data-aos-delay="100">
                                <div className="card-header d-flex align-items-center gap-2 bg-light">
                                    <i className={`bi ${scenario.icon} text-primary`}></i>
                                    <span className="fw-semibold">{scenario.label}</span>
                                </div>
                                <div className="card-body p-4">
                                    <div className="mb-3">
                                        <small className="text-muted">De:</small>{' '}
                                        <span className="fw-semibold">{scenario.from}</span>
                                    </div>
                                    {scenario.subject && (
                                        <div className="mb-3">
                                            <small className="text-muted">Asunto:</small>{' '}
                                            <span className="fw-semibold">{scenario.subject}</span>
                                        </div>
                                    )}
                                    <hr />
                                    <div style={{ whiteSpace: 'pre-line', lineHeight: '1.7' }}>
                                        {scenario.body}
                                    </div>
                                </div>
                            </div>

                            {/* Answer Buttons */}
                            <div className="d-flex gap-3 justify-content-center mb-4" data-aos="fade-up" data-aos-delay="200">
                                <button
                                    type="button"
                                    className={`btn btn-lg ${answers[scenario.id] === true
                                            ? 'btn-danger'
                                            : 'btn-outline-danger'
                                        }`}
                                    onClick={() => handleAnswer(scenario.id, true)}
                                >
                                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                    Es phishing
                                </button>
                                <button
                                    type="button"
                                    className={`btn btn-lg ${answers[scenario.id] === false
                                            ? 'btn-success'
                                            : 'btn-outline-success'
                                        }`}
                                    onClick={() => handleAnswer(scenario.id, false)}
                                >
                                    <i className="bi bi-check-circle-fill me-2"></i>
                                    Es legítimo
                                </button>
                            </div>

                            {/* Navigation */}
                            <div className="d-flex justify-content-between" data-aos="fade-up" data-aos-delay="300">
                                <Button
                                    onClick={handlePrevious}
                                    variant="secondary"
                                    disabled={currentScenario === 0}
                                >
                                    <i className="bi bi-arrow-left me-2"></i>
                                    Anterior
                                </Button>
                                <Button
                                    onClick={handleNext}
                                    variant="primary"
                                    disabled={!answered}
                                >
                                    {currentScenario === scenarios.length - 1 ? (
                                        <>
                                            Ver resultados
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
    }

    // ─── REVEAL ───
    const percentage = Math.round((score / scenarios.length) * 100);

    return (
        <main className="main">
            <Section
                id="simulacro-results"
                title="Resultados del Simulacro"
                className="about"
            >
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {/* Score summary */}
                        <div className="text-center mb-5" data-aos="fade-up">
                            <h2 className="display-4 text-primary">{score} / {scenarios.length}</h2>
                            <p className="lead">Puntuación: {percentage}%</p>
                            <div className="mt-3">
                                {percentage >= 80 ? (
                                    <p className="text-success fs-5">
                                        <i className="bi bi-check-circle-fill me-2"></i>
                                        ¡Excelente! Tienes un gran ojo para detectar phishing.
                                    </p>
                                ) : percentage >= 60 ? (
                                    <p className="text-warning fs-5">
                                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                        Buen intento, pero hay margen de mejora. Revisa las señales de alerta.
                                    </p>
                                ) : (
                                    <p className="text-danger fs-5">
                                        <i className="bi bi-x-circle-fill me-2"></i>
                                        Te recomendamos estudiar las señales de alerta de cada escenario.
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Detailed breakdown */}
                        {scenarios.map((scenario, index) => {
                            const userAnswer = answers[scenario.id];
                            const isCorrect = userAnswer === scenario.isPhishing;

                            return (
                                <div
                                    key={scenario.id}
                                    className={`card mb-3 border-start border-4 ${isCorrect ? 'border-success' : 'border-danger'
                                        }`}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <h5 className="card-title mb-0">
                                                <i className={`bi ${scenario.icon} me-2`}></i>
                                                Escenario {index + 1}: {scenario.label}
                                            </h5>
                                            <span className={`badge ${isCorrect ? 'bg-success' : 'bg-danger'}`}>
                                                {isCorrect ? 'Correcto' : 'Incorrecto'}
                                            </span>
                                        </div>
                                        <p className="mb-2">
                                            <strong>Veredicto:</strong>{' '}
                                            {scenario.isPhishing ? (
                                                <span className="text-danger">
                                                    <i className="bi bi-exclamation-triangle-fill me-1"></i> Phishing
                                                </span>
                                            ) : (
                                                <span className="text-success">
                                                    <i className="bi bi-check-circle-fill me-1"></i> Legítimo
                                                </span>
                                            )}
                                        </p>
                                        <p className="fw-semibold mb-1">Señales clave:</p>
                                        <ul className="mb-0">
                                            {scenario.redFlags.map((flag, i) => (
                                                <li key={i}>{flag}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Action buttons */}
                        <div className="d-flex gap-3 justify-content-center mt-4" data-aos="fade-up">
                            <Button onClick={handleRestart} variant="primary">
                                Reintentar simulacro
                            </Button>
                            <Button onClick={() => setPage('Home')} variant="secondary">
                                Volver al inicio
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
};

export default Simulacro;
