const instructors = [
    { name: 'Quincy', specialty: 'Quantam Mechanics', medals: 7 },
    { name: 'Kenn', specialty: 'Norse Mythology', medals: 5 },
    { name: 'Carolyn', specialty: 'Kung Fu', medals: 8 },
    { name: 'Paul', specialty: 'Entomology', medals: 4 },
];

let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].medals >= 5) {
        instructor_names.push(instructors[i].name);
    }
}

console.log(instructor_names);

const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);


// exact same thing, different parameter name
const instructorNamesTwo = instructors.filter(i => i.medals >= 5);
console.log(instructorNamesTwo);