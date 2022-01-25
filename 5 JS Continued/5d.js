function Student(index, name, surname, grades) {
    this.id = index;
    this.name = name;
    this.surname = surname;
    this.grades = grades;
    
    this.showStudent = function() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += parseInt(this.grades[i], 10)
        }
        var avg = sum / this.grades.length;
        return this.name + " " + this.surname + "// Average grade:" + avg;
    };
}

var s1 = new Student(1, "Nikita", "Drik", [3, 4, 5, 5]);

Object.defineProperty(s1, 'average', {
    get: function() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += parseInt(this.grades[i], 10);
        }
        var avg = sum / this.grades.length;
        return avg;
    }
});

Object.defineProperty(s1, 'fullName', {
    get: function() {
        return this.name + ' ' + this.surname;
    },
    set: function(name) {
        var words = name.split(' ');
        this.name = words[0] || '';
        this.surname = words[1] || '';
    }
});

s1.fullName = "Nikita Drik";
console.log(s1.fullName);
console.log(s1.average);