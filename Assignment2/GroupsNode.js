const main = require("./Main");
const Group = require("./Group");
//===================================
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//==================================
var groupsDatabase = [];

class GroupsNode {
    constructor(groupName) {
        this.groupObject = new Group(groupName);
        this.childrenGroups = [];
    }

    static createRoot(){
        var temp = new GroupsNode("Root");
        groupsDatabase.push(temp);
    }

    static createNewGroup(userInput){
        if (userInput == 1){
           this.getRoot().addAdditionalGroupNode(userInput)
        }
        else if (userInput == 2){

        }
    }

    addAdditionalGroupNode(groupToAdd){
        if (this.getGroupObject().getNumberOfGroupMembers() === 0){
            this.childrenGroups.push(groupToAdd);
            groupsDatabase.push(groupToAdd);
        }
        else {
            console.log("ALREADY CONTAINS USERS");
        }
    }

    removeFromChildGroup(groupToRemove){
        this.childrenGroups.splice(groupToRemove,0);
    }


    getGroupObject(){
        return this.groupObject;
    }

    getChildrenNumber(){
        return this.childrenGroups.length;
    }

    static getRoot(){
        return groupsDatabase[0];
    }

}
module.exports = GroupsNode;