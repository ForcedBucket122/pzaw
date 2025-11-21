// Pobieramy dane z backendu
fetch('/auta')
    .then(res => res.json())
    .then(data => {
        const tbody = document.querySelector('#auta tbody');
        data.forEach(auto => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${auto.idauta}</td>
                <td>${auto.marka}</td>
                <td>${auto.model}</td>
                <td>${auto.przebieg}</td>
                <td>${auto.kolor}</td>
                <td>${auto.ubezpieczenie}</td>
                <td>${auto.rocznik}</td>
            `;
            tbody.appendChild(tr);
        });
    })
    .catch(err => console.error("Błąd pobierania danych:", err));
