import "./Characters.css";

export default function Characters() {
  return (
    <section className="characters">
      <form>
        <input type="text" name="character" id="character__name" />
        <selection className="characters__status">
          <option>All</option>
          <option>Unknown</option>
          <option>Alive</option>
          <option>Dead</option>
        </selection>
      </form>
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
