
//================================================
//                  imports
//================================================

var user = require("./User");
var groups = require("./Group");
var helpers = require("./Helpers");

//================================================
//                  functions
//================================================

function main() {
    console.log(
        "==================Welcome to WeChat!===============\n\n" +
        "WHAT WOULD YOU LIKE TO DO?\n\n" +
        "-------------------User Menu-----------------------\n" +
        "[1] Create A New User Account\n" +
        "[2] Delete An Existing User Account\n" +
        "[3] View All Users At WeChat\n" +
        "-------------------Group Menu-----------------------\n" +
        "[4] Crate A New Group\n" +
        "[5] Delete An Existing Group\n" +
        "[6] View All Groups At WeChat\n" +
        "-----------User Group Integration Menu-------------\n" +
        "[7] Add A User to A Group\n" +
        "[8] Remove A User From A Group\n" +
        "[9] View All Groups and Their Respective Users\n\n"
    );
    helpers.rl.question("My Choice is: ", userInputAnswerMenu);
}

function userInputAnswerMenu(input) {

    switch (Number(input)) {

        case 1: //Create A New User Account
            helpers.rl.question("Enter a Username you would like to add: ", user.createNewUser);
            break;

        case 2: //Delete An Existing User Account
            helpers.rl.question("Enter a Username you would like to delete: ", user.deleteExistingUser);
            break;

        case 3: // View All Users At WeChat
            helpers.getList(user.getListOfUsers());
            main();
            break;

        case 4: //Create A New Group
            helpers.rl.question("Enter a Group name you would like to add: ", groups.createNewGroup);
            break;

        case 5://Delete An Existing Group
            helpers.rl.question("Enter a Group name you would like to delete: ", groups.deleteExistingGroup);
            break;

        case 6: //View all Groups
            helpers.getList(groups.getListOfGroups());
            main();
            break;

        case 7: //Add A User to A Group
            helpers.rl.question("Enter a Group name you would like to add a user to: ", groups.addUserToGroup);
            break;

        case 8: //Remove A User From A Group
            helpers.rl.question("Enter a Group name you would like to remove a user from: ", groups.deleteUserFromGroup);
            break;

        case 9: //View All Groups and Their Respective Users
            groups.printUsersInGroups();
            main();
            break;

        default:
            console.log("Invalid Input. Please Try Again");
            main();
    }
}

//================================================
//                  run
//================================================

main();

//================================================
//                  exports
//================================================
module.exports.main = main;