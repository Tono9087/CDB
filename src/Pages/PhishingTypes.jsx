import React from 'react';
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
    const phishingData = [
        {
            title: 'SPEAR PHISHING',
            image: spearPhishingImg,
            description: 'Este tipo de phishing se dirige hacia un grupo o tipo específico de personas, como el administrador de los sistemas de una empresa, se busca un beneficio de datos o dinero de estos lugares.'
        },
        {
            title: 'SMISHING',
            image: smishingImg,
            description: 'Utiliza mensajes de texto para engañar a las personas y obtener información confidencial, como contraseñas, datos bancarios o información personal. Los estafadores se hacen pasar por organizaciones para que la víctima haga clic en enlaces maliciosos y proporcione sus datos.'
        },
        {
            title: 'VISHING',
            image: vishingImg,
            description: 'Este tipo usa llamadas fraudulentas para engañar a las personas y que revelen información confidencial. Los atacantes se hacen pasar por organizaciones o personas de confianza para generar urgencia, miedo o sorpresa y obtener así datos personales y bancarios.'
        },
        {
            title: 'PHARMING',
            image: pharmingImg,
            description: 'Es un tipo de fraude en internet donde te engañan para que visites una página web falsa sin que te des cuenta. Un ataque de pharming desvía tu conexión para llevarte a una copia idéntica del sitio, controlada por delincuentes. El objetivo es robar tu información personal cuando intentas iniciar sesión en la página falsa, haciendo que creas que estás en el sitio web real que querías visitar.'
        },
        {
            title: 'QUISHING',
            image: quishingImg,
            description: 'Es un tipo de ataque que utiliza códigos QR maliciosos para engañar a las personas y robar su información personal y/o financiera, o para instalar software malicioso en sus dispositivos. Estos QR redirigen al usuario a un sitio web fraudulento, suelen imitar a entidades, como bancos, servicios de entrega, restaurantes o empresas conocidas, para ganarse la confianza de la víctima.'
        },
        {
            title: 'WHALING',
            image: whalingImg,
            description: 'Esta estafa por correo electrónico, conocida como whaling, se dirige a los altos ejecutivos de una empresa, como el jefe o el director general. Los estafadores se aprovechan de su autoridad para ordenarles, con urgencia y secretismo, que realicen acciones críticas como autorizar transferencias de grandes cantidades de dinero o enviar información confidencial de la empresa, evitando que la víctima sospeche.'
        },
        {
            title: 'ANGLER PHISHING',
            image: anglerPhishingImg,
            description: 'Este fraude ocurre cuando delincuentes, usando perfiles falsos que imitan a una empresa en redes sociales, roban tu información personal y dinero. Para lograrlo, buscan quejas de clientes y se hacen pasar por atención al cliente para ofrecerte ayuda, enviándote a sitios web falsos a través de enlaces maliciosos.'
        },
        {
            title: 'POP-UP PHISHING',
            image: popUpPhishingImg,
            description: 'Esta técnica de estafa utiliza ventanas emergentes falsas que simulan ser avisos de seguridad o premios para engañar al usuario. El objetivo es lograr que la persona haga clic en ellas, lo cual la dirige a sitios web maliciosos, descarga programas dañinos o le roba información personal y financiera.'
        },
        {
            title: 'CLONE PHISHING',
            image: clonePhishingImg,
            description: 'Es un tipo de ciberataque en el que los delincuentes copian un correo electrónico real que la víctima ha recibido anteriormente. Reemplazan los enlaces o archivos adjuntos originales por otros que contienen contenido peligroso. El propósito es engañar a la persona para que haga clic en un enlace falso o descargue un archivo con virus, aprovechando la confianza que ya tiene en el remitente original para robarle datos personales o infectar su dispositivo.'
        }
    ];
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
                    />
                ))}
            </div>
        </div>
    );
};

export default PhishingTypes;
