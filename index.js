const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

let pairs = [];

function makePair(arr) {
    
    const girls = arr.filter(name => name.slice(-1) === 'а');
    const boys = arr.filter(name => name.slice(-1) !== 'а');
    console.log(girls);
    console.log(boys);
    for (i = 0; i < boys.length; i++) {
        pairs.push([girls[i], boys[i]])
    }
    
    return pairs;

}

const pairsArr = makePair(students);

console.log(pairsArr);



const pairsWithThemes = pairsArr.reduce((acc, curr, index) => {
    acc[index] = {
        pair: curr,
        theme: themes[index]
    };
    return acc;
}, []);

console.log(pairsWithThemes);


const marksStudents = students.reduce((acc, curr, index) => {
    acc[index] = {
        name: curr,
        marks: marks[index]
    };
    return acc;
}, []);

console.log(marksStudents);


function randomMarks(arr) {
   
    let random = [];
    let random2 = [];

    for (let i = 0; i < pairsArr.length; i++) {
        random.push(Math.floor(Math.random() * (5 - 1 + 1) + 1));
        random2.push(pairsArr[i].concat(random[i]));
    }
    return random2;
}

console.log(randomMarks(pairsArr));