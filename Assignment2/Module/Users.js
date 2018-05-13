const User = require("./User");

class Users {

    constructor(){
        this.usersDatabase = [];
    }

    addUser(newUserName, newUserPassword, newUserAge){
        for (var i = 0; i < this.usersDatabase.length; i++){
            if (this.usersDatabase[i].getName() === newUserName){
                return false;
            }
        }
        this.usersDatabase.push(new User(newUserName, newUserPassword, newUserAge));
        return true;
    }

    getUsers(){
        return this.usersDatabase;
    }


}
module.exports = Users;