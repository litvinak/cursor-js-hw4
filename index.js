const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

let pairs = [];



function womanNames(name) {
    return name.endsWith('а');
}



function makePair(arr) {
    let manArr = [];
    let womanArr = [];
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        let name = students[i];
        if(womanNames(name)) {
            womanArr.push(name);
        } else {
        manArr.push(name);

    }
    }

    for(let i = 0; i < manArr.length; i++) {
        newArr.push([manArr[i], womanArr[i]])
    }
    return newArr;
}

const pairsArr = makePair(students);

console.log(pairsArr);



function pairsWithThemes(arr) {
    const pairsWithThemes = pairsArr.reduce((acc, curr, index) => {
        acc[index] = {
            pair: curr,
            theme: themes[index]
        };
        return acc;
    }, []);
    
    console.log(pairsWithThemes);
}

pairsWithThemes();


function marksStudents(arr) {
    const marksStudents = students.reduce((acc, curr, index) => {
        acc[index] = {
            name: curr,
            marks: marks[index]
        };
        return acc;
    }, []);
    
    console.log(marksStudents);
}

marksStudents();


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function randomMarks(arr) {
   
    let random = [];
    let min = 1;
    let max = 5;

    for (let i = 0; i < arr.length; i++) {
        random.push(randomNumber(min, max));
    }
    return random;
}

console.log(randomMarks(pairsArr));