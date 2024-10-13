window.onload = function() {
    const modal = document.getElementById('welcomeModal');
    const closeBtn = document.querySelector('.close-btn');
    modal.style.display = 'block';
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
};


 
const form = document.getElementById('feedbackForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedPageLike = document.querySelector('input[name="Te_gusta_la_pagina"]:checked');
    const selectedGenre = document.querySelector('input[name="Genero"]:checked');
    const selectedFrequency = document.querySelector('input[name="Frecuencia"]:checked');
    const selectedPlatform = document.querySelector('input[name="Plataforma"]:checked');
    const selectedLearnMore = document.querySelector('input[name="Aprender"]:checked');

    if (selectedPageLike && selectedGenre && selectedFrequency && selectedPlatform && selectedLearnMore) {
        const responses = `Te gusta la página: ${selectedPageLike.value}\n` +
                          `Género: ${selectedGenre.value}\n` +
                          `Frecuencia: ${selectedFrequency.value}\n` +
                          `Plataforma: ${selectedPlatform.value}\n` +
                          `Aprender más: ${selectedLearnMore.value}\n`;

        const blob = new Blob([responses], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'respuestas.txt'; 
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a); 

        URL.revokeObjectURL(url);
    } else {
        alert("Por favor responde todas las preguntas antes de enviar.");
    }
});