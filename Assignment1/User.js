//================================================
//                  imports
//================================================

var helpers = require("./Helpers");
var main = require("./Main");
var groups = require("./Group");

//================================================
//                decelerations
//================================================

var listOfUsers = [];

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
    if (userInput === ""){
        console.log("Name must contain at least one character");
        main.main();

    }
    if (helpers.isNameValid(listOfUsers, "userName", userInput)){
        console.log("Username Already Taken")
        main.main();
    }
    else {
        var username, password, age;
        username = userInput;
        helpers.rl.question("Enter Password: ", enterPassword);

        function enterPassword(userInput) {
            if (userInput === "") {
                console.log("Password must contain at least one character");
                helpers.rl.question("Enter Password: ", enterPassword);
            }
            else {
                password = userInput;
                helpers.rl.question("Enter Age: ", enterAge);
                function enterAge(userInput) {
                    if (userInput === "") {
                        console.log("age must contain at least one character");
                        helpers.rl.question("Enter Age: ", enterAge);
                    }
                    else if (userInput < 1){
                        console.log("age must be grater than 1");
                        helpers.rl.question("Enter Age: ", enterAge);
                    }
                    else {
                        age = userInput;
                        listOfUsers.push(new User(username, password, age));
                        main.main();
                    }

                }
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
