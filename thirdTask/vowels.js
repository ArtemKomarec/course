function forEachVowels() {
    var text = prompt('Input text');
    var number = 0;
    var russianVowel = 'уеыаоэяию';
    Array.from(text).forEach(function (item, i, text) {
        if (russianVowel.includes(item)) {
            number++;
        }
    });
    return number;
}

console.log(forEachVowels());

function filterVowels() {
    var text = prompt('Input text');
    var russianVowel = 'уеыаоэяию';
    var number = [...text].filter(item => russianVowel.includes(item)).length;
    return number;
}

console.log(filterVowels());


function reduceVowels() {
    var text = prompt('Input text');
    var russianVowel = 'уеыаоэяию';
    var number = [...text].reduce((value, item) => russianVowel.includes(item) ? value + 1 : value, 0);
    return number;
}

console.log(reduceVowels());