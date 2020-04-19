// Chiedere all'utente il proprio nome
var nome_utente = prompt("Quale é il suo nome ?")
console.log(nome_utente)
//Chiedere all'utente il proprio cognome
var cognome_utente = prompt("Quale é il suo cognome?")
console.log(cognome_utente)
//Chiedere all'utente il proprio colore preferito
var colorepreferito_utente = prompt("Quale é il suo colore preferito?")
console.log(colorepreferito_utente)
//la pasword generata é uguale a
var pasword_generata = nome_utente + cognome_utente + colorepreferito_utente
console.log(pasword_generata)
//Genera il numero 20
var numero_pasword = 20;
console.log(numero_pasword)


document.getElementById("pasword").innerHTML = ("La sua pasword é :" + " " + pasword_generata + numero_pasword)
console.log("La sua pasword é :" + " " + pasword_generata + numero_pasword)
