const emails = [ 'mario@gmail.com','lucia@gmail.com ', 'marta@gmail.com', 'silvia@gmail.com', 'marco@gmail.com'];

const email_utente = prompt('inserisci email');

let puoi_accedere = false

for ( let i = 0; i< emails.length; i++) {
    if (emails[i] == email_utente) {
        puoi_accedere = true;
    }
}

if (puoi_accedere == true) {
    alert('benvenuto');
} else {
    alert('accesso negato');
}