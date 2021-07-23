import "./Characters.css";
import Form from "./Form";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
export default function Characters() {
  return (
    <section className="characters">
      <Form />
      <ul className="characterList">
        <Link to="/characters/singleCharacter">
          <CharacterCard />
        </Link>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </ul>

      <button>More</button>
    </section>
  );
}
