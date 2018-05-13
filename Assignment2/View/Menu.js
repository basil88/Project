const GroupController = require("../Controller/GroupController");
const UserController = require("../Controller/UserController");
const rl = require("../Controller/ReadlineController");

function start() {
    console.log(
        "\n==================Main Menu===============\n" +
        "[1] Go To User Menu\n" +
        "[2] Go To Group Menu\n" +
        "[3] Go To User-Group Association Menu\n" +
        "--------------------------------------------");
    rl.rl.question("My Choice is: ", function(answer){
        switch (Number(answer)) {
            case 1:
                userMenu();
                break;
            case 2:
                groupMenu();
                break;
            case 3:
                userGroupMenu();
                break;
            default:
                console.log("invalid choice");
                start();
                break;
        }

    });
}

function userMenu() {
    console.log(
        "\n==================USER MENU===============\n" +
        "[1] Add New User\n" +
        "[2] Delete Existing User\n" +
        "[3] Print A List of All Users\n" +
        "[4] Return To Main Menu\n" +
        "--------------------------------------------");
    rl.rl.question("My Choice Is: ", function (answer) {
        switch (Number(answer)) {
            case 1:
                rl.rl.question("Enter Username: ", UserController.addNewUser);
                break;
            case 2:
                rl.rl.question("Enter Username to delete: ", UserController.deleteExistingUser);
                break;
            case 3:
                UserController.getUsersList();
                break;
            case 4:
                start();
                break;
            default:
                console.log("invalid choice");
                userMenu();
                break;
        }
    })
}

function groupMenu() {
    console.log(
        "\n==================GROUP MENU===============\n" +
        "[1] Create New Group\n" +
        "[2] Delete Existing Group\n" +
        "[3] Print A List of All Groups\n" +
        "[4] Return To Main Menu\n" +
        "----------------------------------------------");
    rl.rl.question("My Choice Is: ", function (answer) {
        switch (Number(answer)) {
            case 1:
                GroupController.chooseParentGroup();
                break;
            case 2:
                GroupController.chooseGroupToDelete();
                break;
            case 3:
                GroupController.printGroups();
                break;
            case 4:
                start();
                break;
            default:
                console.log("invalid choice");
                groupMenu();
                break;
        }
    })
}

function userGroupMenu() {
    console.log(
        "\n==================USER-GROUP MENU===============\n" +
        "[1] Add User To Group\n" +
        "[2] Remove User From Group\n" +
        "[3] Print A List of All Groups\n" +
        "[4] Return To Main Menu\n" +
        "----------------------------------------------");
    rl.rl.question("My Choice Is: ", function (answer) {
        switch (Number(answer)) {
            case 1:
                //GroupController.chooseParentGroup();
                break;
            case 2:
                //GroupController.chooseGroupToDelete();
                break;
            case 3:
                //GroupController.printGroups();
                break;
            case 4:
                start();
                break;
            default:
                console.log("invalid choice");
                userGroupMenu();
                break;
        }
    })
}

module.exports.start = start;

start();