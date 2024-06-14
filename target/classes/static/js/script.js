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

// Función para mostrar PARTIDOS en el HTML
document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:8080/Partido') // Ajusta la URL según la ruta de tu API
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.games-scroll');
            data.forEach(partido => {
                const gameCard = createGameCard(partido);
                container.appendChild(gameCard);
            });
        })
        .catch(error => console.error('Error fetching matches:', error));
});

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

// Define un objeto con el mapeo de nombres de competiciones a colores de fondo.
/*
const competitionColors = {
    'Champions League': 'linear-gradient(270deg, #00519D 0%, #000741 100%)',
    'Super Cup': 'linear-gradient(270deg, #000080 0%, #87CEEB 100%);',
    'Club World Cup': 'linear-gradient(270deg, #B22234 0%, #FFD700 100%)',
    'LaLiga': 'linear-gradient(270deg, #FFB800 0%, #E50000 100%)'
    'Copa del Rey': 'linear-gradient(270deg, #8B0000 0%, #FF4500 100%)',
    'Super Copa': 'linear-gradient(270deg, #1E90FF 0%, #FFD700 100%)',
    'Amistoso': 'linear-gradient(270deg, #006400 0%, #7FFF00 100%)',
    'Amistoso Naciones': 'linear-gradient(270deg, #FF0000 0%, #FFA500 100%)',
    'World Cup': 'linear-gradient(270deg, #1E90FF 0%, #FFD700 100%)',
    'Eurocup': 'linear-gradient(270deg, #00008B 0%, #FFD700 100%)'
};
// Función para aplicar el color de fondo basado en el nombre de la competición.
function applyCompetitionColor(competitionName) {
    const backgroundColor = competitionColors[competitionName];
    if (backgroundColor) {
        document.querySelector('.livescore-top').style.background = backgroundColor;
    } else {
        console.warn(`No background color defined for competition: ${competitionName}`);
    }
}

// Llama a la función con el nombre de la competición recibido.
applyCompetitionColor(data.competicion);
*/