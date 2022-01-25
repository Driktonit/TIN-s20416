var stdnt = {
    fName: "Nikita",
    lName : "Drik",
    id: 20416,
    info : function() {
        return this.fName + " " + this.lName + " " + this.id;
    },
    changeId : function() {
        id = Math.random(2000,3000);
        return this.id;
    }
}

function showStudent() {
    for (x in stdnt) {
        console.log(stdnt[x] + " is of type ->  " + typeof stdnt[x]);
    }
}
console.log(showStudent());
console.log(stdnt);
