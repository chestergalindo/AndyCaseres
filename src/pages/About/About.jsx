import SocialNet from "../../components/SocialNet";
import "./About.scss";

const About = () => {
  return (
    <main className="About">
      <div className="about-inf">
        <h1 className="left-h1">SOBRE MI</h1>
        <div className="left">
          <img
            className="img"
            src="https://i.ibb.co/RyJHmxR/andy.png"
            alt="Andy"
          ></img>
          <div className="cont-left"></div>
        </div>

        <div className="right">
          <div className="cont-right">
            <h3>
              Soy <span>Andy!</span>
            </h3>
            <p>
              🖥️ Soy un desarrollador web autodidacta orientado al Front-End.
            </p>
            <span>
              🔎 Actualmente me encuentro en búsquedas de posiciones Front End
              Junior
            </span>
            <p>
              ⚡ Me caracterizo por ser una persona dedicada, proactiva,
              responsable y sólida para cumplir objetivos. Con ganas de poder
              brindar mis conocimientos en un entorno laboral, y poder
              desarrollarme en un equipo.
            </p>
          </div>
          <SocialNet />
        </div>
      </div>
    </main>
  );
};

export default About;
