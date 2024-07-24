// Modal-Funktionalität
document.querySelectorAll('.team-member').forEach(item => {
    item.addEventListener('click', event => {
        const index = event.target.getAttribute('data-index');
        fetch(`profileData/${index}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('profile-img').src = data.img;
                document.getElementById('profile-name').innerText = data.name;
                document.getElementById('profile-role').innerText = data.role;
                document.getElementById('profile-description').innerText = data.description;
                document.getElementById('profileModal').style.display = 'flex';
            });
    });
});

// Schließen des Modals
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('profileModal').style.display = 'none';
});

// Initiale Anzeige der Startseite
document.getElementById('home').style.display = 'flex';

// Anzeige der Abschnitte
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Hamburger Menü
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
