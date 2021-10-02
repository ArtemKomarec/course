function vowels() {
    var text = prompt('input text');
    var number = 0;
    var russianVowel = 'уеыаоэяию';
    for (let value of text) {
        if(russianVowel.includes(value)) {
            number++;
        }
    }
    return number;
}
console.log(vowels());
