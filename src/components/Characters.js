import "./Characters.css";
import Form from "./Form";
import CharacterCard from "./CharacterCard";

export default function Characters() {
  return (
    <section className="characters">
      <Form />
      <ul className="characterList">
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </ul>

      <button>More</button>
    </section>
  );
}
