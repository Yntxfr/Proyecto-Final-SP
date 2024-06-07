document.addEventListener('DOMContentLoaded', function () {
    fetchPartidos();
});

function fetchPartidos() {
    fetch('/api/partidos')
        .then(response => response.json())
        .then(data => {
            displayPartidos(data);
        })
        .catch(error => console.error('Error fetching partidos:', error));
}

function displayPartidos(partidos) {
    const container = document.getElementById('partidos-container');
    container.innerHTML = '';

    partidos.forEach(partido => {
        const partidoHTML = `
            <div class="container">
                <div class="frame-data">
                    <div class="frame1">
                        <div class="competition">${partido.competicion}</div>
                        <div class="date">${new Date(partido.fecha).toLocaleDateString()}</div>
                    </div>
                    <div class="frame2">
                        <div class="score">
                            <div class="score-top">
                                <div class="local-team-img"><img src="#" alt="crest-1" class="crest-1"></div>
                                <div class="livescore">${partido.marcador}</div>
                                <div class="visit-team-img"><img src="#" alt="crest-2" class="crest-2"></div>
                            </div>
                            <div class="score-bottom">
                                <div class="local-team">${partido.localTeam}</div>
                                <div class="time">${partido.tiempoJuego}</div>
                                <div class="visit-team">${partido.visitTeam}</div>
                            </div>
                        </div>
                    </div>
                    <div class="frame3">
                        <div class="stat tj">TJ</div>
                        <div class="stat g">G</div>
                        <div class="stat a">A</div>
                        <div class="stat v">V</div>
                    </div>
                    <div class="frame4">
                        <div class="time">${partido.minutos}’</div>
                        <div class="goals">${partido.goals}</div>
                        <div class="assists">${partido.assists}</div>
                        <div class="rating">${partido.rating}</div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += partidoHTML;
    });
}



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
