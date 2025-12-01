import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import FAQ from '../components/FAQ';
import whyUsImg from '../assets/img/why-us.png';

const Home = () => {
  const handleGetStarted = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="main">
      <Hero onGetStarted={handleGetStarted} />

      <Section
        id="about"
        title="Sobre la seguridad cibernética"
        className="about"
      >
        <div className="row gy-4">
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p>
              Con esta página conocerás cómo manejar de una manera segura tus interacciones en la web, desde problemáticas comunes hasta medidas de prevención y de corrección. Algunas de las cosas que aprenderás son:
            </p>
            <ul>
              <li><i className="bi bi-check2-circle"></i> <span>¿Qué es un ciberataque?</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>Maneras de prevenir una vulneración</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>Maneras de corregir una vulneración</span></li>
            </ul>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>
              El ciberataque es conocido como el intento de robo, acceso o daño hacia los datos que contenga un usuario en su sistema. Este puede ser por civiles, grupos delictivos u organizaciones con fines de lucro. Se caracteriza por usar todo lo extraído en minar crypto y realizar problemas de largo o corto plazo, si entendemos este tema y comprendemos que tan extenso puede llegar a ser, los cuidados de tu navegación serán más sencillos de entender y de realizar.
            </p>
          </div>
        </div>
      </Section>


      <section id="why-us" className="section why-us light-background" data-builder="section">
        <div className="container-fluid">
          <div className="row gy-4">
            <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">
              <div className="content px-xl-5" data-aos="fade-up" data-aos-delay="100">
                <h3>
                  <span>Tu seguridad digital es importante, con un virus </span>
                  <strong>no todo está perdido.</strong>
                </h3>
                <p>
                  En los siguientes enlistados te dejamos acciones para un mejor y más seguro uso del internet.
                </p>
              </div>

              <div className="faq-container px-xl-5" data-aos="fade-up" data-aos-delay="200">
                <FAQ
                  title="Maneras de prevenir una vulneración."
                  defaultOpen={true}
                >
                  <ol>
                    <li><b>Actualizar</b> el dispositivo seguidamente.</li>
                    <li>Usar un sistema que <b>privatice</b> la red (VPN).</li>
                    <li>Evitar descargar archivos o aplicaciones <b>que no sean verificadas</b> en una tienda oficial.</li>
                    <li>Tener contraseñas seguras y contar con <b>verificación</b> de dos pasos.</li>
                    <li>No conectarse a <b>redes públicas</b> o sin verificar.</li>
                    <li>Al momento de recibir mensajes del banco u otras instituciones, es mejor <b>preguntar directamente en sitios verificados</b> por ellos y no caer en enlaces peligrosos.</li>
                    <li>Monitorear el <b>consumo general</b> de tu sistema.</li>
                  </ol>
                </FAQ>

                <FAQ title="Maneras de corregir una vulneración.">
                  <ol>
                    <li>Restaurar los respaldos con los <b>datos seguros</b> cuando el virus ya no se encuentre en el dispositivo.</li>
                    <li>Reestablecer de fábrica el dispositivo si es que el virus es <b>muy fuerte.</b></li>
                    <li>Si el virus se encuentra en Google, ve y borra los <b>datos de navegación.</b></li>
                    <li>Si el virus se alojó en una carpeta y esta <b>está al alcance</b> es mejor eliminarla.</li>
                    <li>Si lograste <b>eliminar</b> el virus o si una compañía grande ha sido <b>vulnerada</b>, lo ideal sería cambiar todas las contraseñas.</li>
                    <li>Desconecta el dispositivo de la red para prevenir la <b>propagación del ataque</b> a otros equipos o redes.</li>
                    <li>Revisa tus archivos si fuiste atacado. Cualquier anormalidad debe ser <b>eliminada</b> del dispositivo.</li>
                  </ol>
                </FAQ>
              </div>
            </div>

            <div className="col-lg-5 order-1 order-lg-2 why-us-img">
              <img
                src={whyUsImg}
                className="img-fluid"
                alt="Ilustración sobre seguridad digital"
                data-aos="zoom-in"
                data-aos-delay="100"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

