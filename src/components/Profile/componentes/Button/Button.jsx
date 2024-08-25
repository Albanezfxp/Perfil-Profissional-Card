import "./button.css";

export default function Button({ url, text }) {
  return (
    <div id="btnContainer">
      <a href={url} id="buttonItem">
        {text}
      </a>
    </div>
  );
}
