export function DashboardPage(){
    const root = document.getElementById('root');
    root.innerHTML = `
    <h1>Dashboard Page</h1>
    <button id="view-flights">Vuelos</button>
    <main id="flights"></main>
    `;

    const viewFlights = document.getElementById('view-flights');

    viewFlights.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/flights');
            const data = await response.json();
    
            const containerflights = document.getElementById('flights');
            data.forEach(flight => {
                const elementFlight = document.createElement('section');
                elementFlight.innerHTML = `
                    <h2>${flight.airline}</h2>
                    <p>${flight.departure} - ${flight.arrival}</p>
                    <p>${flight.date}</p>
                    <p>Precio: ${flight.price}</p>
                    <button id="${flight.id}">Reservar</button>
                `;
                containerflights.appendChild(elementFlight);
            });
        } catch (error) {
            console.error('Error al obtener los vuelos:', error);
        }
    });
    
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            const flightId = e.target.id;
            const response = await fetch(`https://localhost:3000/flights`,{
                method: 'PUT',
                headers: {'content-type': 'aplication/json'},
                body: JSON.stringify({
                    
                })
            });
            
        });
    })

}