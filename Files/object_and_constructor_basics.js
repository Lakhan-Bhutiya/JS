// =====================================================
// OBJECT WITH METHODS + "this" KEYWORD


const customer = {
    name: "Lakhan",
    orders: 5,
    isPremium: true,

    getCustomerDetails: function() {
        console.log("Fetching customer details...");
        console.log(`Customer Name: ${this.name}`);
        console.log(`Orders Placed: ${this.orders}`);
        console.log(`Premium Member: ${this.isPremium}`);
        console.log("Current Object:", this);   // 'this' refers to the customer object
    }
};

// customer.getCustomerDetails();



// =====================================================
// CONSTRUCTOR FUNCTION (OOP Style)
// =====================================================

function Account(holderName, balance, isActive) {
    this.holderName = holderName;
    this.balance = balance;
    this.isActive = isActive;

    this.welcomeMessage = function() {
        console.log(`Hello ${this.holderName}, welcome to your dashboard!`);
    };

    // NOTE: We don't manually return anything.
    // 'new' automatically returns the created object.
}

const acc1 = new Account("Rohan", 25000, true);
const acc2 = new Account("Meera", 12000, false);

// Testing created objects
acc1.welcomeMessage();           // Hello Rohan...
acc2.welcomeMessage();           // Hello Meera...

// Checking constructor reference
console.log(acc1.constructor);    // function Account(...)
