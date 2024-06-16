// Carousel fotos
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    let index = 0;

    function showNextSlide() {
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // Change image every 3 seconds
});

// Función para mostrar PARTIDOS en el HTML
document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:8080/Partido') // Ajusta la URL según la ruta de tu API
        .then(response => response.json())
        .then(data => {
            window.allPartidos = data; // Guardamos todos los partidos en una variable global para facilitar el filtrado
            displayPartidos(data); // Mostrar todos los partidos inicialmente

            // Event listeners para los elementos del menú
            document.querySelectorAll('.menu-nav-pages li ul li a').forEach(link => {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    const filterType = this.closest('li').parentElement.parentElement.classList.contains('menu-btn-1') ? 'temporada' : 'competicion';
                    const filterValue = this.textContent.trim();
                    filterPartidos(filterType, filterValue);
                    updateStatistics(filterType, filterValue);
                });
            });
            updateStatistics('all', ''); // Mostrar estadísticas iniciales para todos los partidos
        })
        .catch(error => console.error('Error fetching matches:', error));
});

function displayPartidos(partidos) {
    const container = document.querySelector('.games-scroll');
    container.innerHTML = '';
    partidos.forEach(partido => {
        const gameCard = createGameCard(partido);
        container.appendChild(gameCard);
    });
}

function createGameCard(data) {
    // Creación de elementos y asignación de datos
    const gameCard = document.createElement('div');
    gameCard.classList.add('single-game');
    gameCard.innerHTML = `
        <div class="card-small-v2">
            <div class="livescore-top" style="background: ${data.backgroundColor || '#FFF'}">
                <div class="frame-livescore">
                    <div class="teams-div local">
                        <img class="team-crest local" src="images/crests/${data.localCrest}.png" alt="localTeamCrest"/>
                        <div class="team-name local">${data.localTeam}</div>
                    </div>
                    <div class="score-center">
                        <div class="score-number local">${data.marcadorLocal}</div>
                        <img class="competition-logo" src="images/crests/${data.competitionLogo}.png" alt="Competiton Logo" />
                        <div class="score-number visit">${data.marcadorVisitante}</div>
                    </div>
                    <div class="teams-div visit">
                        <img class="team-crest visit" src="images/crests/${data.visitCrest}.png" alt="visitTeamCrest"/>
                        <div class="team-name visit">${data.visitTeam}</div>
                    </div>
                </div>
            </div>

            <div class="game-info">
                <div class="game-text">
                    <div class="competition-name">${data.competicion}</div>
                    <div class="competition-phase">${data.faseCompeticion}</div>
                    <div class="game-date">${data.fecha}</div>
                </div>
            </div>

            <div class="kit">
                <img class="player-kit" src="images/kits/${data.playerKit}.png" alt="Kit Image" />
                <div class="kit-info">
                    <div class="brand">${data.kitManufacturer}</div>
                    <div class="kit-type">${data.kitNumber}</div>
                    <div class="sleeve">${data.kitSleeve}</div>
                </div>
            </div>

            <div class="player-stats">
                <div class="stats-up">
                    <div class="time-played">
                        <div class="label">TJ</div>
                        <div class="value">${data.minutos}'</div>
                    </div>
                    <div class="goal">
                        <div class="label">G</div>
                        <div class="value">${data.goals}</div>
                    </div>
                    <div class="stats-card yellow">
                        <div class="label">
                            <div class="yellow-card" style="width: 10px; height: 15px; background: #FFF500"></div>
                        </div>
                        <div class="value">${data.tarjetaAmarilla}</div>
                    </div>
                </div>
                <div class="stats-down">
                    <div class="rate">
                        <div class="label">V</div>
                        <div class="value">${data.rating}</div>
                    </div>
                    <div class="assist">
                        <div class="label">A</div>
                        <div class="value">${data.assists}</div>
                    </div>
                    <div class="stats-card">
                        <div class="label">
                            <div class="red-card" style="width: 10px; height: 15px; background: #E50000"></div>
                        </div>
                        <div class="value">${data.tarjetaRoja}</div>
                    </div>
                </div>
            </div>

            <div class="bottom-row">
                <div class="elipse-area">
                    <div class="ellipse"></div>
                </div>
            </div>
        </div>
    `;
    return gameCard;
}

// Filtrar partidos por competicion
function filterPartidos(type, value) {
    let filteredPartidos = [];

    if (type === 'temporada') {
        filteredPartidos = window.allPartidos.filter(partido => partido.temporada === value);
    } else if (type === 'competicion') {
        filteredPartidos = window.allPartidos.filter(partido => partido.competicion === value);
    }

    displayPartidos(filteredPartidos);
}

// Actualizar estadisticas "highlight"
function updateStatistics(type, value) {
    let filteredPartidos = window.allPartidos;

    if (type === 'temporada') {
        filteredPartidos = filteredPartidos.filter(partido => partido.temporada === value);
    } else if (type === 'competicion') {
        filteredPartidos = filteredPartidos.filter(partido => partido.competicion === value);
    }

    const totalMinutos = filteredPartidos.reduce((total, partido) => total + parseInt(partido.minutos, 10), 0);
    const totalGoles = filteredPartidos.reduce((total, partido) => total + parseInt(partido.goals, 10), 0);
    const totalAsistencias = filteredPartidos.reduce((total, partido) => total + parseInt(partido.assists, 10), 0);
    const averageRating = (filteredPartidos.reduce((total, partido) => total + parseFloat(partido.rating), 0) / filteredPartidos.length).toFixed(2);

    document.getElementById('total-time').textContent = `${totalMinutos}’`;
    document.getElementById('total-goals').textContent = totalGoles;
    document.getElementById('total-assists').textContent = totalAsistencias;
    document.getElementById('average-rating').textContent = averageRating;
}

// Ordenar los partidos por fecha
function sortGameCardsByDate(order = 'desc') {
    // Obtener el contenedor de las tarjetas de juego
    const container = document.querySelector('.games-scroll');
    // Obtener todas las tarjetas de juego dentro del contenedor
    const gameCards = Array.from(container.querySelectorAll('.single-game'));

    // Ordenar los elementos según la fecha
    gameCards.sort((cardA, cardB) => {
        const dateA = new Date(cardA.querySelector('.game-date').textContent.trim());
        const dateB = new Date(cardB.querySelector('.game-date').textContent.trim());

        if (order === 'desc') {
            return dateB - dateA; // Orden descendente
        } else {
            return dateA - dateB; // Orden ascendente
        }
    });

    // Limpiar el contenedor actual
    container.innerHTML = '';

    // Agregar los elementos ordenados de vuelta al contenedor
    gameCards.forEach(card => {
        container.appendChild(card);
    });
}


/*
// Función para calcular estadísticas agregadas
function calculateStats(matches) {
    let totalMinutes = 0;
    let totalGoals = 0;
    let totalAssists = 0;
    let totalRating = 0;
    let matchCount = matches.length;

    matches.forEach(match => {
        totalMinutes += match.minutos;
        totalGoals += match.goals;
        totalAssists += match.assists;
        totalRating += match.rating;
    });

    let averageRating = matchCount > 0 ? (totalRating / matchCount).toFixed(2) : 0;

    return {
        totalMinutes,
        totalGoals,
        totalAssists,
        averageRating
    };
}
*/