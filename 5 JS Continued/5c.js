var Courses = { 
    crs: ['aa', 'bb', 'cc', 'dd', 'ee', 'ff']
};

function create(_index, _name, _surname) { 
    var stdnt = Object.create(Courses);
    stdnt.index = _index;
    stdnt.name = _name;
    stdnt.surname = _surname;
    return stdnt;
}

var show = create(20416, 'Nikita', 'Drik');
console.log(show.crs);
console.log(show);
