
// FUNCTIONS IN JAVASCRIPT ARE ALSO OBJECTS


// A normal function
function multiplyBy10(num) {
    return num * 10;
}

// Adding a custom property to a function (because functions are objects)
multiplyBy10.author = "Lakhan";
multiplyBy10.description = "Multiplies a number by 10";

// Every function also has a default prototype object
console.log(multiplyBy10(5));                // 50
console.log(multiplyBy10.author);            // "Lakhan"
console.log(multiplyBy10.prototype);         // {}

// =====================================================
// CONSTRUCTOR FUNCTION + PROTOTYPES


// Constructor function to create Player objects
function Player(name, score, role) {
    this.name = name;
    this.score = score;
    this.role = role;
}

// Adding methods to the prototype (shared across all Player objects)
Player.prototype.increaseScore = function() {
    this.score += 10;
};

Player.prototype.describe = function() {
    console.log(`${this.name} (${this.role}) has ${this.score} points.`);
};

// Creating two players
const player1 = new Player("Ramesh", 40, "Batsman");
const player2 = new Player("Suresh", 55, "Bowler");

// Calling prototype methods
player1.increaseScore();
player1.describe(); // Ramesh (Batsman) has 50 points.

player2.increaseScore();
player2.describe(); // Suresh (Bowler) has 65 points.
