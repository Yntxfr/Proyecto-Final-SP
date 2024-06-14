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

// Función para actualizar estadísticas en el HTML
/*
function updateStatsInHTML(stats) {
    document.querySelector(".stats-frame1 .time .value").innerText = `${stats.totalMinutes}’`;
    document.querySelector(".stats-frame1 .goals .value").innerText = stats.totalGoals;
    document.querySelector(".stats-frame1 .assists .value").innerText = stats.totalAssists;
    document.querySelector(".stats-frame1 .rating .value").innerText = stats.averageRating.toFixed(1);
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:8080/Partido")
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector(".games-scroll");

            data.forEach(partido => {
                const matchCard = document.createElement("div");
                matchCard.classList.add("single-game");

                matchCard.innerHTML = `
                    <div class="card-small-v2">
                        <div class="livescore-top">
                            <div class="frame-livescore">
                                <div class="teams-div local">
                                    <img class="team-crest local" src="${partido.localCrest}" alt="localTeamCrest"/>
                                    <div class="team-name">${partido.localTeam}</div>
                                </div>
                                <div class="score-center">
                                    <div class="score-number local">${partido.marcador.split("-")[0]}</div>
                                    <img class="competition-logo" src="${partido.competitionLogo}" alt="Competiton Logo" />
                                    <div class="score-number visit">${partido.marcador.split("-")[1]}</div>
                                </div>
                                <div class="teams-div visit">
                                    <img class="team-crest visit" src="${partido.visitCrest}" alt="visitTeamCrest"/>
                                    <div class="team-name">${partido.visitTeam}</div>
                                </div>
                            </div>
                        </div>

                        <div class="game-info">
                            <div class="game-text">
                                <div class="competition-name">${partido.competicion}</div>
                                <div class="competition-phase">${partido.faseCompeticion}</div>
                                <div class="game-date">${partido.fecha}</div>
                            </div>
                        </div>

                        <div class="kit">
                            <img class="player-kit" src="${partido.playerKit}" alt="Kit Image" />
                            <div class="kit-info">
                                <div class="brand">${partido.kitManufacturer}</div>
                                <div class="kit-type">${partido.kitNumber}</div>
                                <div class="sleeve">${partido.kitSleeve}</div>
                            </div>
                        </div>

                        <div class="player-stats">
                            <div class="stats-up">
                                <div class="time-played">
                                    <div class="label">TJ</div>
                                    <div class="value">${partido.minutos}'</div>
                                </div>
                                <div class="goal">
                                    <div class="label">G</div>
                                    <div class="value">${partido.goals}</div>
                                </div>
                                <div class="stats-card yellow">
                                    <div class="label">
                                        <div class="yellow-card" style="width: 10px; height: 15px; background: #FFF500"></div>
                                    </div>
                                    <div class="value">${partido.tarjetaAmarilla}</div>
                                </div>
                            </div>
                            <div class="stats-down">
                                <div class="rate">
                                    <div class="label">V</div>
                                    <div class="value">${partido.rating}</div>
                                </div>
                                <div class="assist">
                                    <div class="label">A</div>
                                    <div class="value">${partido.assists}</div>
                                </div>
                                <div class="stats-card red">
                                    <div class="label">
                                        <div class="red-card" style="width: 10px; height: 15px; background: #E50000"></div>
                                    </div>
                                    <div class="value">${partido.tarjetaRoja}</div>
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

                container.appendChild(matchCard);
            });

            // Calcular estadísticas agregadas y actualizar el HTML
            const stats = calculateStats(data);
            updateStatsInHTML(stats);

            // Agregar funcionalidad de filtrado de competiciones
            const competitionLinks = document.querySelectorAll(".stats-block ul li a");
            competitionLinks.forEach(link => {
                link.addEventListener("click", function (event) {
                    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

                    const selectedCompetition = this.innerText.trim(); // Obtener el nombre de la competición seleccionada

                    // Recorrer todas las tarjetas de partido y mostrar solo las correspondientes a la competición seleccionada
                    const matchCards = document.querySelectorAll(".single-game");
                    matchCards.forEach(card => {
                        const competition = card.querySelector(".competition-name").innerText;
                        if (selectedCompetition === "Todas las competiciones" || competition === selectedCompetition) {
                            card.style.display = "flex"; // Mostrar las tarjetas que coinciden
                        } else {
                            card.style.display = "none"; // Ocultar las tarjetas que no coinciden
                        }
                    });

                    // Asegurarse de que el contenedor mantenga el diseño flex horizontal
                    container.style.display = "flex";
                    container.style.flexWrap = "nowrap";
                    container.style.overflowX = "auto";

                    // Filtrar datos para recalcular estadísticas
                    const filteredData = data.filter(match => selectedCompetition === "Todas las competiciones" || match.competicion === selectedCompetition);
                    const filteredStats = calculateStats(filteredData);
                    updateStatsInHTML(filteredStats);
                });
            });
        })
        .catch(error => console.error('Error fetching matches:', error));
});
*/
/*
function createGameCard(data) {
    const gameCard = document.createElement('div');
    gameCard.classList.add('single-game');
    gameCard.innerHTML = `
        <div class="card-small-v2">
            <div class="livescore-top">
                 <div class="frame-livescore">
                    div class="teams-div local">
                        <img class="team-crest local" src="images/crests/dortmund.png" alt="localTeamCrest"/>
                        <div class="team-name local">Dortmund</div>
                    </div>
                    <div class="score-center">
                        <div class="score-number local">0</div>
                        <img class="competition-logo" src="images/crests/UCL_ball.png" alt="Competiton Logo" />
                        <div class="score-number visit">2</div>
                    </div>
                    <div class="teams-div visit">
                        <img class="team-crest visit" src="images/crests/rma.png" alt="visitTeamCrest"/>
                        <div class="team-name visit">Real Madrid</div>
                    </div>
                 </div>
            </div>
            <div class="game-info">
                <div class="game-text">
                    <div class="competition-name">Champions League</div>
                    <div class="competition-phase">Final</div>
                    <div class="game-date">30/04/2024</div>
                </div>
            </div>
            <div class="kit">
                <img class="player-kit" src="images/kits/RMA_2324_first_ss.png" alt="Kit Image" />
                <div class="kit-info">
                    <div class="brand">Adidas</div>
                    <div class="kit-type">Conjunto local</div>
                    <div class="sleeve">Manga corta</div>
                </div>
            </div>
            <div class="player-stats">
                <div class="stats-up">
                    <div class="time-played">
                        <div class="label">TJ</div>
                        <div class="value">86’</div>
                    </div>
                    <div class="goal">
                        <div class="label">G</div>
                        <div class="value">0</div>
                    </div>
                    <div class="stats-card yellow">
                        <div class="label">
                            <div class="yellow-card" style="width: 10px; height: 15px; background: #FFF500"></div>
                        </div>
                        <div class="value">0</div>
                    </div>
                </div>
                <div class="stats-down">
                    <div class="rate">
                        <div class="label">V</div>
                        <div class="value">8,5</div>
                    </div>
                    <div class="assist">
                        <div class="label">A</div>
                        <div class="value">1</div>
                    </div>
                    <div class="stats-card">
                        <div class="label">
                            <div class="red-card" style="width: 10px; height: 15px; background: #E50000"></div>
                        </div>
                        <div class="value">0</div>
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

document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:8080/Partido')
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
*/

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
            <div class="livescore-top" style="background-color: ${data.backgroundColor || '#FFF'}">
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
