import Profile from "./components/Profile/Profile";
import img from "./components/Profile/componentes/Image/143474098.jpg";
import "./app.css";

export default function App() {
  return (
    <>
      <div id="allProfileContainer">
        <Profile
          image={img}
          title="Gabriel Albanez"
          conteudo="FullStack Developer"
          number="(83)98733-6639"
          email="gabrielalbanez2701@gmail.com"
          urlGithub="https://github.com/Albanezfxp"
          textGit="Github"
          urlLinkedin="https://www.linkedin.com/in/gabriel-albanez-801820262/"
          text="Linkedin"
        ></Profile>
      </div>
    </>
  );
}
