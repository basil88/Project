const User = require("./User");
//===================================
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//==================================

let counter = 0;

module.exports = class Group {
    constructor(groupName) {
        this.groupName = groupName;
        this.groupMembers = [];
        this.groupId = ++counter;
    }


    getNumberOfGroupMembers(){
        return this.groupMembers.length;
    }

    getGroupName(){
        return this.groupName;
    }


};