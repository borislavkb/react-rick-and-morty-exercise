import "./Characters.css";
import Form from "./Form";

export default function Characters() {
  return (
    <section className="characters">
      <Form />
      <ul className="characterList">
        <li className="character-card">
          <img src="#" alt="character" />
          <h3>Name</h3>
        </li>
      </ul>

      <button>More</button>
    </section>
  );
}
