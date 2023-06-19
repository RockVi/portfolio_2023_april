// Inicialització de variables

let input = '';    // Emmagatzema els inputs alfanumèrics de càlcul  en una STRING
let init = '';     // STRING 'buida' associada al Reset


// Funcions per enviar valors a l'string d'inputs (números i símbols)

function addNumber(n){
    input += n;
}

function addSymbol(s){
    input += s;
}

// Funció per 'depurar' la variable INPUT (comprova si l'últim valor és numèric o no)

function isNaNLastChar(str){
    return isNaN(str[str.length - 1]);
}   

// Funció que calcula el resultat matemàtic a partir de l'string de valors concatenats 

function calculate(str){

    // Si l'ultim valor de l'string es un número o l'string no te valor encara
    if((isNaNLastChar(str) == false) || (str == "")){
        return eval(str);
    }
    // Si només hi ha un valor símbol a l'string (NO HA FUNCIONAT)
    else if((str.lenght < 2) & (isNaN(str) == true)){
        return str;
    }
    // Si l'ultim valor és un símbol, l'extreu 
    else{
        let arr = str.split("");
        arr.pop();
        str = arr.join("");
        console.log(str);
        return eval(str);
    }  
}

// Mostra la variable alfanumèrica INPUT 

function showString(){
    document.getElementById("topDisplay").value = input;
}

// Mostra el resultat temporal abans d'acabar l'operació (abans de clickar '=')

function showTempResult(){
    document.getElementById("bottomDisplay").value = calculate(input);
}

// Mostra el valor del càlcul final en clicar '='

function showLastResult(){
    document.getElementById("topDisplay").value = calculate(input);
    document.getElementById("bottomDisplay").value = "";
    input = calculate(input);
}

// Funció reset
function resetDisplay(){
    input = ''; 
    document.getElementById("topDisplay").value = init;
    document.getElementById("bottomDisplay").value = init;
}





