import { useState } from 'react'
import './App.css'
import './css/bootstrap.css'

function App() {
  const [tytul, setTytul] = useState("");
  const [rodzaj, setRodzaj] = useState("");

  const Dodaj = (e) => {
    e.preventDefault();
    console.log("Tytuł:", tytul, "Rodzaj:", rodzaj);
  }

  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">Tytuł filmu</label>
          <input 
            className="form-control"
            type="text"
            value={tytul}
            onChange={(e) => setTytul(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Rodzaj</label>
          <select 
            className="form-select"
            value={rodzaj}
            onChange={(e) => setRodzaj(e.target.value)}
          >
            <option value=""></option>
            <option value="Komedia">Komedia</option>
            <option value="Obyczajowy">Obyczajowy</option>
            <option value="Sensacyjny">Sensacyjny</option>
            <option value="Horror">Horror</option>  
          </select>
        </div>

        <button className="btn btn-primary" onClick={Dodaj}>
          Dodaj
        </button>

      </form>
    </div>
  )
}

export default App
