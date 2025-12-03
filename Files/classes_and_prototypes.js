
// Class Example


class Student {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    hashPassword(){
        return `${this.password}@2025`;
    }

    formattedName(){
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }
}

const user1 = new Student("lakhan", "lakhan@example.com", "mypwd");

console.log(user1.hashPassword());
console.log(user1.formattedName());


// Behind the scenes with Prototype

function StudentFn(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
}

StudentFn.prototype.hashPassword = function(){
    return `${this.password}#secure`;
};

StudentFn.prototype.formattedName = function(){
    return this.name.toUpperCase();
};

const user2 = new StudentFn("raj", "raj@example.com", "pass123");

console.log(user2.hashPassword());
console.log(user2.formattedName());
