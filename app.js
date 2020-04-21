
// ------------let--------------
//1 • Créer une variable favoriteCityId (à l’aide mot clé let) qui contient la chaîne de caractères : "rome".
let favoriteCityId = "rome";

//3 • Affecter une nouvelle valeur à la variable favoriteCityId : une chaînes de caractères : "paris"
favoriteCityId = "paris";





//2 • Afficher dans la console (console.log(…)) la variable favoriteCityId.
console.log("favoriteCityId ==> " + favoriteCityId);

// ------------const------------

//6 • Créer une constante citiesId (à l’aide mot clé const) qui contient un tableau de chaînes de caractères : "paris", "nyc", "rome", "rio-de-janeiro".
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]

//8 • Afficher dans la console (console.log(…)) la constante citiesId.
console.log("citiesId ==> " + citiesId);

//9 • Affecter une nouvelle valeur à la constante citiesId : un tableau vide par exemple. Que constatez-vous dans la console ? Mettre en commentaire la ligne de code de la nouvelle affectation.
//citiesId = []

//10• Ajouter un nouvel élément au tableau : "tokyo".
citiesId.push("tokyo");

// ------------Création d’objet------------

//12 • Créer une fonction getWeather qui possède un paramètre cityId.
function getWeather(cityId) {
    // 13 • Dans cette fonction, ajouter 2 variables locales :
    let city = cityId.toUpperCase();
    let temperature = 20;

    return{city,temperature};

}

// 14 • Créer une constante weather qui exécute la fonction getWeather en lui passant en paramètre
const weather = getWeather(favoriteCityId);

// 15 • Afficher dans la console constante weather
console.log("weather ==> " + weather);

// ------------Affectation destructurée------------

// 16 • Avec la nouvelle syntaxe d’affectation destructurée, créer deux constantes city et temperature qui récupère leurs valeurs à partir de la constante weather.
const { city, temperature } = weather;

// 17 • Afficher dans la console la valeur de constante city.
console.log("city ==> " + city);

// 18 • Afficher dans la console la valeur de constante temperature
console.log("temperature ==> " + temperature);

// ------------Rest operator------------

// 19 • A l’aide du rest operator, créer à partir du tableau citiesId, 3 constantes : parisId, nycId et othersCitiesId.
const [parisId, nycId, ...otherCitiesId] = citiesId;

// 20 • Afficher dans la console la valeur de constante parisId.
console.log("parisId ==> " + parisId);

// 21 • Afficher dans la console la valeur de constante nycId.
console.log("nycId ==> " + nycId);

// 22 • Afficher dans la console la taille du tableau othersCitiesId.
console.log("otherCitiesId.length ==> " + otherCitiesId.length);

// ------------Classe------------

// 23 • Créer une classe Trip.
class Trip {
    // 24 • Ajouter un constructeur avec les propriétés : id, name, imageUrl.
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    // 28 • Ajouter la méthode toString() à la classe Trip qui permet d’avoir l’affichage ci-après. Afficher dans la console le résultat de son exécution sur l’objet parisTrip
    // 30 • Compléter la méthode toString() pour qu’elle affiche la valeur de _price.
    toString() {
        return 'Trip ['+this.id+', '+this.name+', '+this.imageUrl+', '+this._price+']';
    }

    // 29 • Ajouter un getter et un setter pour la propriété price. La classe sauvegardera la valeur dans une variable privée appellée _price.
    get price() {
        return this._price;
    }
    set price(price) {
        this._price = price;
    }

    // 33 • Ajouter à la classe Trip une méthode statique getDefaultTrip() qui retourne une instance de la classe Trip valorisée avec les informations suivantes :
    static getDefaultTrip(){
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
    }
}

// 25 • Créer un objet parisTrip avec la classe Trip avec les informations suivantes :
let parisTrip = new Trip("paris","Paris","img/paris.jpg");

// 26 • Vérifier le résultat dans la console
console.log("parisTrip ==> " + parisTrip);
console.log("parisTrip.name ==> " + parisTrip.name);

// 27 • Ajouter la méthode toString() à la classe Trip qui permet d’avoir l’affichage ci-après. Afficher dans la console le résultat de son exécution sur l’objet parisTrip.
console.log("parisTrip.toString() ==> " + parisTrip.toString());

// 31 • Valoriser à 100 la propriété price de l’objet parisTrip
parisTrip.price = 100;

// 32 • Afficher dans la console, le résultat de la méthode toString() de l’objet parisTrip.
console.log("parisTrip.toString() ==> " + parisTrip.toString());

// 34 • Créer une constante defaultTrip qui récupère le résultat de l’exécution de la méthode getDefaultTrip().
const defaultTrip = Trip.getDefaultTrip();

// 35 • Afficher dans la console defaultTrip.toString().
console.log("defaultTrip.toString() ==> " + defaultTrip.toString())

// ------------Héritage------------

// 36 • Créer la classe FreeTrip qui étends Trip.
class FreeTrip extends Trip{
    // 37 • Elle se construit avec les informations suivantes : id, name et imageUrl. La propriété price est valorisé par défaut à 0.
    constructor(id, name, imageUrl){
        super(id, name, imageUrl);
        this.price = 0;
    }

    toString(){
        return 'Free'+super.toString();
    }
}

// 38 • Créer une constante freeTrip, instance de la classe FreeTrip avec les informations suivantes :
const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");

// 39 • Afficher dans la console freeTrip.toString()
console.log("freeTrip.toString() ==> " + freeTrip.toString());

// ------------Promise, Set, Map, Arrow Function------------
class TripService {
    constructor() {
        // 40 • Compléter le constructeur de la classe TripService pour initialiser un Set de 3 objet Trip.
        // TODO Set of 3 trips
        this.setTrip = new Set();
        this.setTrip.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.setTrip.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.setTrip.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche

            }, 2000)
        });
    }
}
class PriceService {
    constructor() {
        // TODO Map of 2 trips
        // no price for 'nantes'
        // 41 • Compléter le constructeur de la classe PriceService pour initialiser une Map (clé == identifiant voyage, valeur == prix). Stocker y 2 prix pour les villes Paris et Rio de Janeiro.
        this.map = new Map();
        // 'paris' --> price == 100
        this.map.set('paris', 100);
        // 'rio-de-janeiro' --> price == 800)
        this.map.set('rio-de-janeiro', 800);
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
            // ici l'exécution du code est asynchrone
            // TODO utiliser resolve et reject en fonction du résultat de la recherche
            }, 2000)
        });
    }
}