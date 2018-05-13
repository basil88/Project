class Group {

    constructor(groupName) {
        this.groupName = groupName;
        this.groupMembers = [];
        this.groupChildren = [];
    }

    getName(){
        return this.groupName;
    }

    getMembers(){
        return this.groupMembers;
    }

    getChildren(){
        return this.groupChildren;
    }

    getListOfChildren(){
        for (var i = 0; i < this.getChildren().length; i++){
            console.log((i+1) + ". " + this.getChildren()[i].getName())
        }
    }

    fetchGroup(name) {
        for (var i = 0; i < this.getChildren().length; i++) {
            if (this.getChildren()[i].getName() === name) {
                return this.getChildren()[i];
            }
        }
        console.log("INVALID NAME"); //todo: handle case in which user enters a wrong input
    }

    addGroupMemebers(userToAdd){
        if (this.groupChildren.length !== 0) return false;
        else {
            this.groupMembers.push(userToAdd);
            return true;
        }
    }

    addGroupChildren(groupToAdd){
        if (this.getMembers.length !== 0){
            console.log("Group already contains users and cannot contain other groups");
            return false;
        }
        else {
            for (var i = 0; i < this.groupChildren.length; i++){
                if (this.groupChildren[i].getName() === groupToAdd){
                    console.log("Group already contains another group with the same name");
                    return false;
                }
            }
            this.groupChildren.push(new Group(groupToAdd));
            console.log("group added!");
            return true;
        }
    }

    deleteGroup(groupToDelete) { //todo - understand how to delete a group
        for (var i = 0; i < this.groupChildren.length; i++) {
            if (this.groupChildren[i].getName() === groupToDelete){
                this.groupChildren.splice(i, 0);
                return true;
            }
        }
    }


    printGroupsAux (){
        for (var i = 0; i < this.getChildren().length; i++){
            console.log(this.getChildren()[i].getName());
            this.getChildren()[i].printGroupsAux();
        }
    }

}

module.exports = Group;

