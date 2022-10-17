// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================

for (let i = 0; i < 3; i++){
    console.log('Hoera');
}

// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
 // ==========================================

for (let i = 0; i < 4; i++) {
    const loop = ('loop');
    console.log(loop);
}
let klaar = 'klaar!';
        console.log(klaar);

/*
//https://www.freecodecamp.org/news/javascript-for-loops/
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}
*/
// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
//Google naar 'mdn webdocs remainder operator'.
// ==========================================

for (let i = 0; i < 15; i++) {
    if (i % 2 == 0) {
        console.log([i] + " dit getal is even.");
    }

// bij oneven getallen
    else {
        console.log([i] + " dit getal is oneven.");
    }
}

// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================
