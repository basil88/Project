//================================================
//                  imports
//================================================

var helpers = require("./Helpers");
var main = require("./Main");
var groups = require("./Group");

//================================================
//                decelerations
//================================================

var listOfUsers = [new User ("david", 11, 20), new User ("avi", 11, 20), new User ("gal", 11, 20), new User ("dov", 11, 20),
    new User ("shir", 11, 20), new User ("lee", 11, 20), new User ("yoav", 11, 20) ];

//================================================
//                  functions
//================================================

function User(userName, userPassword, userAge) {
    this.userName = userName;
    this.userPassword = userPassword;
    this.userAge = userAge;
}

User.prototype.getName = function() {
    return this.userName;
};

function getSpecificUser (index){
    return listOfUsers[index];
}

function createNewUser(userInput) {
    if (helpers.isNameValid(listOfUsers, "userName", userInput)){
        console.log("Username Already Taken")
        main.main();
    }
    else {
        var username, password, age;
        username = userInput;
        helpers.rl.question("Enter Password: ", enterPassword);

        function enterPassword(userInput) {
            password = userInput;
            helpers.rl.question("Enter Age: ", enterAge);

            function enterAge(userInput) {
                age = userInput;
                listOfUsers.push(new User(username, password, age));
                console.log(listOfUsers);
                main.main();
            }
        }
    }
}

function deleteExistingUser(userInput) {
    if (helpers.isNameValid(listOfUsers, "userName", userInput)){
        listOfUsers.splice(helpers.getIndexToSplice(), 1);
        groups.deleteUserFromAllGroups(userInput);
        console.log("User deleted");
    }
    else {
        console.log("Username does not exist");
    }
    main.main();
}

function getListOfUsers() {
    return listOfUsers;
}


//================================================
//                  exports
//================================================

module.exports.User = User;
module.exports.createNewUser = createNewUser;
module.exports.deleteExistingUser = deleteExistingUser;
module.exports.getListOfUsers = getListOfUsers;
module.exports.getSpecificUser = getSpecificUser;
