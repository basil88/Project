const menu = require("../View/Menu.js");
const Group = require("../Module/Group");
const rl = require("./ReadlineController");

let root = new Group("Root");

function chooseParentGroup() {
    chooseParentGroupAux(root);
}

function chooseParentGroupAux (currentGroup){
    if (!currentGroup.getChildren().length){
        rl.rl.question("Enter name of the group you would like to add: ", function (answer){
            if(currentGroup.addGroupChildren(answer)){
                console.log("Added Successfully");
                menu.start();
            }
            else {
                console.log("Adding Failed");
                menu.start();
            }
        })
    }
    else {
        console.log("Where would you like to add the group to? Press [0] to add to current group," +
            " or enter a name of a child of this group, as detailed below: ");
        currentGroup.getListOfChildren();
        rl.rl.question("My choice is: ", function (answer){
            if (Number(answer) === 0) {
                rl.rl.question("Enter name of the group you would like to add: ", function (answer){
                    if(currentGroup.addGroupChildren(answer)){
                        console.log("Added Successfully");
                        menu.start();
                    }
                    else {
                        console.log("Adding Failed");
                        menu.start();
                    }
                })
            }
            else {
                chooseParentGroupAux(currentGroup.fetchGroup(answer));
            }

        })
    }
}

function printGroups (){
    root.printGroupsAux();
}

function chooseGroupToDelete() {
    chooseGroupToDeleteAux(root);
}

function chooseGroupToDeleteAux(currentGroup){
    if (!currentGroup.getChildren().length && currentGroup.getName() === "Root"){
        console.log("Cannot Delete 'Root' Group");
        menu.start();
    }
    else {
        console.log("Press [1] to delete one of the following group, or enter a name to receive its sub groups");
        currentGroup.getListOfChildren();
        rl.rl.question("My choice is: ", function (answer) {
            if (Number(answer) === 1) {
                rl.rl.question("Enter name of the group you want to delete", function (input) {
                    currentGroup.deleteGroup(input);
                });
            }
            else {
                chooseGroupToDeleteAux(currentGroup.fetchGroup(answer));
            }
        })
    }
}




module.exports.chooseParentGroup = chooseParentGroup;
module.exports.chooseGroupToDelete = chooseGroupToDelete;
module.exports.printGroups = printGroups;