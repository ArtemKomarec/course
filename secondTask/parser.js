function vowels() {
    var text = prompt("Input text");
    var number = 0;
    var russianVowel = ['у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'ю'];
    for (var i = 0; i < text.length; i++) {
        for (var j = 0; j < russianVowel.length; j++) {
            if (text[i] === russianVowel[j]) {
                ++number;
                break;
            }
        }
    }
    return alert(number);
}
console.log(vowels());