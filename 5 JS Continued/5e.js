class Student {
    constructor(index, name, surname, grades) {
        this.id = index;
        this.name = name;
        this.surname = surname;
        this.grades = grades;
    }

    showStudent() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += parseInt(this.grades[i], 10)
        }
        return this.name + " " + this.surname + "// Avarage grade:" + sum / this.grades.length;
    };

    get fullName() {
        return this.name + ' ' + this.surname;
    }

    get average() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += parseInt(this.grades[i], 10);
        }
        return sum / this.grades.length;
    }

    set fullName(name) {
        var words = name.split(' ');
        this.name = words[0] || '';
        this.surname = words[1] || '';
    }
}

var s1 = new Student(1, 'Nikita', 'Drik', [3,4,5,5]);

console.log(s1.showStudent());


s1.fullName = 'Nikita Drik';
console.log(s1.fullName);
console.log(s1.average);