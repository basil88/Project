//================================================
//                  imports
//================================================



//================================================
//                decelerations
//================================================
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var indexToSplice;


//================================================
//                functions
//================================================
function isNameValid(list, name, nameToCheck) {
    for (var i = 0; i < list.length; i++) {
        if (list[i][name] === nameToCheck) {
            indexToSplice = i;
            return true;
        }
    }
    return false;
}

function getList(list){
    for (i = 0; i <list.length; i++){
        console.log(String(i+1)+". " + list[i].getName());
    }
}

function getIndexToSplice() {
    return indexToSplice;
}


//================================================
//                exports
//================================================
module.exports.rl = rl;
module.exports.isNameValid = isNameValid;
module.exports.getList = getList;
module.exports.getIndexToSplice = getIndexToSplice;

