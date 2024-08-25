import "./Image.css";

export default function Image({ image }) {
  return (
    <>
      <div id="imgContainer">
        <img src={image} alt="joh doe" id="imgItem" />
      </div>
    </>
  );
}
