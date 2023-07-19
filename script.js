// Etape 1 - Sélectionner nos éléments
let input      = document.querySelector('#prix');
let error      = document.querySelector('small');
let formulaire = document.querySelector('#formulaire')

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random()*1001);
let coups           = 0;
let nombreChoisi;


// Etape 6 - Créer la fonction vérifier
function verifier(nombre){

    //creation d un element div stocker dans la variable instruction
    let instruction = document.createElement('div');

    if (nombre < nombreAleatoire){
        //afficher  c est plus 
        //afficher du contenu
        instruction.textContent= '#' + coups + " ( " + nombre + " ) C' est plus ! ";
        //ajouter les class instruction et plus
        instruction.className = "instruction plus";
    }
    else if(nombre > nombreAleatoire){
        // afficher c est moins
        instruction.textContent= '#' + coups + " ( " + nombre + " ) C' est moins ! ";
        //ajouter les class instruction et moins
        instruction.className = "instruction moins";
    }
    else{
        //felicitation vous avez trouve le juste prix
        instruction.textContent= '#' + coups + " ( " + nombre + " ) Felicitation vous avez trouve le juste prix !";
        //ajouter les class instruction et fini
        instruction.className = "instruction fini";
        input.disabled = true;
    }
    //ajouter l element devant les autres
    document.querySelector('#instructions').prepend(instruction);
}



// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', ()=>{
    if (isNaN(input.value)){
        //afficher le message d erreur 
        error.style.display = "inline";
    }
    else{
        //cacher le message d erreur 
        error.style.display = "none";
    }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (isNaN(input.value) || input.value ===""){
        //mettre notre bordure de forumulaire en rouge
        input.style.borderColor = "red";
    }
    else{
        //on incremente la variavle coups
        coups++;
        //mettre notre bordure de formulaire en gris
        input.style.borderColor = 'silver';
        //on stocke le nombre choisie par l uttilisateur dans une variable
        nombreChoisi = input.value;
        //on reinitialise le nombre de l utilisateur en definissant une chaine vide
        input.value  = "";
        //la fonction verifier 
        verifier(nombreChoisi);

    }

});
