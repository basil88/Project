//================================================
//                  imports
//================================================

var helpers = require("./Helpers");
var main = require("./Main");
var user = require("./User");

//================================================
//                decelerations
//================================================

var listOfGroups = [];
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
            console.log(listOfGroups[groupIndexGetter].listOfUsersInGroup);
            if (listOfGroups[groupIndexGetter].listOfUsersInGroup[0].userName === userInput){
                console.log("User already in group");
                main.main();
            }
            else if (helpers.isNameValid(user.getListOfUsers(), "userName", userInput)) {
                listOfGroups[groupIndexGetter].listOfUsersInGroup.push(user.getSpecificUser(helpers.getIndexToSplice()))
                console.log(listOfGroups);
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

function printUsersInGroups() {
    for (var i = 0; i < listOfGroups.length; i++) {
        console.log("The Group '" + listOfGroups[i].getName() + "' contains the following users:");
        for (var j = 0; j < listOfGroups[i].listOfUsersInGroup.length; j++) {
            console.log(listOfGroups[i].listOfUsersInGroup[j].userName);
        }
    }
}

/*for (var i = 0; i < listOfGroups[groupIndexGetter].listOfUsersInGroup.length; i++){
    if (listOfGroups[groupIndexGetter].listOfUsersInGroup[i])
}*/

//================================================
//                  exports
//================================================

module.exports.createNewGroup = createNewGroup;
module.exports.deleteExistingGroup = deleteExistingGroup;
module.exports.getListOfGroups = getListOfGroups;
module.exports.addUserToGroup = addUserToGroup;
module.exports.deleteUserFromGroup = deleteUserFromGroup;
module.exports.printUsersInGroups = printUsersInGroups;


