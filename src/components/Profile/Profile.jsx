import AboutUs from "./componentes/AboutUs/AboutUs";
import Button from "./componentes/Button/Button";
import Email from "./componentes/Email/Email";
import Image from "./componentes/Image/Image";
import Title from "./componentes/Title/Title";
import Number from "./componentes/Number/Number";
import "./profile.css";
import Hr from "./componentes/hr/hr";

export default function Profile({
  number,
  email,
  text,
  urlGithub,
  urlLinkedin,
  textGit,
  title,
  conteudo,
  image,
}) {
  return (
    <>
      <div id="profileContainer">
        <Image image={image}></Image>
        <Title title={title}></Title>
        <Hr></Hr>
        <AboutUs conteudo={conteudo}></AboutUs>
        <Hr></Hr>
        <Number number={number}></Number>
        <Hr></Hr>
        <Email email={email}></Email>
        <Hr></Hr>
        <Button url={urlGithub} text={textGit}></Button>
        <Button url={urlLinkedin} text={text}></Button>
      </div>
    </>
  );
}
