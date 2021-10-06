function HashStorageFunc() {
    let storage = {};

    this.addValue = function (key, value) {
        storage[key] = value;
    }

    this.getValue = function (key) {
        return storage[key];
    }

    this.deleteValue = function (key) {
        if (!(key in storage)) {
            return false;
        }
        delete storage[key];
        return true;
    }

    this.getKeys = function () {
        return Object.keys(storage);
    }
}

let drinkStorage = new HashStorageFunc();

function addDrink() {
    let name = prompt("Введите название вашего напитка");
    name = isBlank(name);
    let alcohol = confirm("Ваш напиток алкогольный? да - ок, нет - отмена.");
    alcohol ? alcohol = 'да' : alcohol = 'нет';
    let formula = prompt("Введите рецепт приготовления");
    formula = isBlank(formula);
    drinkStorage.addValue(name, { isAlcohol: alcohol, recept: formula });
}

function getAllDrinks() {
    alert(drinkStorage.getKeys());
}

function getDrinkInfo() {
    let name = prompt("Введите название напитка");
    name = isBlank(name);
    let info = drinkStorage.getValue(name);
    drinkStorage.getValue(name) ? alert("напиток " + name + "\n" + "алкогольный: " + info.isAlcohol + "\n" + "рецепт приготовления: " + "\n" + info.recept) : alert("такого напитка нет");
}

function deleteDrink() {
    let name = prompt("Введите название напитка");
    drinkStorage.deleteValue(name) ? alert("Напиток удален") : alert("Такого напитка нет.");
}

function isBlank(str) {
    while (!str || /^\s*$/.test(str)) {
        str = prompt("Неверный ввод. Повторите попытку.")
    }
    return str;
}



