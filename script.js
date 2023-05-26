// La un hotel pentru animale:

var numberOfDogs = 11;
var numberOfCats = 11;
var numberOfEmployees = 7;

// Implementati urmatoarele functii:

// a) stiind ca hotelul poate primi maxim 15 caini, implementati o conditie care verifica daca mai sunt locuri disponibile pentru caini si afisati in consola mesaje corespunzatoare

var maxNumberOfDogs = 15;

function freeDogsSpace (){
    if( numberOfDogs < maxNumberOfDogs){
        console.log('Free spots for dogs:', maxNumberOfDogs - numberOfDogs)
    } else {
        console.log('No more available spots')
    }
}
 
freeDogsSpace();

// b) stiind ca hotelul poate primi maxim 30 de animale in acelasi timp, implementati o conditie care verifica daca hotelul este supra-aglomerat

var maxPets = 30;

var allPets = numberOfDogs + numberOfCats;

function hotelSpace(){
    if(allPets < maxPets){
        console.log('The hotel is not full, there are still free places:', maxPets - allPets);
    } else {
        console.log('The hotel is full');
    }
}

hotelSpace();



// c) pentru fiecare pisica trebuie sa fie disponibile cate 3 jucarii, iar pentru fiecare caine cate 5. Calculati si afisati cate jucarii trebuie sa cumpere cei de la hotel pentru animale.

var maxNumberOfCats = maxPets - maxNumberOfDogs;
 

function totalToys(){
    var numberOfCatToys = 3 * maxNumberOfCats;
    var numberOfDogToys = 5 * maxNumberOfDogs;
    var totalPetToys = 3 * maxNumberOfCats + 5 * maxNumberOfDogs;
    console.log('Total cat toys:', numberOfCatToys, 'Total dog toys:', numberOfDogToys, 'Total pet toys:', totalPetToys);
}

totalToys();

// d) daca numarul total al animalelor este mai mic de 20 sau sunt mai multi de 5 angajati, consideram ca animalele sunt bine ingrijite, implementati o conditie care sa verifice si sa afiseze in consola mesaje corespunzatoare

function petsCare(){
    if((maxPets < 20) || (numberOfEmployees > 5)){
        console.log('We will take cared for your pet');
    } else {
        console.log('Sorry, no caregiver is available');
    }
}

petsCare()

// e) numarul norocos al patronului este 7. Daca la orice moment cand viziteaza hotelul (este si el acolo!) numarul total al fiintelor din interior este multiplu de 7, fiecare angajat va primi un bonus de 100 de lei. Calculati si afisati in consola cati bani il va costa o astfel de vizita.

function bonus(){
    var inside = maxPets + numberOfEmployees + 1;
    var luckyNumber = 7;
    var  multipleOf = inside % luckyNumber;

    if( multipleOf == 0){
        var money = numberOfEmployees * 100;
        console.log('Boss expenses:', money);
    } else{
        console.log('Bad luck');
    }

}

bonus()


// f) daca avem un numar impar de caini si un numar impar de pisici, afisam "Paritate SI"
// g) daca avem un numar impar de caini sau un numar impar de pisici, afisam "Paritate Sau"

