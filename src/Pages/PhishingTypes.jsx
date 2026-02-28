import React, { useState } from 'react';
import Card from '../components/Card';

import smishingImg from '../assets/img/Smishing.png';
import vishingImg from '../assets/img/Vishing.png';
import pharmingImg from '../assets/img/Pharming.png';
import quishingImg from '../assets/img/Quishing.png';
import whalingImg from '../assets/img/Whaling.png';
import anglerPhishingImg from '../assets/img/AnglerPhishing.png';
import popUpPhishingImg from '../assets/img/PopUpPhishing.png';
import clonePhishingImg from '../assets/img/ClonePhishing.png';
import spearPhishingImg from '../assets/img/SpearPhishing.png';

const PhishingTypes = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [answer, setAnswer] = useState(null);

    const phishingData = [
        {
            title: 'SPEAR PHISHING',
            image: spearPhishingImg,
            description: 'Este tipo de phishing se dirige hacia un grupo o tipo específico de personas, como el administrador de los sistemas de una empresa, se busca un beneficio de datos o dinero de estos lugares.',
            scenario: 'Recibes un correo que parece ser del departamento de TI de tu empresa, mencionando tu puesto actual y pidiendo que ingreses a un enlace de "Actualización de Políticas" para conservar tu acceso. La URL empieza con "it-update-tuempresa.es".',
            question: '¿Qué haces ante la solicitud urgente de "TI"?',
            correctAnswer: 'phishing',
            explanation: 'Es un ataque de Spear Phishing. Aunque incluyan tu nombre y puesto (datos que pudieron sacar de LinkedIn), la urgencia y el enlace extraño buscan robar tus credenciales. Comunícate con TI por un canal oficial (teléfono o chat interno) para validar.'
        },
        {
            title: 'SMISHING',
            image: smishingImg,
            description: 'Utiliza mensajes de texto para engañar a las personas y obtener información confidencial, como contraseñas, datos bancarios o información personal. Los estafadores se hacen pasar por organizaciones para que la víctima haga clic en enlaces maliciosos y proporcione sus datos.',
            scenario: 'Acabas de intentar iniciar sesión en tu cuenta bancaria desde un navegador nuevo. Segundos después, te llega un SMS de tu banco con un código de 6 dígitos de verificación, sin ningún enlace adicional.',
            question: '¿Cómo procedes con este mensaje de texto?',
            correctAnswer: 'legitimo',
            explanation: 'Es legítimo. Solicitaste el acceso tú mismo. El código es una medida de seguridad (autenticación de dos pasos) y, crucialmente, NO contiene enlaces externos que te pidan ingresar datos.'
        },
        {
            title: 'VISHING',
            image: vishingImg,
            description: 'Este tipo usa llamadas fraudulentas para engañar a las personas y que revelen información confidencial. Los atacantes se hacen pasar por organizaciones o personas de confianza para generar urgencia, miedo o sorpresa y obtener así datos personales y bancarios.',
            scenario: 'Recibes una llamada de alguien que dice ser de prevención de fraudes de tu banco. Te informa sobre un cargo sospechoso y te pide que le dictes los números de tu tarjeta para "verificar tu identidad y cancelar la compra".',
            question: '¿Qué haces ante esta llamada telefónica?',
            correctAnswer: 'phishing',
            explanation: 'Es un ataque de Vishing. El banco nunca te pedirá que dictes los números de tu tarjeta, contraseñas o PIN por teléfono. Cuelga inmediatamente y llama tú al banco usando el número al reverso de tu tarjeta.'
        },
        {
            title: 'PHARMING',
            image: pharmingImg,
            description: 'Es un tipo de fraude en internet donde te engañan para que visites una página web falsa sin que te des cuenta. Un ataque de pharming desvía tu conexión para llevarte a una copia idéntica del sitio, controlada por delincuentes. El objetivo es robar tu información personal cuando intentas iniciar sesión en la página falsa, haciendo que creas que estás en el sitio web real que querías visitar.',
            scenario: 'Escribes correctamente la URL de tu banco en tu red wifi doméstica. La página carga rápidamente, ves el candado de seguridad (HTTPS) y la dirección web está bien escrita. Además, la página tiene todos tus datos pre-guardados en el dispositivo habitual.',
            question: '¿Deberías ingresar tus credenciales en este sitio?',
            correctAnswer: 'legitimo',
            explanation: 'Es legítimo. Estás en una red segura, comprobaste el candado HTTPS y la URL es la correcta sin variaciones raras. Siempre es un buen hábito revisar la URL, pero si todo está en orden, puedes proceder con seguridad.'
        },
        {
            title: 'QUISHING',
            image: quishingImg,
            description: 'Es un tipo de ataque que utiliza códigos QR maliciosos para engañar a las personas y robar su información personal y/o financiera, o para instalar software malicioso en sus dispositivos. Estos QR redirigen al usuario a un sitio web fraudulento, suelen imitar a entidades, como bancos, servicios de entrega, restaurantes o empresas conocidas, para ganarse la confianza de la víctima.',
            scenario: 'Encuentras un código QR pegado como una pegatina brillante por encima del menú original de un restaurante turístico. Al escanearlo te dirige a una página web desconocida pidiendo un "registro rápido de tu cuenta de Google" antes de ver el menú.',
            question: '¿Escaneas e ingresas tu información?',
            correctAnswer: 'phishing',
            explanation: 'Es un ataque de Quishing. Los ciberdelincuentes suelen pegar sus propios códigos QR encima de los legítimos en lugares públicos. Un restaurante nunca te pedirá credenciales de Google solo para ver el menú.'
        },
        {
            title: 'WHALING',
            image: whalingImg,
            description: 'Esta estafa por correo electrónico, conocida como whaling, se dirige a los altos ejecutivos de una empresa, como el jefe o el director general. Los estafadores se aprovechan de su autoridad para ordenarles, con urgencia y secretismo, que realicen acciones críticas como autorizar transferencias de grandes cantidades de dinero o enviar información confidencial de la empresa, evitando que la víctima sospeche.',
            scenario: 'El CEO de la compañía recibe un correo muy sofisticado supuestamente del bufete de abogados de la empresa solicitando una transferencia confidencial e inmediata para poder cerrar un trato "sin que los accionistas se enteren todavía".',
            question: '¿Se debe realizar la transferencia urgente?',
            correctAnswer: 'phishing',
            explanation: 'Es un ataque de Whaling. Está dirigido específicamente a altos cargos para autorizar operaciones esquivando los controles de seguridad apelando al "secretismo". Siempre se deben seguir protocolos formales de verificación empresarial.'
        },
        {
            title: 'ANGLER PHISHING',
            image: anglerPhishingImg,
            description: 'Este fraude ocurre cuando delincuentes, usando perfiles falsos que imitan a una empresa en redes sociales, roban tu información personal y dinero. Para lograrlo, buscan quejas de clientes y se hacen pasar por atención al cliente para ofrecerte ayuda, enviándote a sitios web falsos a través de enlaces maliciosos.',
            scenario: 'Contactas al soporte al cliente utilizando la sección de ayuda dentro de la aplicación móvil oficial de tu aerolínea preferida (logueado en tu cuenta). El agente que te asiste te pide el código de reserva de tu vuelo (PNR) para revisar el caso, pero ninguna contraseña.',
            question: '¿Proporcionas el código para resolver el problema?',
            correctAnswer: 'legitimo',
            explanation: 'Es legítimo. Estás utilizando el canal de soporte integrado de la app oficial. Compartir tu código de reserva (no una contraseña, tarjeta o pin) con el canal oficial está bien y es necesario para que revisen tu caso.'
        },
        {
            title: 'POP-UP PHISHING',
            image: popUpPhishingImg,
            description: 'Esta técnica de estafa utiliza ventanas emergentes falsas que simulan ser avisos de seguridad o premios para engañar al usuario. El objetivo es lograr que la persona haga clic en ellas, lo cual la dirige a sitios web maliciosos, descarga programas dañinos o le roba información personal y financiera.',
            scenario: 'Mientras navegas por un blog de recetas, aparece una ventana emergente intermitente con muchos colores que dice: "¡Felicidades, eres el visitante 1,000,000! Haz clic aquí y pon tus datos de tarjeta para pagar solo el envío de tu nuevo iPhone."',
            question: '¿Haces clic para reclamar el premio?',
            correctAnswer: 'phishing',
            explanation: 'Es un clásico ataque de Pop-Up Phishing informales (Scam). Apela a la codicia exagerada regalando un dispositivo muy costoso para forzarte a pagar falsamente un "envío". Ciérralo de inmediato y evita esas páginas web.'
        },
        {
            title: 'CLONE PHISHING',
            image: clonePhishingImg,
            description: 'Es un tipo de ciberataque en el que los delincuentes copian un correo electrónico real que la víctima ha recibido anteriormente. Reemplazan los enlaces o archivos adjuntos originales por otros que contienen contenido peligroso. El propósito es engañar a la persona para que haga clic en un enlace falso o descargue un archivo con virus, aprovechando la confianza que ya tiene en el remitente original para robarle datos personales o infectar su dispositivo.',
            scenario: 'Recibes un correo de tu proveedor de internet que es idéntico a una factura anterior. Sin embargo, este nuevo correo dice: "Estimado cliente, hubo un error técnico, por favor verifique urgentemente la nueva factura adjunta" y trae un archivo comprimido .ZIP con contraseña.',
            question: '¿Descargas y abres la nueva factura en .zip?',
            correctAnswer: 'phishing',
            explanation: 'Es un ataque de Clone Phishing. Es una copia de un correo legítimo que ha sido alterado. El remitente lo utiliza para enviar un virus encubierto (motivo por el cual cifran un .ZIP, para evadir antivirus de correo). Ante alertas urgentes o archivos .zip sospechosos, duda.'
        }
    ];

    const handleCardClick = (index) => {
        setSelectedIndex(index);
        setAnswer(null);
    };

    const handleAnswer = (selectedOption) => {
        setAnswer(selectedOption);
    };

    const handleBack = () => {
        setSelectedIndex(null);
        setAnswer(null);
    };

    if (selectedIndex !== null) {
        const item = phishingData[selectedIndex];

        return (
            <div className="container section-title" style={{ marginTop: '100px' }}>
                <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', textAlign: 'left' }}>
                    <div style={{ flex: '1 1 50%', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                        <div style={{ padding: '30px' }}>
                            <h2 style={{ marginBottom: '20px', textAlign: 'left' }}>{item.title}</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', textAlign: 'left' }}>{item.description}</p>
                        </div>
                    </div>

                    <div style={{ flex: '1 1 50%', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <h3 style={{ marginBottom: '20px', color: '#333' }}>Escenario</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '30px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '10px', borderLeft: '4px solid #0056b3', width: '100%' }}>
                            {item.scenario}
                        </p>

                        <h4 style={{ marginBottom: '20px' }}>{item.question}</h4>

                        <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', width: '100%' }}>
                            <button
                                onClick={() => handleAnswer('phishing')}
                                style={{
                                    flex: 1,
                                    padding: '12px 20px',
                                    borderRadius: '8px',
                                    border: answer === 'phishing' ? '2px solid #dc3545' : '1px solid #ddd',
                                    backgroundColor: answer === 'phishing' ? '#f8d7da' : '#fff',
                                    color: answer === 'phishing' ? '#721c24' : '#333',
                                    fontWeight: 'bold',
                                    cursor: answer !== null ? 'default' : 'pointer',
                                    transition: 'all 0.2s'
                                }}
                                disabled={answer !== null}
                            >
                                Es phishing
                            </button>
                            <button
                                onClick={() => handleAnswer('legitimo')}
                                style={{
                                    flex: 1,
                                    padding: '12px 20px',
                                    borderRadius: '8px',
                                    border: answer === 'legitimo' ? '2px solid #28a745' : '1px solid #ddd',
                                    backgroundColor: answer === 'legitimo' ? '#d4edda' : '#fff',
                                    color: answer === 'legitimo' ? '#155724' : '#333',
                                    fontWeight: 'bold',
                                    cursor: answer !== null ? 'default' : 'pointer',
                                    transition: 'all 0.2s'
                                }}
                                disabled={answer !== null}
                            >
                                Es legítimo
                            </button>
                        </div>

                        {answer !== null && (
                            <div style={{
                                padding: '20px',
                                borderRadius: '10px',
                                backgroundColor: answer === item.correctAnswer ? '#d4edda' : '#f8d7da',
                                color: answer === item.correctAnswer ? '#155724' : '#721c24',
                                marginBottom: '20px',
                                width: '100%'
                            }}>
                                <h4 style={{ marginBottom: '10px' }}>
                                    {answer === item.correctAnswer ? '¡Correcto!' : 'Incorrecto'}
                                </h4>
                                <p style={{ margin: 0, textAlign: 'left' }}>{item.explanation}</p>
                            </div>
                        )}

                        <button
                            onClick={handleBack}
                            style={{
                                padding: '10px 25px',
                                backgroundColor: '#6c757d',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            Volver a los tipos de phishing
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container section-title" style={{ marginTop: '100px' }}>
            <h2>Tipos de Phishing</h2>
            <p>Conoce las diferentes tácticas que utilizan los ciberdelincuentes.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                {phishingData.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        image={item.image}
                        description={item.description}
                        onClick={() => handleCardClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhishingTypes;
