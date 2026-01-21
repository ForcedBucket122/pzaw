import React, { useState } from 'react'; // Importujemy narzędzie do zapamiętywania danych (stanu)
import 'bootstrap/dist/css/bootstrap.min.css'; // Importujemy style Bootstrapa

function App() {
  // 1. Definiujemy tablicę z kursami (zgodnie z założeniem)
  const kursy = ["Programowanie w C#", "Angular dla początkujących", "Kurs Django"];

  // 2. Tworzymy "pamięć" dla pól formularza (tzw. stan)
  const [imieNazwisko, setImieNazwisko] = useState("");
  const [numerKursu, setNumerKursu] = useState("");

  // 3. Funkcja, która wykona się po kliknięciu przycisku
  const obsluzZapis = (zdarzenie) => {
    zdarzenie.preventDefault(); // Zapobiega odświeżeniu strony po kliknięciu

    // Wyświetlamy imię i nazwisko w konsoli
    console.log(imieNazwisko);

    // Sprawdzamy czy numer kursu jest poprawny
    // Pamiętaj: użytkownik wpisuje 1, 2, 3, a tablica liczy od 0, 1, 2.
    const indeks = parseInt(numerKursu) - 1;

    if (indeks >= 0 && indeks < kursy.length) {
      console.log(kursy[indeks]); // Wyświetla nazwę kursu
    } else {
      console.log("Nieprawidłowy numer kursu");
    }
  };

  return (
    <div className="container mt-5">
      {/* Nagłówek z długością tablicy */}
      <h2>Liczba kursów: {kursy.length}</h2>

      {/* Automatycznie generowana lista numerowana */}
      <ol>
        {kursy.map((kurs, i) => (
          <li key={i}>{kurs}</li>
        ))}
      </ol>

      {/* Formularz Bootstrap */}
      <form onSubmit={obsluzZapis}>
        <div className="mb-3">
          <label htmlFor="inputImie" className="form-label">Imię i nazwisko:</label>
          <input 
            type="text" 
            className="form-control" 
            id="inputImie" 
            value={imieNazwisko}
            onChange={(e) => setImieNazwisko(e.target.value)} 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputNumer" className="form-label">Numer kursu:</label>
          <input 
            type="number" 
            className="form-control" 
            id="inputNumer" 
            value={numerKursu}
            onChange={(e) => setNumerKursu(e.target.value)} 
          />
        </div>

        <button type="submit" className="btn btn-primary">Zapisz do kursu</button>
      </form>
    </div>
  );
}

export default App;