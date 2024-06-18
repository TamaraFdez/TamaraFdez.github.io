// import { useState } from 'react'
function Estudios() {
  return (
    <section id="estudios">
      <h3>Estudios</h3>
      <ul>
        <li>Ninguna :C</li>
      </ul>
    </section>
  );
}
function Proyectos() {
  return (
    <section id="proyectos">
      <h3>Proyectos</h3>
      <ul>
        <li></li>
      </ul>
    </section>
  );
}
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#sobre-mi">Sobre mi</a>
          </li>
          <li>
            <a href="#estudios">Estudios</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="./assets/"></a>
          </li>
        </ul>
      </nav>
      <div className="showcase">
        <p>Hola, Mi nombre es:</p>
        <h1>
          <span className="purple">T</span>amara
        </h1>
        <h2>Fernandez Viturro</h2>
        <p>Desarrolladora Web y Artista</p>
        <button>CV</button>
      </div>
    </header>
  );
}
function Main() {
  return (
    <main>
      <section id="sobre-mi">
        <h3>Sobre mi</h3>
        <p>
          Soy una apasionada del mundo{" "}
          <span className="purple">creativo y digital</span>. Desde siempre he
          encontrado mi inspiración en la intersección entre{" "}
          <span className="purple">el arte y la tecnología</span>, y he dedicado
          mi carrera a explorar cómo estas dos fuerzas pueden fusionarse para
          crear <span className="purple">experiencias impactantes.</span>
        </p>
      </section>
      <Estudios />
      <Proyectos />
    </main>
  );
}

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
