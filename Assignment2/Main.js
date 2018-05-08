
//================================================
//                  imports
//================================================

const User = require("./User");
const GroupsNode = require("./GroupsNode");
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


//================================================
//                  functions
//================================================

function main() {
    GroupsNode.createRoot();
    /*    console.log(
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
        );*/
    rl.question("My Choice is: ", userInputAnswerMenu);
}

function userInputAnswerMenu(input) {

    switch (Number(input)) {

        case 1: //Create A New User Account
            rl.question("Enter a Username you would like to add: ", User.createNewUser);
            break;

        case 2: //Delete An Existing User Account
            rl.question("Enter a Username you would like to delete: ", User.deleteExistingUser);
            break;

        case 3: // View All Users At WeChat
            User.getAllUsers();
            main();
            break;

        case 4: //Create A New Group
            rl.question("Where would you like to add the group to? press:\n" +
                " [1] for this node\n" +
                " [2] for a child of this node\n I choose: ", GroupsNode.createNewGroup);
            break;

        case 5://Delete An Existing Group
            rl.question("Enter a Group name you would like to delete: ", groups.deleteExistingGroup);
            break;

        case 6: //View all Groups
            getList(groups.getListOfGroups());
            main();
            break;

        case 7: //Add A User to A Group
            rl.question("Enter a Group name you would like to add a user to: ", groups.addUserToGroup);
            break;

        case 8: //Remove A User From A Group
            rl.question("Enter a Group name you would like to remove a user from: ", groups.deleteUserFromGroup);
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