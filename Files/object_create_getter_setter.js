// =====================================================
// GETTERS & SETTERS WITH Object.create()
// =====================================================

const BaseUser = {
    _email: "example@mail.com",
    _password: "xyz123",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
};

// Creating new object with BaseUser as prototype
const account = Object.create(BaseUser);
account.email = "newuser@mail.com";

console.log(account.email);
