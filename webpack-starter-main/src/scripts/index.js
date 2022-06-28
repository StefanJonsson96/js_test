import '../styles/index.scss';
let test = true;
if (test === true)
{
    var carId = 69;
}
console.log('Hello world :)');
console.log(carId);
// var bryr sig inte om scope, let har block scope som i c#
// om du försöker komma åt icke deklarerad variabel med let, error.
// om du försöker komma åt icke deklarerad variabel med var, undefined.v

function sendCars(day, ...allCarIds) {
    allCarIds.forEach( id => console.log(id));
    console.log(day);
}

sendCars("monday", 10, 20, 30, 40);
sendCars("friday", 100, 200, 300);
//om du säger ...variabelNamn som jag gjort ovan. då förväntar sig function flera parametrar, läs mer om rest parameters.
//antal parametrar behövs inte sägas innan. därför funkar koden med både 3 eller 4 bilar.
// du kan ha vanliga parametrar ihop med rest parameters, men rest parameters måste va sist.
// du får bara ha en rest parameter

function startCars(car1, car2, car3) {
    console.log(car1, car2, car3);
}

let _carIds = [100, 300, 500];
let __carIds = "abc";
startCars(..._carIds);
startCars(...__carIds);

// här är motsatsen till rest, kallas för spread syntax.
// functionen får alltså resterande variabler i arrayen, istället för att skapa en variabel i functionen
// du kan också köra spread syntax mot en sträng, för den är också iterable. 
// då får du varje char som en parameter

let carIds = [1, 2, 3, 4, 10];
let [car1, car2, car3, car4, car5] = carIds;

console.log(car1, car2, car3, car4, car5);

// array destructing, här kan jag deklarera variabeler med data från en array
// array []
let car = { id: 500, style:"cab" };
let { id, style } = car;

console.log(id, style);
// du kan också göra destrunc emot objekt, här så fick variablerna id & style, den första och andra propertyn från objektet
// object {}


let _1 = typeof(true); // true - boolean
let _2 = typeof(1); // 1 - number
let _3 = typeof('sträng'); // enkelfnuttsträng - string
let _4 = typeof("sträng"); // dubbelfnuttsträng - string 
let _5 = typeof(function(){}); // function - function
let _6 = typeof(car); // car object - object
let _7 = typeof(null); // null - object
let _8 = typeof(undefined); // undefined - undefined
let _9 = typeof(NaN); // NaN - number

console.log(_1, _2, _3, _4, _5, _6, _7, _8, _9);

// precis som i php kan vi kolla vad vi har för datatyp.

console.log(typeof(Number.parseInt("69420")));
console.log(typeof(Number.parseFloat("55uwigiuharehuui")));

// Number.parseInt för att casta till int, Number.parseFloat för float etc, google it!
// Den slutar parsa när vi kommer åt karaktärer, så istället för att programmet crashar så får vi 55 här.
// Måste dock börja på ett nummer, så om bokstäverna var innan 55 hade vi fått NaN not a number.
// båda blir dock number!


let _num = 1;
let i = 0;
for (; i<12; i++)
{
    _num++;
}
console.log(_num);

// du måste inte deklarara i innuti en for loop, här så gör jag det raden innan, semikolon måste dock va kvar!
// break och continue finns som i c#


let s = "1";
let d = 1;

if (s == d)
{
    console.log("true");
}
else
{
    console.log("false");
}
if (s === d)
{
    console.log("true");
}
else
{
    console.log("false");
}

// === för att kolla om två värden är samma OCH samma datatyp
// == kommer att försöka casta
