module.exports = class User{

    constructor(name, age, password){
        this.userName = name;
        this.userPassword = password;
        this.userAge = age;
    }

    getName(){
        return this.userName;
    }

};