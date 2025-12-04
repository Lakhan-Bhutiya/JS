
// GETTERS & SETTERS USING DEFINEPROPERTY INSIDE FUNCTION

function Profile(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get() {
            return this._email.toLowerCase();
        },
        set(value) {
            this._email = value;
        }
    });

    Object.defineProperty(this, "password", {
        get() {
            return `hashed_${this._password}`;
        },
        set(value) {
            this._password = value;
        }
    });
}

const p1 = new Profile("HELLO@MAIL.COM", "Secret");
console.log(p1.email);
console.log(p1.password);
