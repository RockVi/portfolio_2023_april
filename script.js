// Variables globals

let userName = document.getElementById("userName");                         // Llista (ul) del DOM
let userComment = document.getElementsById("userComment"); 
let logComments = document.getElementById(logComments);

// Element pare de la llista (div)


// Funció per afegir productes

function addProduct() {

  // Nom del producte 
  let product = document.getElementById("newProductInput").value;

  /* Verificació de l'existència del producte*/

  if (product === "") {
    alert("Type a product name.");
  }
  
  /* Verificació de caràcters alfabètics amb RegExp
  i mètode test(), que busca coincidències */

  else if(/[^A-z]/g.test(product) === true) {
    alert("Look out! Type only alphabetical characters.");
  }

  else {
    /* Nom del producte capitalitzat a la 1ª lletra
          --> charAt(index) pren la lletra en la posició indicada
          --> slice(index) pren la cadena desde la posició indicada
    */
    let productName = product.charAt(0).toUpperCase() + product.slice(1).toLowerCase();

    // Creació del producte
    let newProduct = document.createElement("li");

    // Text del producte
    newProduct.innerText = productName;

    // Creació Icona per eliminar el producte
    let deleteProduct = document.createElement("span");
    let trushCan = document.createElement("img");
    trushCan.setAttribute('src','IMG/delete.png');
    trushCan.setAttribute('alt','Trush Can');

    // Associació de cada element al seu pare
    list.appendChild(newProduct);
    newProduct.appendChild(deleteProduct);
    deleteProduct.appendChild(trushCan);

    // Funció per eliminar el producte en fer click a la paperera
    deleteProduct.onclick = function removeProduct() {
    this.parentElement.remove();
    upDateDisplay();
    };

    /* Funcions per canviar el color de la bora
    en passar el ratolí per la paperera */
    deleteProduct.onmouseover = function redBorder(){
      this.parentElement.style.border = "2px solid rgb(255, 25, 25)";
    }
    deleteProduct.onmouseleave = function greenBorder(){
      this.parentElement.style.border = "2px solid green";
    }
    
    // Actualització display de la llista en crear el producte
    upDateDisplay();
  }

  // Reset de l'input de text del DOM
  document.getElementById("newProductInput").value = "";
}

// Funció per eliminar tots els elements

function removeAll() {
  if(list.firstChild) {
    list.removeChild(list.firstChild);
  }
  else{
    alert("Your shopping list is already empty.")
  }
}
   
/* Funció per actualitzar el display de la 
llista en relació al número de productes*/

function upDateDisplay() {

    let listItems = document.getElementsByTagName("li");  // Array amb els productes creats
    let numListItems = listItems.length;                  // Número de productes              

    if (numListItems <= 4) {
      list.style.gridTemplateColumns = "repeat(1, 1fr)";
      shoppingList.margin = "0 5rem";
    }
    else{
      list.style.gridTemplateColumns = "repeat(2, 1fr)";
      shoppingList.margin = "0 auto";
    }
}





