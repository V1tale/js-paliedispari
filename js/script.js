// PALINDROMA
// INPUT
// chiedo all'utente di inserire una parola
paligo = document.getElementById("paligo");
// PROCESSING
// confronto la parola con la stessa parola, ma di ordine inverso
// se la parola dell'utente è uguale alla stessa parola di ordine inverso
// OUTPUT
// output positivo
// altrimenti, output negativo
paligo.addEventListener ("click", function (){
    userWordInput = document.getElementById("userword").value;
    console.log(userWordInput);
    let letters = userWordInput.split ("");
    console.log(letters);
    let character =""
    let characterReverse = ""
    let palindroma = false
    for ( i = 0; i <= letters.length -1 ; i++) {
        character = letters[i];
        console.log(character);
    }
        
    for (j = letters.length-1; j >= 0 ; j--) {
            characterReverse = letters[j];
            console.log(characterReverse);
    }

    if (character == characterReverse) {
        palindroma = true
    }
    console.log(palindroma);
let wellDone =document.getElementById("well-done");
    if (palindroma == true) {
        wellDone.innerHTML = "La parola è palindroma. Ben fatto!... per ora"
    } else {
        alert("Ti abbiamo chiesto una cosa semplice, eppure hai sbagliato. Riprova!");
    }
})

// PARI E DISPARI
// INPUT
// chiedo all'utente di scegliere tra le parole "pari" e "dispari"
// chiedo all'utente di scegliere un numero
const userChoiceInput = document.getElementById ("even-odd");
const userNumberInput = document.getElementById ("usernumber");
const button = document.getElementById("go");
console.log(userChoiceInput.value);
console.log(userNumberInput.value);
// PROCESSING
button.addEventListener ("click", function() {
    const userChoice = userChoiceInput.value;
    const userNumber = parseInt(userNumberInput.value);
    console.log(userChoice);
    console.log(userNumber);
    // il computer genera un numero casuale
    let pcNumber = Math.floor(Math.random() * 100);
    console.log(pcNumber);
    // sommo il valore casuale del computer a quello scelto dall'utente
    const sum = userNumber + pcNumber;
    console.log(sum);
    let result = document.getElementById("result")
    // stabilisco criteri pari e dispari
    // se la somma numerica corrisponde al criterio pari o al criterio dispari
    if (sum % 2 == 0 && userChoice == "even" ) {
        result .innerHTML = ("Congratulazioni, il numero è pari! Hai appena vinto un I-phone")
    }
    else if ( sum % 2 !== 0 && userChoice == "odd") {
        result.innerHTML = ("Congratulazioni, il numero è dispari. Hai appena vinto una BMW")
    }
    else if 
        (sum % 2 == 0 && userChoice === "odd" ) {
            result.innerHTML = ("Hai perso! Il numero è pari")
    } else { 
        result.innerHTML = ("Hai perso! Il numero è dispari")
    }
    
    // OUTPUT
    // output positivo
    // altrimenti, output negativo
let outputUserNumber = document.getElementById("usernumber-output");
outputUserNumber.innerHTML  =`Il numero che hai scelto: ${userNumber}`;
let outputPcNumber = document.getElementById("pcnumber-output");
outputPcNumber.innerHTML  =`Il numero generato dal pc: ${pcNumber}`;
let outputSum = document.getElementById("sum");
outputSum.innerHTML  =`La somma dei numeri:${sum}`;

})
    
