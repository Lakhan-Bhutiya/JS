// ===================================================================
// CUSTOM PROTOTYPE METHODS (Object + Array)
// ===================================================================

let avengers = ["ironman", "hulk", "blackwidow"];

let heroAbilities = {
    ironman: "tech suit",
    hulk: "super strength",
    blackwidow: "martial arts",

    getHulkPower: function() {
        console.log(`Hulk's power is: ${this.hulk}`);
    }
};

// Adding a global method to ALL objects
Object.prototype.lakhanGlobal = function() {
    console.log("LakhanGlobal() is available in every object");
};

// Adding a method only for arrays
Array.prototype.sayHeroNames = function() {
    console.log("Hero List:", this.join(", "));
};


// heroAbilities.lakhanGlobal();
// avengers.lakhanGlobal();
// avengers.sayHeroNames();
// heroAbilities.sayHeroNames(); //  Only arrays can use this



// ===================================================================
// PROTOTYPE INHERITANCE (Old Style + Modern Style)
// ===================================================================

const BaseUser = {
    username: "devUser",
    email: "dev@example.com"
};

const Instructor = {
    canTeach: true
};

const SupportTeam = {
    online: false
};

const Assistant = {
    assignedTask: "Manage Q&A",
    fullTime: true,
    __proto__: SupportTeam      // old method of prototype linking
};

// Linking Instructor → BaseUser
Instructor.__proto__ = BaseUser;

// Modern way: Linking SupportTeam → Instructor
Object.setPrototypeOf(SupportTeam, Instructor);




// ===================================================================
// STRING PROTOTYPE: TRUE LENGTH METHOD
// ===================================================================

let sampleString = " LakhanCodes    ";

String.prototype.trueLength = function() {
    console.log(`Original String: "${this}"`);
    console.log(`True Length: ${this.trim().length}`);
};

sampleString.trueLength();
"frontend".trueLength();
"backend dev".trueLength();
