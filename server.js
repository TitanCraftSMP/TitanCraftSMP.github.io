const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret-key', saveUninitialized: true, resave: true }));

// Beispiel-Datenbank mit Benutzerdaten
const users = {
    user1: { password: 'password1', birthdate: '2000-01-01' },
    user2: { password: 'password2', birthdate: '1995-05-05' },
};

// Anmelde-Route
app.post('/submit', (req, res) => {
    const { username, password, birthdate } = req.body;

    if (users[username] && users[username].password === password && users[username].birthdate === birthdate) {
        req.session.user = username;
        res.redirect('/forum');
    } else {
        res.send('Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Anmeldedaten.');
    }
});

// Forum-Seite
app.get('/forum', (req, res) => {
    if (req.session.user) {
        res.sendFile(__dirname + '/forum.html');
    } else {
        res.redirect('/');
    }
});

// Serve static files
app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
