const GroupsNode = require("./GroupsNode");
const User = require("./User");

var root = new GroupsNode("Root");
var movies = new GroupsNode("Movies");
var mj = new User("Mike");


root.addAdditionalNode(movies);
root.addMemberToGroup(mj);

console.log(root);



