calculationAge = (age) => {
    return age *= 365;
}
let nextAge = (age) => {
    let num = Number(age);
    return num += 5;
}
gender = () => {
    let result = confirm("ваш пол женский?")
    if (result) {
        result = 'женский';
        return result;
    }
    else {
        result = 'мужской';
        return result;
    }
}
retired = (age, userGender) => {
    let result;
    if (age > 56) {
        switch (userGender) {
            case userGender:
                if (age < 66 && userGender == 'мужской') {
                    result = 'нет';
                    return result;
                    break;
                }
                else {
                    result = 'да';
                    return result;
                    break;
                }
            default:
                result = 'да';
                return result;
                break;
        }
    }
    else {
        return 'нет';
    }
}
function notValidString(str) {
    for (var i = 0; i < str.length; i++)
        if (/^[a-zA-Zа-яА-ЯЁё]+$/.test(str)) {
            return false;
        }
    return true;
}
function isNumber(str) {
    for (var i = 0; i < str.length; i++) {
        if (/^[0-9]+$/.test(str)) {
            return false;
        }
    }
    return true;
}
function addUser() {
    let name;
    do {
        name = prompt("Введите ваше Имя");
    } while (notValidString(name))
    return name;
}
function addSurname() {
    let name;
    do {
        name = prompt("Введите вашу фамилию");
    } while (notValidString(name))
    return name;
}
function addPatronymic() {
    let name;
    do {
        name = prompt("Введите ваше очество");
    } while (notValidString(name))
    return name;
}
function inputAge() {
    let age;
    do {
        age = prompt("Ваш возраст");
    } while (isNumber(age))
    return age;
}
let user = addUser();
let surname = addSurname();
let patronymic = addPatronymic();
let age = inputAge();
let dayAge = calculationAge(age);
let calcAge = nextAge(age);
let userGender = gender();
let pension = retired(age, userGender);
document.getElementsByTagName("p")[0].innerHTML += user + " " + surname + " " + patronymic;
document.getElementsByTagName("p")[1].innerHTML += age;
document.getElementsByTagName("p")[2].innerHTML += dayAge;
document.getElementsByTagName("p")[3].innerHTML += calcAge;
document.getElementsByTagName("p")[4].innerHTML += userGender;
document.getElementsByTagName("p")[5].innerHTML += pension;