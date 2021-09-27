calculationAge  = (age) => {
    return age *=365;
}
let nextAge = (age) => {
    let num = Number(age);
    return num +=5;
}
 gender = () => {
    let result = confirm("ваш пол женский?")
    if(result){
        result = 'женский';
        return result;
    }
    else{
        result = 'мужской';
        return result;
    }
}
retired = (age, userGender) => {
    let result;
    if(age>56)
    {
        switch(userGender){
            case userGender: 
            if(age < 66 && userGender == 'мужской')
            {
                result = 'нет';
                return result;
                break;
            }
            else{
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
    else{
        result = 'нет';
        return result;
    }
}
function print(calcAge, nextAge, userGender, pension){
    alert("Вашео ФИО:" + surname + " " + name + " " + patronymic + "\n" +
    "Ваш возраст в годах: " + age +"\n" +
    "Ваш возраст в днях: " + calcAge + "\n" +
    "Через 5 лет вам будет: " + nextAge + "\n" +
    "ваш пол: " + userGender + "\n" +
    "вы на пенсии? " + pension);
}
function isString(str){
    for (var i = 0; i < str.length; i++)
     if (/^[a-zA-Zа-яА-ЯЁё]+$/.test(str)){
        return false;
     }
     return true;
}
function isNumber(str){
    for (var i = 0; i < str.length; i++){
        if (/^[0-9]+$/.test(str)){
        return false;
     }
    }
     return true;
}
function addFcs(){
    let name;
    do{
        name = prompt("Введите ваши данные");
    }while(isString(name))
    return name;
}
function inputAge(){
    let age;
    do{
         age = prompt("Ваш возраст");
    }while(isNumber(age) || age < 5 || age > 80)
    return age;
}   
confirm("Введите по очередности в следующих окнах ФИО по отдельности");
let name = addFcs();
let surname = addFcs();
let patronymic = addFcs();
let age = inputAge();
let calcAge = calculationAge(age);
nextAge = nextAge(age);
let userGender = gender();
let pension = retired(age, userGender);
print(calcAge, nextAge, userGender, pension);