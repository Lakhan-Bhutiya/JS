
// Promise One


const promiseOne = new Promise(function(resolve, reject) {
    // async work → API call, DB work etc.
    setTimeout(function() {
        console.log("Background task completed");
        resolve();
    }, 1000);
});

promiseOne.then(function() {
    console.log("Promise One Executed");
});



// Promise Two (Inline Promise)

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Running second async operation");
        resolve();
    }, 1000);
}).then(function() {
    console.log("Promise Two Finished");
});


// Promise Three (Returning Data)


const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        product_info = { 
            user: "aaa", 
            city: "AHEm" 
        }
        resolve(product_info);
    }, 1000);
});

promiseThree.then(function(info) {
    console.log(info);
});



// Promise Four (Resolve + Reject + Chaining)


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;

        if (!error) {
            resolve({ 
                product: "Laptop", 
                price: 882282 
            });
        } else {
            reject("ERROR: Unable to fetch product details");
        }

    }, 1000);
});

promiseFour
    .then((item) => {
        console.log(item);
        return item.product;
    })
    .then((productName) => {
        console.log("Product Name:", productName);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => console.log("Promise Four complete"));

// Promise Five (Async/Await)


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;

        if (!error) {
            resolve({ 
                course: "JavaScript", 
                level: "Intermediate" 
            });
        } else {
            reject("ERROR: Course data not found");
        }

    }, 1200);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log("Caught Error:", error);
    }
}

consumePromiseFive();


// Fetch API Example


fetch("https://jsonplaceholder.typicode.com/todos/5")
    .then((res) => res.json())
    .then((data) => console.log("Fetched Data:", data))
    .catch((err) => console.log("Fetch Error:", err));



// Promise.all Example


const p1 = Promise.resolve("Immediate Success");
const p2 = new Promise((resolve) => setTimeout(resolve, 1200, "Delayed Success"));
const p3 = new Promise((resolve) => setTimeout(resolve, 600, "Medium Success"));

Promise.all([p1, p2, p3])
    .then((results) => console.log("All Results:", results))
    .catch((error) => console.log("Error in Promise.all:", error));

