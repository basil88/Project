//================================================
//                  imports
//================================================

var helpers = require("./Helpers");
var main = require("./Main");
var user = require("./User");

//================================================
//                decelerations
//================================================

var listOfGroups = [new Group("sport"), new Group("movies"), new Group("pets"), new Group("fishing")];
var groupIndexGetter;

//================================================
//                  functions
//================================================

function Group(groupName) {
    this.groupName = groupName;
    this.listOfUsersInGroup = [];
}

Group.prototype.getName = function(){
    return this.groupName;
};

function createNewGroup(userInput) {
    if (helpers.isNameValid(listOfGroups, "groupName", userInput)){
        console.log("Group Name Already Taken");
    }
    else {
        listOfGroups.push(new Group(userInput));
        console.log(listOfGroups);
    }
    main.main();
}

function deleteExistingGroup(userInput) {
    if (helpers.isNameValid(listOfGroups, "groupName", userInput)){
        listOfGroups.splice(helpers.getIndexToSplice(), 1);
        console.log("Group deleted");
    }
    else {
        console.log("Group does not exist");
    }
    main.main();
}

function getListOfGroups(){
    return listOfGroups;
}

function addUserToGroup (userInput) {
    if (helpers.isNameValid(listOfGroups, "groupName", userInput)) {
        groupIndexGetter = helpers.getIndexToSplice();
        helpers.rl.question("Enter a Username you would like to add: ", getUsernameToBeAdded);

        function getUsernameToBeAdded(userInput) {
            var temp = userInput;
            var applicableArrLength = Number(listOfGroups[groupIndexGetter].listOfUsersInGroup.length);
            if (helpers.isNameValid(user.getListOfUsers(), "userName", temp) && (applicableArrLength === 0 || !userNotInGroup(temp))) {
                listOfGroups[groupIndexGetter].listOfUsersInGroup.push(user.getSpecificUser(helpers.getIndexToSplice()));
                console.log(listOfGroups);
                main.main();
            }
            else if ((helpers.isNameValid(user.getListOfUsers(), "userName", temp) && userNotInGroup(temp))) {
                console.log("User already assigned to group");
                main.main();
            }
            else {
                console.log("User does not exist");
                main.main();
            }
        }

    }
    else {
        console.log("Group does not exist");
        main.main();
    }

    function userNotInGroup(userInput) {
        for (var i = 0; i < listOfGroups[groupIndexGetter].listOfUsersInGroup.length; i++) {
            return listOfGroups[groupIndexGetter].listOfUsersInGroup[i].userName === userInput;
        }
    }
}

function deleteUserFromGroup (userInput) {
    if (helpers.isNameValid(listOfGroups, "groupName", userInput)) {
        groupIndexGetter = helpers.getIndexToSplice();
        helpers.rl.question("Enter a Username you would like to remove: ", getUsernameToBeRemoved);

        function getUsernameToBeRemoved(userInput) {
            if (helpers.isNameValid(user.getListOfUsers(), "userName", userInput)) {
                listOfGroups[groupIndexGetter].listOfUsersInGroup.splice(user.getSpecificUser(helpers.getIndexToSplice()),1);
                console.log(listOfGroups);
                main.main();
            }
            else{
                console.log("User does not exist");
                main.main();
            }
        }
    }
    else {
        console.log("Group does not exist");
        main.main();
    }
}

function deleteUserFromAllGroups(userInput) {
    for (var i = 0; i < listOfGroups.length; i++){
        for (var j = 0; j < listOfGroups[i].listOfUsersInGroup.length; i++){
            if (listOfGroups[i].listOfUsersInGroup[j] !== undefined &&
                listOfGroups[i].listOfUsersInGroup[j].userName === userInput) {
                listOfGroups[i].listOfUsersInGroup.splice(j, 1);
            }
        }
    }

}

function printUsersInGroups() {
    for (var i = 0; i < listOfGroups.length; i++) {
        console.log("The Group '" + listOfGroups[i].getName() + "' contains the following users:");
        for (var j = 0; j < listOfGroups[i].listOfUsersInGroup.length; j++) {
            console.log(listOfGroups[i].listOfUsersInGroup[j].userName);
        }
    }
}

//================================================
//                  exports
//================================================

module.exports.createNewGroup = createNewGroup;
module.exports.deleteExistingGroup = deleteExistingGroup;
module.exports.getListOfGroups = getListOfGroups;
module.exports.addUserToGroup = addUserToGroup;
module.exports.deleteUserFromGroup = deleteUserFromGroup;
module.exports.printUsersInGroups = printUsersInGroups;
module.exports.deleteUserFromAllGroups = deleteUserFromAllGroups;