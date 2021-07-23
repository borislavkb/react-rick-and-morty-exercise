import "./Form.css";

export default function Form() {
  return (
    <form className="character-form">
      <input type="text" name="character" id="character__name" />
      <selection className="characters__status">
        <option>All</option>
        <option>Unknown</option>
        <option>Alive</option>
        <option>Dead</option>
      </selection>
    </form>
  );
}
