/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, 
per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//input per km
let km = parseInt(prompt('Inserire la lunghezza del viaggio in km'));
//input per età
let age = parseInt(prompt("Inserire l'età del passeggero"));
//costo biglietto normale
let costoNormal = (km * 0.21).toFixed(2)


//controllo che siano state inseriti i numeri e non le stringhe
if((!isNaN(km)) && (!isNaN(age))){
    //biglietto minorenni
    if(age < 18){
        let costoMinorenni = ((costoNormal * 20) / 100)
        let finalPriceM = (costoNormal - costoMinorenni).toFixed(2)
        console.log(`il costo del biglietto per i minorenni è: ${finalPriceM}`)
        document.getElementById('app').innerHTML = `<h2>Il costo del biglietto per ${km}km per una persona di ${age} anni è: ${finalPriceM}</h2>`
    } else if(age > 65){
        // biglietto over 65
        let costoOver65 = ((km * 0.21) * 40) / 100
        let finalPriceO = (costoNormal - costoOver65).toFixed(2)
        console.log(`il costo del biglietto per gli over 65 è: ${finalPriceO}`)
        document.getElementById('app').innerHTML = `<h2>Il costo del biglietto per ${km}km per una persona di ${age} anni è: ${finalPriceO}</h2>`
    } else {
        //biglietto normale
        console.log(`il costo del biglietto intero senza sconti è: ${costoNormal}`)
        document.getElementById('app').innerHTML = `<h2>Il costo del biglietto per ${km}km per una persona di ${age} anni è: ${costoNormal}</h2>`
    }
} else {
    //input sbagliato
    console.log('devi inserire dei numeri non delle stringhe')
    document.getElementById('app').innerHTML = `<h2>Non puoi scrivere stringhe al poso dei chilometri e dell'età</h2>`
}
