class User{
    constructor(name, surname, patronymic, age) {
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.age = age;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length < 2)
        {
            return; // я бы добавил здесь алерт, но только один раз можно использовать
        }
        else
        {
            this._name = value;
        }
    }
    get surname(){
        return this._surname;
    }
    set surname(value){
        if(value.length < 4)
        {
            return; // я бы добавил здесь алерт, но только один раз можно использовать
        }
        else
        {
            this._surname = value;
        }
    }
    get patronymic(){
        return this._patronymic;
    }
    set patronymic(value){
        if(value.length < 4)
        {
            return; // я бы добавил здесь алерт, но только один раз можно использовать
        }
        else
        {
            this._patronymic = value;
        }
    }
    get age(){
        return this._age;
    }
    set age(value){
        {
            this._age = value;
        }
    }
    calculationAge  = (age) => {
        return age *=365;
    }
    nextAge  = (age) => {
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
    print(calcAge, nextAge, userGender, pension){
        alert("Вашео ФИО:" + surname + " " + name + " " + patronymic + "\n" +
        "Ваш возраст в годах: " + age +"\n" +
        "Ваш возраст в днях: " + calcAge + "\n" +
        "Через 5 лет вам будет: " + nextAge + "\n" +
        "ваш пол: " + userGender + "\n" +
        "вы на пенсии? " + pension);
    }

    
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
let user = new User(name, surname, patronymic, age);
let calcAge = user.calculationAge(age);
let nextAge = user.nextAge(age);
let userGender = user.gender();
let pension = user.retired(age, userGender);
user.print(calcAge, nextAge, userGender, pension);