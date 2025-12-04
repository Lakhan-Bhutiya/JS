// =====================================================
// E GETTERS & SETTERS
// =====================================================

class Customer {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toLowerCase();
    }

    set email(value){
        this._email = value.trim();
    }

    get password(){
        return `secure_${this._password}`;
    }

    set password(value){
        this._password = value;
    }
}

const user1 = new Customer("  user@example.com ", "mypwd123");
console.log(user1.email);
console.log(user1.password);
