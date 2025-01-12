import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      {/* Navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">Mi Portafolio</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Sobre mí
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Habilidades o Tecnologías
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#titulos">
                  Titulos y Certificaciones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#curriculum">
                  Curriculum
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*bg-primary*/}
      {/* Encabezado */}
      <header className="App-header text-white text-center py-5">
        <div className="container">
          <h1>¡Hola! Soy Jefernee Ruiz Garcia</h1>
          <p className="lead">
            Desarrollador de software | Ingeniero de Sistemas | Docente de
            Informática | Redes | Bases de Datos | Seguridad de la información
          </p>
        </div>
      </header>

      {/* Sobre mí */}
      <section id="about" className="bg-custom py-5">
        <div className="container">
          <h2 className="text-center">Sobre mí</h2>
          <p className="mt-4 text-center">
            Soy Jefernee Ruiz, Desarrollador de software con una gran pasión por
            la tecnología y el desarrollo web. He combinado mis estudios
            formales con un deseo constante de aprender nuevas herramientas y
            lenguajes. Mi experiencia se centra en el desarrollo web utilizando
            tecnologías como React, JavaScript, Bootstrap y Java además tengo
            también sólidos conocimientos en redes, bases de datos y
            ciberseguridad.
          </p>
        </div>
      </section>

      {/* Habilidades Técnicas */}
      <section id="skills" className="bg-custom py-5">
        <div className="container">
          <h2 className="text-center mb-4">Habilidades y Tecnologías</h2>
          {/* Primera fila */}
          <div className="row text-center mb-4">
            <div className="col-md-3">
              <div className="p-3 shadow-2x1 rounded border custom-style">
                <h4 className="mb-3">Lenguajes</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-code-slash"></i> Java
                  </li>
                  <li>
                    <i className="bi bi-code-slash"></i> Python
                  </li>
                  <li>
                    <i className="bi bi-code-slash"></i> VisualBasic
                  </li>
                  <li>
                    <i className="bi bi-code-slash"></i> C#
                  </li>
                  <li>
                    <i className="bi bi-code-slash"></i> JavaScript
                  </li>
                  <li>
                    <i className="bi bi-code-slash"></i> Prolog
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 shadow-2x1 rounded border custom-style">
                <h4 className="mb-3">Frameworks</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-stack"></i> React
                  </li>
                  <li>
                    <i className="bi bi-stack"></i> .NET
                  </li>
                  <li>
                    <i className="bi bi-stack"></i> Tailwind
                  </li>
                </ul>
                <h4 className="mt-4 mb-3">ORM</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-diagram-3"></i> Entity Framework
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 shadow-2x1 rounded border custom-style">
                <h4 className="mb-3">Entornos</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-window"></i> Visual Studio
                  </li>
                  <li>
                    <i className="bi bi-code"></i> Visual Studio Code
                  </li>
                  <li>
                    <i className="bi bi-diagram-2"></i> Apache NetBeans
                  </li>
                  <li>
                    <i className="bi bi-cpu"></i> Node.js
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 shadow-2x1 rounded border custom-style">
                <h4 className="mb-3">Desarrollo web</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-gear"></i> HTML5
                  </li>
                  <li>
                    <i className="bi bi-windows"></i> CSS
                  </li>
                  <li>
                    <i className="bi bi-keyboard"></i> JavaScript
                  </li>
                  <li>
                    <i className="bi bi-keyboard"></i> Bootstrap
                  </li>
                  <li>
                    <i className="bi bi-keyboard"></i> React
                  </li>
                  <li>
                    <i className="bi bi-keyboard"></i> Node.js
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Segunda fila */}
          <div className="row text-center mb-4">
            <div className="col-md-3">
              <div className="p-3 shadow-2x1 rounded border custom-style">
                <h4 className="mb-3">Ciberseguridad</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-shield-lock"></i> Kali Linux
                  </li>
                  <li>
                    <i className="bi bi-bug"></i> Wireshark
                  </li>
                  <li>
                    <i className="bi bi-network-wired"></i> Nmap
                  </li>
                  <li>
                    <i className="bi bi-network-wired"></i> Firewalls
                  </li>
                  <li>
                    <i className="bi bi-network-wired"></i> IDS/IPS
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 shadow-2x1 rounded border custom-style">
                <h4 className="mb-3">Redes</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-router"></i> Cisco Packet Tracer
                  </li>
                  <li>
                    <i className="bi bi-router"></i> VLAN
                  </li>
                  <li>
                    <i className="bi bi-geo"></i> Protocolos de Enrutamiento
                  </li>
                  <li>
                    <i className="bi bi-geo"></i> RIP, OSPF, BGP y EIGRP
                  </li>
                  <li>
                    <i className="bi bi-link-45deg"></i> Servicios de red
                  </li>
                  <li>
                    <i className="bi bi-link-45deg"></i> DNS, DHCP, VPN
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 shadow-2x1 rounded border custom-style">
                <h4 className="mb-3">Sistemas Operativos</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-shield-lock"></i> Linux
                  </li>
                  <li>
                    <i className="bi bi-bug"></i> Mac
                  </li>
                  <li>
                    <i className="bi bi-bug"></i> Windows
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 shadow-2x1 rounded border custom-style">
                <h4 className="mb-3">Idiomas</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-router"></i> Español Nativo
                  </li>
                  <li>
                    <i className="bi bi-geo"></i> Inglés B1
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tercer fila */}
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="p-3 shadow-2x1 rounded border custom-style">
                <h4 className="mb-3">Bases de datos</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-shield-lock"></i> SQL Server
                  </li>
                  <li>
                    <i className="bi bi-bug"></i> MySQL
                  </li>
                </ul>
                <h4 className="mt-4 mb-3">Servidores</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-diagram-3"></i> GlassFish
                  </li>
                  <li>
                    <i className="bi bi-diagram-3"></i> MariaDB
                  </li>
                  <li>
                    <i className="bi bi-diagram-3"></i> Apache Tomcat
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 shadow-2x1 rounded border custom-style">
                <h4 className="mb-3">Ofimática</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-router"></i> Word
                  </li>
                  <li>
                    <i className="bi bi-geo"></i> Excel Intermedio
                  </li>
                  <li>
                    <i className="bi bi-link-45deg"></i> PowerPoint
                  </li>
                  <li>
                    <i className="bi bi-link-45deg"></i> Outlook
                  </li>
                  <li>
                    <i className="bi bi-link-45deg"></i> Proyect
                  </li>
                  <li>
                    <i className="bi bi-link-45deg"></i> Visio
                  </li>
                  <li>
                    <i className="bi bi-link-45deg"></i> Teams
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 shadow-2x1 rounded border custom-style">
                <h4 className="mb-3">Arquitectura</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-gear"></i> Diseño en Capas
                  </li>
                  <li>
                    <i className="bi bi-windows"></i> Programación Orientada a
                    Objetos
                  </li>
                  <li>
                    <i className="bi bi-keyboard"></i> Cascada
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-3 shadow-2x1 rounded border custom-style">
                <h4 className="mb-3">Otras Habilidades</h4>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-gear"></i> Mecanografía
                  </li>
                  <li>
                    <i className="bi bi-windows"></i> Documentación de proyectos
                  </li>
                  <li>
                    <i className="bi bi-keyboard"></i> Draw.io
                  </li>
                  <li>
                    <i className="bi bi-keyboard"></i> jira
                  </li>
                  <li>
                    <i className="bi bi-keyboard"></i> Git
                  </li>
                  <li>
                    <i className="bi bi-keyboard"></i> Netlify
                  </li>
                  <li>
                    <i className="bi bi-keyboard"></i> Home by me
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Titulos */}
      <section id="titulos" className="bg-custom py-5">
        <div className="container">
          <h2 className="text-center mb-4">Títulos y Certificaciones</h2>
          <div className="row">
            {/* Tarjeta 1 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">
                    Bachillerato en Ingeniería de Sistemas
                  </h5>
                  <p className="card-text">
                    Universidad Internacional San Isidro Labrador (UISIL)
                    <br />
                    Fecha: 2022-2024
                  </p>
                  <span className="badge bg-primary">Título</span>
                </div>
              </div>
            </div>
            {/* Tarjeta 2 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Bachiller en Educación Media</h5>
                  <p className="card-text">
                    Colegio Técnico Profesional de Batán
                    <br />
                    Fecha: 2016-2021
                  </p>
                  <span className="badge bg-primary">Título</span>
                </div>
              </div>
            </div>
            {/* Tarjeta 3 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Técnico Medio en Contabilidad</h5>
                  <p className="card-text">
                    Colegio Técnico Profesional de Batán
                    <br />
                    Fecha: 2019-2021
                  </p>
                  <span className="badge bg-primary">Título</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Tarjeta 4 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Endpoint Security</h5>
                  <p className="card-text">
                    Instituto Nacional de Aprendizaje (INA)
                    <br />
                    Fecha: Noviembre 2024
                  </p>
                  <span className="badge bg-success">Certificación</span>
                </div>
              </div>
            </div>
            {/* Tarjeta 5 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">
                    Introducción a la Ciberseguridad
                  </h5>
                  <p className="card-text">
                    Cisco Networking Academy
                    <br />
                    Fecha: Agosto 2023
                  </p>
                  <span className="badge bg-success">Certificación</span>
                </div>
              </div>
            </div>
            {/* Tarjeta 6 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Taller de Excel Básico</h5>
                  <p className="card-text">
                    Universidad Internacional San Isidro Labrador (UISIL)
                    <br />
                    Fecha: Febrero 2024
                  </p>
                  <span className="badge bg-success">Certificación</span>
                </div>
              </div>
            </div>
            {/* Tarjeta 7 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Taller de Google Drive</h5>
                  <p className="card-text">
                    Universidad Internacional San Isidro Labrador (UISIL)
                    <br />
                    Fecha: Febrero 2024
                  </p>
                  <span className="badge bg-success">Certificación</span>
                </div>
              </div>
            </div>
            {/* Tarjeta 8 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Taller de Redes</h5>
                  <p className="card-text">
                    Universidad Internacional San Isidro Labrador (UISIL)
                    <br />
                    Fecha: Noviembre 2023
                  </p>
                  <span className="badge bg-success">Certificación</span>
                </div>
              </div>
            </div>
            {/* Tarjeta 9 */}
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Licenciatura en Docencia</h5>
                  <p className="card-text">
                    Universidad Internacional San Isidro Labrador (UISIL)
                    <br />
                    Fecha: Agosto 2024 En Curso
                  </p>
                  <span className="badge bg-primary">Título</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="projects" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center">Proyectos</h2>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Proyecto Clinica</h5>
                  <p className="card-text">
                    <p>Sistema de escritorio para gestión de clínica</p>
                    <p>
                      <strong>Tecnologías:</strong> C# y SQL Server.
                    </p>
                    <p>
                      <strong>Rol:</strong> Desarrollo de Front-end, Back-end e
                      integración de base de datos.
                    </p>
                  </p>
                  <a
                    href="https://github.com/Jefernee/Proyecto-Escritorio-Clinica-Ruos/tree/master"
                    className="btn btn-primary"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Portafolio Web jefernee</h5>
                  <p className="card-text">
                    <p>Portafolio personal</p>
                    <p>
                      <strong>Tecnologías:</strong> HTML, CSS, JavaScript,
                      React, Node.js, Bootstrap.
                    </p>
                    <p>
                      <strong>Descripción:</strong> Portafolio en línea
                      desplegado en Netlify, donde presento mi perfil
                      profesional y muestro mis proyectos de desarrollo web con
                      un diseño responsivo y funcional.
                    </p>
                  </p>
                  <a
                    href="https://github.com/Jefernee/Portafolio-Jefernee/tree/master"
                    className="btn btn-primary"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Proyecto Sala de Juegos Ruiz</h5>
                  <p className="card-text">
                    <p>
                      Sistema de gestión y analisis de datos para sala de juegos
                    </p>
                    <p>
                      <strong>Tecnologías:</strong> Java, MySQL, Bootstrap,
                      JavaScript, HTML, CSS.
                    </p>
                    <p>
                      <strong>Rol:</strong> Desarrollo de Front-end, Back-end e
                      integración de base de datos.
                    </p>
                  </p>
                  <a
                    href="https://github.com/Jefernee/Proyecto-de-Sala-de-juegos"
                    className="btn btn-primary"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Página Web Sala de Juegos</h5>
                  <p className="card-text">
                    <p>
                      Página web para la gestión de una sala de juegos,
                      permitiendo la visualización y administración de los
                      juegos disponibles.
                    </p>
                    <p>
                      <strong>Tecnologías:</strong> React, JavaScript,
                      Bootstrap, HTML, CSS.
                    </p>
                    <p>
                      <strong>Rol:</strong> Desarrollo del Front-end utilizando
                      React, integración de componentes interactivos y diseño
                      responsivo.
                    </p>
                  </p>
                  <a
                    href="https://salajuegosruiz.netlify.app/"
                    className="btn btn-primary"
                  >
                    Ver Página Web
                  </a>
                  <a
                    href="https://github.com/Jefernee/Proyecto-de-Sala-de-juegos"
                    className="btn btn-secondary ml-2"
                  >
                    Ver código en GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección para el currículum */}
      <section id="curriculum" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center">Descargar mi Currículum</h2>
          <p className="mt-4 text-center">
            Si deseas conocer más sobre mi formación y experiencia profesional,
            puedes descargar mi currículum actualizado haciendo clic en el
            siguiente botón.
          </p>
          <div className="d-flex justify-content-center">
            <a
              href="https://drive.google.com/file/d/1sdOtlj2Frpp3xPH6f_98i035abbhZPCN/view?usp=drive_link" // Actualiza con el link correcto
              download="Curriculum-Jefernee.pdf"
              className="btn btn-success btn-lg"
            >
              Descargar mi Currículum
            </a>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center">Contacto</h2>
          <p className="text-center mt-3">
            Puedes contactarme en{" "}
            <a href="mailto:jefernee50@gmail.com">jefernee50@gmail.com</a>.
          </p>
          <p className="text-center mt-3">
            Conéctate conmigo en redes sociales:
          </p>
          <div className="d-flex justify-content-center mt-3">
            <a
              href="https://www.linkedin.com/in/jefernee-ruiz-garcia-217700243/?originalSubdomain=cr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary me-2"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Jefernee"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark me-2"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/jefernee/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-danger"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2025 Mi Portafolio - Todos los derechos reservados</p>
        <p>Proyecto realizado por <strong>Jefernee Ruiz</strong></p>
        <p>Contacto: <a href="mailto:jefernee50@gmail.com">jefernee@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default App;
