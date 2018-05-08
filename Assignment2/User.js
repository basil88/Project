var main = require("./Main");

var userDatabase = [];
var id = 0;

class User {

    constructor(name/*, age, password*/){
        this.userName = name;
        /*this.userAge = age;
        this.userPassword = password;*/
        this.userId = ++id;
    }


    static createNewUser(name/*, age, password*/){
        let user = new User(name/*, age, password*/);
        userDatabase.push(user);
        main.main();

    }

    getName (){
        return this.userName;
    }

    getId(){
        return this.userId;
    }

    static getAllUsers(){
        for (var i = 0; i <userDatabase.length; i++){
            console.log(userDatabase[i].getName());
        }

    }

}

module.exports = User;

