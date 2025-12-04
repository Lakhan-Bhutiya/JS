
// PROPERTY DESCRIPTORS + DEFINEPROPERTY
// Descriptor of Math.PI (read-only)
console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

const coffee = {
    name: "Filter Coffee",
    price: 120,
    inStock: true,
    order() {
        console.log("Preparing your coffee...");
    }
};

// Read descriptor before modification
console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

// Modify descriptor
Object.defineProperty(coffee, "name", {
    enumerable: true,
    writable: false,
});

console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

// Loop only through non-function properties
for (let [key, value] of Object.entries(coffee)) {
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`);
    }
}
