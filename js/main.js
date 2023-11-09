// Questo è il file che contiene tutto il codice JS della pagina web

// Chiedere le informazioni di base all'utente
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favoriteColor = prompt("Inserisci il tuo colore preferito");
let numbersRequest1 = prompt("inserisci un nuomero");
let numbersRequest2 = prompt("Inserisci un'altro numero");

// Converto le variabili numbers (che era un testo per via del prompt) in un NUMERO
numbersRequest1 = parseInt(numbersRequest1);
numbersRequest2 = parseInt(numbersRequest2);

// Elaborazione delle statistiche e delle passwords
let divOfNumberRequest = numbersRequest1 / numbersRequest2
let password = name + surname + favoriteColor

let password1 = password + 21
let password2 = password +  Math.round(divOfNumberRequest)
let password3 = password + Math.floor(Math.random() * 101)
// Compliazione dei dati
let database = `
-------------- Informazioni utente--------------
> Informazioni personali:

Nome ${name}

cognome ${surname}

colorepreferito ${favoriteColor}

primonumero ${numbersRequest1}

secondonumero ${numbersRequest2}

>informazioni elaborate

risultato della divisione ${divOfNumberRequest}

>passwords create

password insicurissima ${password1}

password più sicura ${password2}

password sicura ${password3}
`;


console.log(database);

// Qui posso poi compilare l'eventuale pagina HTML prodisposta.
document.getElementById("password1").innerHTML = password1
document.getElementById("password2").innerHTML = password2
document.getElementById("password3").innerHTML = password3


