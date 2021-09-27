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
function addUser(){
    let name;
    do{
        name = prompt("Введите ваше Имя");
    }while(isString(name))
    return name;
}
function addSurname(){
    let name;
    do{
        name = prompt("Введите вашу фамилию");
    }while(isString(name))
    return name;
}
function addPatronymic(){
    let name;
    do{
        name = prompt("Введите ваше очество");
    }while(isString(name))
    return name;
}
function inputAge(){
    let age;
    do{
         age = prompt("Ваш возраст");
    }while(isNumber(age))
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
for(let i = 0; i<6; i++)
{
    switch(i){
        case 0:
            document.getElementsByTagName("p")[i].innerHTML += user + " " + surname + " " + patronymic;
        break;
        case 1:
            document.getElementsByTagName("p")[i].innerHTML += age; 
        break;
        case 2:
            document.getElementsByTagName("p")[i].innerHTML += dayAge; 
        break;
        case 3:
            document.getElementsByTagName("p")[i].innerHTML += calcAge; 
        break;
        case 4:
            document.getElementsByTagName("p")[i].innerHTML += userGender; 
        break;
        case 5:
            document.getElementsByTagName("p")[i].innerHTML += pension; 
        break;
    }

}
