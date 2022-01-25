function Student(name, surname, index, gradesArr) {
    this.name = name;
    this.surname = surname;
    this.index = index;
    this.grades = gradesArr;

this.showStudent = function() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += parseInt(this.grades[i], 10)
        }
        var avg = sum/this.grades.length;
        return this.name + " " + this.surname + "// Avarage grade is" + avg;
    };
}

var s20416 = new Student("Nikita", "Drik", 20416, [2,4,5,5]);

console.log(s20416.showStudent());