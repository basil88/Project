const menu = require("../View/Menu.js");
const Users = require("../Module/Users");
const rl = require("../Controller/ReadlineController");

let db = new Users();

function addNewUser(userInput) {
    var username, password, age;
    username = userInput;
    rl.rl.question("Enter password: ", function (answer) {
        password = answer;
        rl.rl.question("Enter Age: ", function (temp) {
            age = temp;
            if (db.addUser(username, password, age)) menu.start();
            else {
                console.log("already has a user with the same name");
                menu.start();
            }
        })
    })
}

function deleteExistingUser(userToDelete) {
    for (var i = 0; i < db.getUsers().length; i++){
        if (db.getUsers()[i].getName() === userToDelete){
            db.getUsers().splice(i,1);
            console.log("User deleted");
            menu.start();
        }
        else {
            console.log("User not found");
            menu.start();
        }
    }
}

function getUsersList() {
    for (var i = 0; i < db.getUsers().length; i++){
        console.log((i+1) + ". " + db.getUsers()[i].getName());
    }
    menu.start();
}

module.exports.addNewUser = addNewUser;
module.exports.getUsersList = getUsersList;
module.exports.deleteExistingUser = deleteExistingUser